import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'A valid email address is required' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { error: 'Message must be at least 5 characters long' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.SMTP_USER || 'patilritesh7172@gmail.com';

    if (!smtpUser || !smtpPass) {
      console.warn('SMTP credentials missing. Please set SMTP_USER and SMTP_PASS in .env.local');
      return NextResponse.json(
        { error: 'Email service is not configured. Please configure SMTP_USER and SMTP_PASS in .env.local' },
        { status: 500 }
      );
    }

    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailSubject = subject?.trim() || `Portfolio Contact Form Submission from ${name.trim()}`;

    // Send email using Nodemailer
    await transporter.sendMail({
      from: `"${name.trim()}" <${smtpUser}>`,
      replyTo: email.trim(),
      to: recipientEmail,
      subject: mailSubject,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${mailSubject}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #2563eb; margin-top: 0;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
          <p><strong>Subject:</strong> ${mailSubject}</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <h4 style="margin-bottom: 8px;">Message:</h4>
          <p style="white-space: pre-wrap; background-color: #f8fafc; padding: 12px; border-radius: 6px;">${message.trim()}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Contact form Nodemailer error:', error);
    return NextResponse.json(
      { error: 'An error occurred while sending your message. Please try again later.' },
      { status: 500 }
    );
  }
}
