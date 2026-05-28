"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, vp } from "@/lib/animations";

const labelClass = "text-forest/70 font-sans text-xs uppercase tracking-wider font-semibold";
const MSG_MAX = 1500;

const nameChars = /[^a-zA-ZÀ-ÖØ-öø-ÿ'\-\s]/g;
function titleCase(v: string) {
  return v.replace(/(^|[\s\-'])(\S)/g, (_, sep, c: string) => sep + c.toUpperCase());
}

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;


function validateField(field: string, value: string): string {
  switch (field) {
    case "prenom":
      if (!value.trim()) return "Prénom requis";
      if (value.trim().length < 2) return "Minimum 2 caractères";
      return "";
    case "nom":
      if (!value.trim()) return "Nom requis";
      if (value.trim().length < 2) return "Minimum 2 caractères";
      return "";
    case "email":
      if (!value) return "Email requis";
      if (!EMAIL_RE.test(value)) return "Adresse email invalide";
      return "";
    case "phone":
      if (!value) return "";
      if (!/^0[1-9]\d{8}$/.test(value)) return "Numéro invalide (ex: 0612345678)";
      return "";
    case "message":
      if (!value.trim()) return "Message requis";
      if (value.trim().length < 10) return "Message trop court (10 caractères min.)";
      return "";
    default:
      return "";
  }
}

function inputCls(error: boolean) {
  return `w-full border rounded-xl px-3.5 py-2.5 text-sm font-sans text-forest placeholder:text-forest/30 focus:outline-none transition-all duration-200 ${
    error
      ? "border-red-400 bg-red-50/40 focus:border-red-400 focus:bg-red-50/60"
      : "bg-sage-light/50 border-sage/20 focus:border-sage focus:bg-white"
  }`;
}

export default function Contact({ className }: Readonly<{ className?: string }>) {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", phone: "", message: "", _hp: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMsg, setSubmitMsg] = useState<"" | "validation" | "server">("");

  function set(field: string, transform?: (v: string) => string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const val = transform ? transform(e.target.value) : e.target.value;
      setForm((f) => ({ ...f, [field]: val }));
      if (touched[field]) {
        const fieldErr = validateField(field, val);
        setErrors((err) => ({ ...err, [field]: fieldErr }));
        if (!fieldErr) setSubmitMsg((m) => m === "validation" ? "" : m);
      }
    };
  }

  function touch(field: string) {
    return () => {
      setTouched((t) => ({ ...t, [field]: true }));
      setErrors((err) => ({ ...err, [field]: validateField(field, form[field as keyof typeof form]) }));
    };
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const allFields = ["prenom", "nom", "email", "message"];
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    for (const f of allFields) {
      newTouched[f] = true;
      newErrors[f] = validateField(f, form[f as keyof typeof form]);
    }
    if (form.phone) newErrors.phone = validateField("phone", form.phone);
    setTouched((t) => ({ ...t, ...newTouched }));
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) {
      setSubmitMsg("validation");
      return;
    }

    setSubmitMsg("");
    setStatus("loading");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setSubmitMsg("server");
    }
  }

  const err = (field: string) => touched[field] ? errors[field] ?? "" : "";

  return (
    <section id="contact" className={`relative overflow-hidden ${className ?? "bg-sage-light py-14 sm:py-24"}`}>
      <div className="relative z-[1] w-full max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start lg:items-center">

        {/* Colonne gauche — info */}
        <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp} className="flex flex-col">
          <p className="text-forest/60 uppercase tracking-widest text-xs font-sans font-semibold mb-4">Contact</p>
          <h2 className="font-display text-forest text-3xl sm:text-5xl font-bold leading-tight mb-4">
            Parlons de<br />votre activité
          </h2>
          <p className="text-forest/70 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
            Premier échange offert, sans engagement. Je réponds rapidement.
          </p>

          <div className="flex flex-col gap-4">
            <a href="mailto:contact@yesinvoice.fr" className="group flex items-center gap-4 hover:translate-x-1 transition-transform duration-200">
              <div className="w-11 h-11 bg-forest rounded-xl flex items-center justify-center shrink-0 text-mint group-hover:bg-sage-dark transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="font-display text-forest font-bold text-base leading-none mb-1">Email</p>
                <p className="text-forest/60 font-sans text-sm">contact@yesinvoice.fr</p>
              </div>
            </a>

            <div className="w-full h-px bg-forest/8" />

            <a href="tel:0600000000" className="group flex items-center gap-4 hover:translate-x-1 transition-transform duration-200">
              <div className="w-11 h-11 bg-forest rounded-xl flex items-center justify-center shrink-0 text-mint group-hover:bg-sage-dark transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-display text-forest font-bold text-base leading-none mb-1">Téléphone</p>
                <p className="text-forest/60 font-sans text-sm">06 00 00 00 00</p>
              </div>
            </a>

            <div className="w-full h-px bg-forest/8" />

            <a href="https://instagram.com/yesinvoice" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 hover:translate-x-1 transition-transform duration-200">
              <div className="w-11 h-11 bg-forest rounded-xl flex items-center justify-center shrink-0 text-mint group-hover:bg-sage-dark transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <p className="font-display text-forest font-bold text-base leading-none mb-1">Instagram</p>
                <p className="text-forest/60 font-sans text-sm">@yesinvoice</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Colonne droite — formulaire */}
        <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={vp}>
          {status === "success" ? (
            <div className="bg-white rounded-2xl px-6 py-14 sm:px-10 sm:py-16 flex flex-col items-center text-center shadow-lg gap-4">
              <div className="w-14 h-14 rounded-full bg-sage/15 flex items-center justify-center mb-1">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-dark">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="font-script text-sage-dark text-4xl sm:text-5xl">Merci !</p>
              <p className="text-forest/70 font-sans text-sm sm:text-base max-w-xs leading-relaxed">
                Votre message a bien été envoyé. Je vous réponds dans les plus brefs délais.
              </p>
              <button
                onClick={() => { setStatus("idle"); setForm({ prenom: "", nom: "", email: "", phone: "", message: "", _hp: "" }); setTouched({}); setErrors({}); }}
                className="mt-2 text-xs font-sans font-semibold text-sage-dark underline underline-offset-2 hover:text-forest transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl p-5 sm:p-7 shadow-lg flex flex-col gap-3.5">
              {/* Honeypot */}
              <input type="text" name="website" value={form._hp} onChange={set("_hp")} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute opacity-0 w-0 h-0 overflow-hidden pointer-events-none" />

              {/* Prénom + Nom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-prenom" className={labelClass}>
                    Prénom <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-prenom" type="text" required maxLength={50}
                    value={form.prenom}
                    onChange={set("prenom", (v) => titleCase(v.replace(nameChars, "").slice(0, 50)))}
                    onBlur={touch("prenom")}
                    placeholder="Votre prénom"
                    autoComplete="given-name"
                    className={inputCls(!!err("prenom"))}
                  />
                  {err("prenom") && <p className="text-red-500 text-xs font-sans">{err("prenom")}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-nom" className={labelClass}>
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-nom" type="text" required maxLength={50}
                    value={form.nom}
                    onChange={set("nom", (v) => v.replace(nameChars, "").slice(0, 50).toUpperCase())}
                    onBlur={touch("nom")}
                    placeholder="VOTRE NOM"
                    autoComplete="family-name"
                    className={inputCls(!!err("nom"))}
                  />
                  {err("nom") && <p className="text-red-500 text-xs font-sans">{err("nom")}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className={labelClass}>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email" type="email" required maxLength={254}
                  value={form.email}
                  onChange={set("email")}
                  onBlur={touch("email")}
                  placeholder="votre@email.fr"
                  autoComplete="email"
                  className={inputCls(!!err("email"))}
                />
                {err("email") && <p className="text-red-500 text-xs font-sans">{err("email")}</p>}
              </div>

              {/* Téléphone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-phone" className={labelClass}>
                  Téléphone{" "}
                  <span className="text-forest/35 normal-case tracking-normal font-normal">(optionnel)</span>
                </label>
                <input
                  id="contact-phone" type="tel" maxLength={10}
                  value={form.phone}
                  onChange={set("phone", (v) => v.replace(/\D/g, "").slice(0, 10))}
                  onBlur={touch("phone")}
                  placeholder="0612345678"
                  autoComplete="tel"
                  className={inputCls(!!err("phone"))}
                />
                {err("phone") && <p className="text-red-500 text-xs font-sans">{err("phone")}</p>}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="contact-message" className={labelClass}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <span className={`font-sans text-xs tabular-nums ${form.message.length >= MSG_MAX ? "text-red-400" : "text-forest/30"}`}>
                    {form.message.length}/{MSG_MAX}
                  </span>
                </div>
                <textarea
                  id="contact-message" required rows={4} maxLength={MSG_MAX}
                  value={form.message}
                  onChange={set("message", (v) => v.slice(0, MSG_MAX))}
                  onBlur={touch("message")}
                  placeholder="Décrivez votre situation en quelques mots..."
                  className={`${inputCls(!!err("message"))} resize-none`}
                />
                {err("message") && <p className="text-red-500 text-xs font-sans">{err("message")}</p>}
              </div>

              {submitMsg === "validation" && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p className="text-red-600 text-sm font-sans leading-snug">Veuillez corriger les erreurs avant d&apos;envoyer le formulaire.</p>
                </div>
              )}

              {submitMsg === "server" && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0 mt-0.5">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p className="text-red-600 text-sm font-sans leading-snug">Une erreur est survenue. Réessayez ou écrivez-moi directement à contact@yesinvoice.fr</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-forest text-mint font-sans font-bold px-8 py-4 text-base rounded-xl hover:bg-sage-dark transition-all duration-200 disabled:opacity-50"
              >
                {status === "loading" ? "Envoi…" : "Envoyer →"}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
