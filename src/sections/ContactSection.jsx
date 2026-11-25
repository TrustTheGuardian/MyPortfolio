const LINKS = [
  {
    label: 'GitHub',
    prefix: 'GIT //',
    value: 'TrustTheGuardian',
    href: 'https://github.com/TrustTheGuardian',
    description: 'Open-source projects & security tooling',
  },
  {
    label: 'LinkedIn',
    prefix: 'IN //',
    value: '/in/jason-gomez-91b069249',
    href: 'https://www.linkedin.com/in/jason-gomez-91b069249',
    description: 'Professional network & endorsements',
  },
  {
    label: 'Email',
    prefix: 'MAIL //',
    value: 'jasonsantos1228@gmail.com',
    href: 'mailto:jasonsantos1228@gmail.com',
    description: 'Direct correspondence',
  },
]

export default function ContactSection() {
  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#16FF00]">Contact</h2>
        <div className="text-xs font-mono opacity-50 mb-2">&gt;&gt; SECURE_CHANNEL_06</div>
      </div>

      {/* Intro */}
      <div className="border border-[#16FF00]/20 bg-[#16FF00]/5 p-6 mb-10 max-w-2xl">
        <p className="text-sm text-white/80 font-mono leading-relaxed">
          Open to opportunities in cybersecurity, penetration testing, and software development.
          Reach out through any channel below — response time is typically within 24 hours.
        </p>
      </div>

      {/* Contact links */}
      <div className="space-y-4 font-mono max-w-2xl">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className="flex items-center gap-4 border border-[#16FF00]/20 p-5 bg-black/40 hover:border-[#16FF00] hover:bg-[#16FF00]/5 transition-all group"
          >
            <div className="text-[#16FF00] font-bold text-xs uppercase tracking-widest whitespace-nowrap w-24 opacity-60 group-hover:opacity-100">
              {link.prefix}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-white group-hover:text-[#16FF00] transition-colors truncate font-bold">{link.value}</p>
              <p className="text-xs opacity-50 mt-0.5">{link.description}</p>
            </div>
            <div className="text-[#16FF00]/30 group-hover:text-[#16FF00] transition-colors text-lg">↗</div>
          </a>
        ))}
      </div>

      {/* Footer transmission */}
      <div className="mt-16 border-t border-dashed border-[#16FF00]/20 pt-6">
        <p className="text-[9px] opacity-30 font-mono tracking-[0.3em]">
          JASON GOMEZ // CS STUDENT // ANGELES CITY, PH // {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

