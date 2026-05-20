"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-forest border-t border-mint/10 px-5 py-4 sm:py-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-mint/70 font-sans text-xs sm:text-sm leading-relaxed max-w-2xl">
          Ce site utilise des cookies techniques nécessaires à son fonctionnement.
          Aucune donnée n&apos;est transmise à des tiers à des fins publicitaires.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={refuse}
            className="text-mint/50 font-sans text-xs px-4 py-2 border border-mint/20 hover:border-mint/40 hover:text-mint/80 transition-all duration-200 rounded-full"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="bg-sage text-white font-sans font-semibold text-xs px-5 py-2 hover:bg-sage-dark transition-all duration-200 rounded-full"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
