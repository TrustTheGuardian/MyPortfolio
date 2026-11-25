export default function Footer() {
  const scrollToTop = () => {
    const mainEl = document.querySelector('main')
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const QUICK_LINKS = [
    { label: 'GITHUB', href: 'https://github.com/TrustTheGuardian', external: true },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/jason-gomez-91b069249', external: true },
    { label: 'MEDIUM', href: 'https://medium.com/@jasonsantos1228', external: true },
    { label: 'EMAIL', href: 'mailto:jasonsantos1228@gmail.com', external: false },
  ]

  return (
    <footer className="border-t border-[#16FF00]/20 py-4 px-6 bg-[#050505] font-mono text-xs select-none">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Left: Copyright */}
        <div className="text-[11px] tracking-widest text-white/50 text-center md:text-left">
          &copy; 2026 JASON GOMEZ // ALL RIGHTS RESERVED
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] tracking-wider">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-[#16FF00]/70 hover:text-[#16FF00] hover:underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Status & Top button */}
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-[10px] tracking-widest text-[#16FF00]/60">
            STATUS: ONLINE // PH_NODE
          </span>
          <span className="text-[#16FF00]/20">|</span>
          <button
            onClick={scrollToTop}
            className="border border-[#16FF00]/30 px-2 py-0.5 text-[10px] text-[#16FF00]/80 hover:text-black hover:bg-[#16FF00] hover:border-[#16FF00] transition-colors tracking-widest uppercase cursor-pointer"
            aria-label="Scroll to top"
          >
            [^] TOP
          </button>
        </div>
      </div>
    </footer>
  )
}

