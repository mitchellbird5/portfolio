// tests/contact.test.ts
import { POST, submissions } from "../src/app/api/contact/route";

// --- Mock Nodemailer ---
const sendMailMock = jest.fn().mockResolvedValue(true);

jest.mock("nodemailer", () => {
  return {
    createTransport: jest.fn(() => ({
      sendMail: sendMailMock, // reference the mock declared outside
    })),
  };
});

// --- Fake environment variables ---
process.env.DOMAIN_EMAIL_USER = "test@test.com";
process.env.DOMAIN_EMAIL_PASS = "testpass";

// --- Helpers to create mock Request objects ---
function createMockRequest(body: Record<string, unknown>): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

// Helper to read JSON from Response
async function getJson(res: Response) {
  return JSON.parse(await res.text());
}

describe("Contact API", () => {
  beforeEach(() => {
    // Clear in-memory rate-limiting
    Object.keys(submissions).forEach((key) => delete submissions[key]);

    // Reset nodemailer mock
    sendMailMock.mockClear();
  });

  it("rejects submission with honeypot filled", async () => {
    const req = createMockRequest({
      name: "Test",
      email: "test@example.com",
      message: "Hello",
      honeypot: "bot filled this",
    });

    const res = await POST(req);
    const json = await getJson(res);

    expect(res.status).toBe(400);
    expect(json).toEqual({ error: "Bot detected" });
  });

  it("rejects invalid email", async () => {
    const req = createMockRequest({
      name: "Test",
      email: "invalid-email",
      message: "Hello",
      honeypot: "",
    });

    const res = await POST(req);
    const json = await getJson(res);

    expect(res.status).toBe(400);
    expect(json).toEqual({ error: "Invalid input" });
  });

  it("accepts valid submission", async () => {
    const req = createMockRequest({
      name: "John",
      email: "john@example.com",
      message: "Hi there",
      honeypot: "",
    });

    const res = await POST(req);
    const json = await getJson(res);

    expect(res.status).toBe(200);
    expect(json).toEqual({ success: true });
    expect(sendMailMock).toHaveBeenCalledTimes(1);
  });

  it("blocks excessive submissions (rate limiting)", async () => {
    const req = createMockRequest({
      name: "John",
      email: "john@example.com",
      message: "Hi",
      honeypot: "",
    });

    // Simulate 5 rapid submissions
    for (let i = 0; i < 5; i++) {
      await POST(req);
    }

    // 6th submission should trigger rate limit
    const res = await POST(req);
    const json = await getJson(res);

    expect(res.status).toBe(429);
    expect(json).toEqual({
      error: "Too many requests. Please wait a moment.",
    });
  });
});
