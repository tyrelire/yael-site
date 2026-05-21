export default function Footer() {
  return (
    <footer className="bg-forest py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <a href="/" aria-label="Yes Invoice — accueil" className="flex items-center shrink-0 select-none">
            <span className="font-script text-sage text-[2rem] leading-none">Y</span>
            <span className="font-display text-mint text-[1.25rem] font-bold leading-none -ml-[1px]">es</span>
            <span className="ml-2 font-sans text-[9px] text-mint/50 uppercase tracking-[0.2em] font-semibold self-end mb-[3px]">Invoice</span>
          </a>
          <p className="text-mint/40 text-xs font-sans text-center">
            La facturation pensée pour les infirmières et infirmiers libéraux
          </p>
          <p className="text-mint/30 text-xs font-sans">© 2026 Yes Invoice</p>
        </div>
      </div>
    </footer>
  );
}
