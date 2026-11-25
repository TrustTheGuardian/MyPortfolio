const WORK_EXPERIENCE = [
  {
    id: 'innodata',
    title: 'Freelance Data Annotator',
    org: 'Innodata Inc.',
    period: 'April 2026 – August 2026',
    type: 'CONTRACT',
    bullets: [
      'Executed precise structural segmentation of digital assets to enhance the accuracy of machine learning training models.',
      'Evaluated and annotated complex audio datasets to ensure high-quality, reliable inputs for AI system development.',
    ],
  },
]

const LEADERSHIP = [
  {
    id: 'ic-adviser',
    title: 'Institute Council — Student Adviser',
    org: 'City College of Angeles',
    period: 'August 2026 – Present',
    type: 'CURRENT',
    description:
      'Elected as Institute Council Student Adviser, supporting the organization by leveraging past Vice-Presidential experience.',
  },
  {
    id: 'ic-vp',
    title: 'Institute Council — Vice President',
    org: 'City College of Angeles',
    period: 'August 2025 – August 2026',
    type: 'COMPLETED',
    description:
      'Elected as Institute Council Vice President, supporting the President in leading organizational initiatives, student programs, and institutional activities.',
  },
  {
    id: 'exploit-unit',
    title: 'Exploit Unit — Founder & Team Leader',
    org: 'City College of Angeles',
    period: 'December 2025 – Present',
    type: 'CURRENT',
    description:
      'Founded and led the Exploit Unit, organizing a team focused on ethical hacking and cybersecurity practices; conducted training sessions on penetration testing, vulnerability assessment, and exploitation techniques.',
  },
  {
    id: 'devcon',
    title: 'DEVCON Pampanga — Member',
    org: 'Developer Community',
    period: 'September 2025 – Present',
    type: 'CURRENT',
    description:
      'Participating in developer community activities such as tech events and knowledge-sharing initiatives.',
  },
]

function WorkCard({ item }) {
  return (
    <div className="border border-[#16FF00]/20 bg-black/40 hover:bg-[#16FF00]/5 transition-colors">
      <div className="p-5 flex flex-col md:flex-row md:items-start justify-between gap-3">
        <div>
          <p className="font-bold text-white text-base">{item.title}</p>
          <p className="text-xs text-[#16FF00]/70 mt-0.5 font-mono">{item.org.toUpperCase()}</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
          <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">{item.period}</span>
          <span className="text-[10px] border border-[#16FF00]/20 px-2 py-0.5 text-[#16FF00]/70 font-mono">{item.type}</span>
        </div>
      </div>
      <div className="border-t border-[#16FF00]/20 px-5 pb-5 pt-3 bg-black/20">
        <ul className="space-y-2">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/80 font-mono">
              <span className="text-[#16FF00] mt-0.5 flex-shrink-0">&gt;&gt;</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function LeadershipCard({ item }) {
  const isCurrent = item.type === 'CURRENT'
  return (
    <div
      className={`border-l-2 transition-colors ${
        isCurrent ? 'border-[#16FF00] bg-[#16FF00]/5' : 'border-[#16FF00]/30'
      }`}
    >
      <div className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <p className={`font-bold text-base ${isCurrent ? 'text-white' : 'text-white/90'}`}>
            {item.title}
          </p>
          <p className={`text-xs mt-0.5 font-mono ${isCurrent ? 'text-[#16FF00]/70' : 'text-white/50'}`}>
            {item.org.toUpperCase()} // {item.period.toUpperCase()}
          </p>
        </div>
        <div className="mt-2 md:mt-0 flex-shrink-0">
          <span
            className={`block text-[10px] px-2 py-1 border font-mono ${
              isCurrent
                ? 'text-[#16FF00] border-[#16FF00]/20 bg-[#16FF00]/10 animate-pulse'
                : 'text-white/60 border-white/10'
            }`}
          >
            {item.type}
          </span>
        </div>
      </div>
      <div className="border-t border-[#16FF00]/20 px-4 pb-4 pt-2 bg-black/20">
        <p className="text-sm text-white/80 font-mono leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#16FF00]">Experience</h2>
        <div className="text-xs font-mono opacity-50 mb-2">&gt;&gt; SERVICE_RECORD_02</div>
      </div>

      {/* ── WORK EXPERIENCE ──────────────────────────────────── */}
      <div className="mb-10">
        <h3 className="font-bold mb-4 uppercase tracking-widest text-[#16FF00] flex items-center font-mono">
          <span className="w-2 h-2 bg-[#16FF00] mr-2" />
          Work Experience
        </h3>
        <div className="space-y-3">
          {WORK_EXPERIENCE.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* ── LEADERSHIP & ACTIVITIES ──────────────────────────── */}
      <div className="my-10 border-b border-dashed border-[#16FF00]/40 flex justify-center">
        <span className="bg-[#0a0a0a] px-4 text-[10px] text-[#16FF00]/50 tracking-[0.3em] -mb-2">
          LEADERSHIP &amp; ACTIVITIES
        </span>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-4 uppercase tracking-widest text-[#16FF00] flex items-center font-mono">
          <span className="w-2 h-2 bg-[#16FF00] mr-2" />
          Leadership &amp; Activities
        </h3>
        <div className="space-y-3 font-mono text-sm">
          {LEADERSHIP.map((item) => (
            <LeadershipCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
