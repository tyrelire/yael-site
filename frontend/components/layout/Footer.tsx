import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-forest py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-28 h-9">
            <Image src="/assets/logo.png" alt="Yes Invoice" fill sizes="112px" className="object-contain object-center sm:object-left brightness-0 invert opacity-80" />
          </div>
          <p className="text-mint/40 text-xs font-sans text-center">
            La facturation pensée pour les infirmières et infirmiers libéraux
          </p>
          <p className="text-mint/30 text-xs font-sans">© 2026 Yes Invoice</p>
        </div>
      </div>
    </footer>
  );
}
