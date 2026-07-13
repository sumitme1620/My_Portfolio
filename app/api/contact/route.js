import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot: bots fill this hidden field. Pretend success without sending.
    if (body.company) {
      return NextResponse.json({ success: true, message: "Form Submitted Successfully" });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name, email and message." },
        { status: 400 }
      );
    }

    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
      console.error("Mail credentials are not configured.");
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      // Send as the authenticated account so SPF/DKIM pass; reply goes to the visitor.
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Form Submitted Successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
