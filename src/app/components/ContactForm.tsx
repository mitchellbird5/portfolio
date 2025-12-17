"use client";

import { useState } from "react";
import Section, { Align } from "./Section";

interface ContactFormProps {
  align: Align;
}

export default function ContactForm({ align }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- Honeypot check ---
    if (formData.honeypot) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Try again.");
    }
  };

  return (
    <Section id="contact" title="Get In Touch" align={align}>
      <div className="contact-container">
        <p className="contact-intro">
          Have a project in mind? Let&apos;s create something amazing together!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          {/* Honeypot field */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            style={{ display: "none" }}
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
            rows={5}
            required
          />

          <button type="submit" className="contact-submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="text-green-500 mt-2">Message sent! Thank you.</p>}
          {status === "error" && (
            <p className="text-red-500 mt-2">{errorMsg || "Something went wrong. Try again."}</p>
          )}
        </form>
      </div>
    </Section>
  );
}
