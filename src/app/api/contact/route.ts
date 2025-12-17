// src/app/api/contact/route.ts
import nodemailer from "nodemailer";

interface ContactFormBody {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

// Simple in-memory rate limiting per IP
const submissions: Record<string, number[]> = {};

function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

// Create transporter using Namecheap Private Email SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.privateemail.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: process.env.DOMAIN_EMAIL_USER, 
    pass: process.env.DOMAIN_EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  const body = (await req.json()) as ContactFormBody;
  const { name, email, message, honeypot } = body;

  if (honeypot) return new Response(JSON.stringify({ error: "Bot detected" }), { status: 400 });
  if (!name || !email || !message || !isValidEmail(email)) {
    return new Response(JSON.stringify({ error: "Invalid input" }), { status: 400 });
  }

  // Rate limiting
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  submissions[ip] = submissions[ip] || [];
  submissions[ip] = submissions[ip].filter((t) => now - t < 60_000);
  if (submissions[ip].length >= 5) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Please wait a moment." }),
      { status: 429 }
    );
  }
  submissions[ip].push(now);

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.DOMAIN_EMAIL_USER}>`,
      to: process.env.DOMAIN_EMAIL_USER,
      replyTo: email,
      subject: `${name} sent you a message via your website`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>
             <hr />
             <p style="font-size:12px;color:#666">Sent via your portfolio website contact form.</p>`,
    });

    console.log("Contact Form Submission:", { name, email, message });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}

export { submissions };
