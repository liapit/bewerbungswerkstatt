import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { EMAIL_FROM, NOTIFICATION_ADDRESSES } from "@/lib/constants";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildNotificationHtml(
  name: string,
  email: string,
  message: string,
): string {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a1a2e;">Neue Kontaktanfrage</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
          <td style="padding: 8px 0;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555;">E-Mail:</td>
          <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Nachricht:</td>
          <td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(message)}</td>
        </tr>
      </table>
      <hr style="margin-top: 24px; border: none; border-top: 1px solid #eee;" />
      <p style="color: #999; font-size: 12px;">Diese Nachricht wurde über das Kontaktformular auf bewerbungswerkstatt.ch gesendet.</p>
    </div>
  `;
}

function buildConfirmationHtml(name: string, message: string): string {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1a1a2e;">Vielen Dank für Ihre Anfrage!</h2>
      <p>Guten Tag ${escapeHtml(name)}</p>
      <p>wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.</p>
      <p><strong>Ihre Nachricht:</strong></p>
      <blockquote style="border-left: 3px solid #ccc; padding-left: 12px; color: #555; white-space: pre-wrap;">${escapeHtml(message)}</blockquote>
      <p>Freundliche Grüsse<br/>Bewerbungswerkstatt<br/>Digital Trust Solutions GmbH</p>
      <hr style="margin-top: 24px; border: none; border-top: 1px solid #eee;" />
      <p style="color: #999; font-size: 12px;">Dies ist eine automatische Bestätigung. Bitte antworten Sie nicht auf diese E-Mail.</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Ungültige Eingaben.", details: result.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, message } = result.data;

    const [notificationResult, confirmationResult] = await Promise.all([
      resend.emails.send({
        from: EMAIL_FROM,
        to: NOTIFICATION_ADDRESSES,
        replyTo: email,
        subject: `Neue Kontaktanfrage von ${name}`,
        html: buildNotificationHtml(name, email, message),
      }),
      resend.emails.send({
        from: EMAIL_FROM,
        to: [email],
        subject: "Ihre Anfrage bei Bewerbungswerkstatt",
        html: buildConfirmationHtml(name, message),
      }),
    ]);

    if (notificationResult.error || confirmationResult.error) {
      console.error(
        "Email send error:",
        notificationResult.error,
        confirmationResult.error,
      );
      return NextResponse.json(
        { error: "E-Mail konnte nicht gesendet werden." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 },
    );
  }
}
