import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiter en mémoire : 3 envois max par IP par fenêtre de 10 minutes.
// Fonctionne pour un déploiement single-instance (VPS, Docker).
// Sur Vercel/serverless multi-instance, remplacer par Upstash Redis.
const rateMap = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateMap.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  recent.push(now);
  rateMap.set(ip, recent);
  return false;
}

function esc(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans quelques minutes." },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { prenom, nom, email, phone, message, _hp } = body;

  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  if (!prenom || !nom || !email || !message) {
    return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
  }

  if (
    prenom.length > 100 || nom.length > 100 ||
    email.length > 200 || message.length > 5000 ||
    (phone && phone.length > 30)
  ) {
    return NextResponse.json({ error: "Contenu trop long." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Yes Invoice <noreply@yesinvoice.fr>",
    to: process.env.CONTACT_EMAIL ?? "contact@yesinvoice.fr",
    replyTo: email,
    subject: `Nouveau message de ${esc(prenom)} ${esc(nom)}`,
    html: `
      <p><strong>Prénom :</strong> ${esc(prenom)}</p>
      <p><strong>Nom :</strong> ${esc(nom)}</p>
      <p><strong>Email :</strong> ${esc(email)}</p>
      ${phone ? `<p><strong>Téléphone :</strong> ${esc(phone)}</p>` : ""}
      <p><strong>Message :</strong></p>
      <p style="white-space:pre-wrap">${esc(message)}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
