import { useState, useContext } from 'react'
import { LightboxContext } from '../App'

// ── Action Buttons ────────────────────────────────────────────────────────────
function SummaryActions() {
  const { navigate } = useContext(LightboxContext)
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      <button
        onClick={() => navigate('credentials')}
        className="flex items-center gap-2 border border-[#16FF00] px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#16FF00] hover:bg-[#16FF00] hover:text-black transition-colors"
      >
        <span>&gt;&gt;</span> View Credentials
      </button>
      <a
        href="/Resume_Jason_Gomez.pdf"
        download
        className="flex items-center gap-2 border border-[#16FF00]/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#16FF00]/70 hover:border-[#16FF00] hover:text-[#16FF00] hover:bg-[#16FF00]/10 transition-colors"
      >
        <span>↓</span> Download Resume
      </a>
    </div>
  )
}

function ClassifiedName() {
  return (
    <p className="text-3xl font-bold tracking-tight flex items-center gap-3 mt-1">
      <span>JASON</span>
      <span className="relative group cursor-crosshair inline-block">
        <span className="bg-[#16FF00] text-black px-2 select-none group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
          [CLASSIFIED]
        </span>
        <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-[#16FF00] whitespace-nowrap px-2">
          GOMEZ
        </span>
      </span>
    </p>
  )
}

const HONORS = [
  {
    id: 'hack5gov',
    date: 'October 20, 2026',
    title: 'Hack5Gov Regional 3 CTF 2026',
    role: 'Student Coach',
    result: 'COACH',
    highlight: false,
    description:
      'Mentored participants in security tactics and guided teams through complex CTF challenges and post-event debriefs.',
    photos: [
      '/images/Events/Hack5Gov/1792688806408.jpg',
      '/images/Events/Hack5Gov/1792688807045.jpg',
      '/images/Events/Hack5Gov/1792688806468.jpg',
      '/images/Events/Hack5Gov/1792688806497.jpg',
    ],
  },
  {
    id: 'clctf2026',
    date: 'June 23, 2026',
    title: 'Central Luzon CTF 2026',
    role: 'Participant',
    result: 'PARTICIPANT',
    highlight: false,
    description:
      'Analyzed complex Capture the Flag challenges under strict time constraints.',
    photos: [
      '/images/Events/CLCTF/1782659489442.jpg',
      '/images/Events/CLCTF/1782659488259.jpg',
      '/images/Events/CLCTF/1782659476129.jpg',
      '/images/Events/CLCTF/1782659482410.jpg',
    ],
  },
  {
    id: 'cisco-ctf',
    date: 'January 16, 2026',
    title: 'Cisco Regional Student Congress 2026 — Ethical Hacking CTF',
    role: 'Team Leader · Exploit Unit',
    result: 'CHAMPION 🏆',
    highlight: true,
    description:
      'Secured first place alongside the Exploit Unit team by collaboratively demonstrating advanced penetration testing, cryptography, and system exploitation skills.',
    photos: [
      '/images/Events/EthicalHacking/IMG_7017.jpg',
      '/images/Events/EthicalHacking/att.ywjTrVlHotDcRXSP-jPkxoB0dVlWMHJzscRin-APaVE.jpg',
      '/images/Events/EthicalHacking/att.ZzpgVoImm9iC0tc2CR6EMVGQpDuXMAQni2H4soiHFM0.jpg',
      '/images/Events/EthicalHacking/IMG_2992.jpg',
      '/images/Events/EthicalHacking/IMG_3008.jpg',
      '/images/Events/EthicalHacking/IMG_3007.jpg',
      '/images/Events/EthicalHacking/IMG_7011.jpg',
      '/images/Events/EthicalHacking/IMG_7189.jpg',
      '/images/Events/EthicalHacking/Ethical_Hacking_-_Exploit_Unit_CTF_Poster.png',
    ],
  },
  {
    id: 'hack4gov',
    date: 'December 4, 2025',
    title: 'Hack4Gov Regional 3 CTF 2025',
    role: 'Participant',
    result: 'PARTICIPANT',
    highlight: false,
    description:
      'Analyzed complex Capture the Flag challenges under strict time constraints.',
    photos: [
      '/images/Events/Hack4Gov/photo_1_2026-01-27_22-19-56.jpg',
      '/images/Events/Hack4Gov/photo_3_2026-01-27_22-19-56.jpg',
      '/images/Events/Hack4Gov/photo_5_2026-01-27_22-19-56.jpg',
      '/images/Events/Hack4Gov/photo_6_2026-01-27_22-19-56.jpg',
      '/images/Events/Hack4Gov/photo_7_2026-01-27_22-19-56.jpg',
      '/images/Events/Hack4Gov/photo_8_2026-01-27_22-19-56.jpg',
      '/images/Events/Hack4Gov/photo_9_2026-01-27_22-19-56.jpg',
    ],
  },
  {
    id: 'cloudstaff',
    date: 'November 24–25, 2025',
    title: 'Cloudstaff AI Hackathon',
    role: 'Developer',
    result: 'PARTICIPANT',
    highlight: false,
    description:
      'Co-developed "BayaNiJuan," an AI-integrated disaster response application, conceptualizing and deploying core features within a 48-hour development window.',
    photos: [
      '/images/Events/Hackathon/1.jpg',
      '/images/Events/Hackathon/2.jpg',
      '/images/Events/Hackathon/3.jpg',
      '/images/Events/Hackathon/4.jpg',
      '/images/Events/Hackathon/5.jpg',
      '/images/Events/Hackathon/6.jpg',
    ],
  },
]

const THESIS_PHOTOS = [
  '/images/Thesis/893292691_1151348671088492_8952165851934498822_n.jpg',
  '/images/Thesis/893799930_1104504459051475_3746440557422995906_n.jpg',
  '/images/Thesis/896731397_1462441939174219_6764950595704096628_n.jpg',
  '/images/Thesis/899685908_1480393600854760_4719123424763548619_n.jpg',
]

export default function AboutSection() {
  const { navigate, openLightbox } = useContext(LightboxContext)
  const [openHonor, setOpenHonor] = useState(null)

  const toggleHonor = (id) => setOpenHonor((prev) => (prev === id ? null : id))

  return (
    <div>
      {/* Section header */}
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#16FF00]">About_Me</h2>
        <div className="text-xs font-mono opacity-50 mb-2">&gt;&gt; PERSONNEL_FILE_01</div>
      </div>

      {/* Profile + Info grid */}
      <div className="flex flex-col xl:flex-row gap-10 items-start mb-12">

        {/* Profile image card */}
        <div className="relative w-72 h-[28rem] flex-shrink-0 border-2 border-[#16FF00]/50 overflow-hidden group rounded-sm bg-black shadow-[0_0_20px_rgba(22,255,0,0.1)] mx-auto xl:mx-0">
          <img
            src="/images/Profile/agent_front.png"
            alt="Jason Gomez"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-75 ease-linear group-hover:opacity-0"
          />
          <img
            src="/images/Profile/agent_back.png"
            alt="Jason Gomez (back)"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-75 ease-linear group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#16FF00]/30 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
          <div className="corner-tl" />
          <div className="corner-br" />
        </div>

        {/* Info panel */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 w-full">

          {/* Identity card */}
          <div className="space-y-6 font-mono text-sm border border-[#16FF00]/30 bg-[#16FF00]/5 p-6 relative">
            <div className="absolute top-2 right-2 opacity-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16FF00" strokeWidth="1.5">
                <path d="M16 3h5v5M4 20L20 4M21 16v5h-5M8 21H3v-5M3 8V3h5" />
              </svg>
            </div>

            <div>
              <span className="text-[#16FF00]/60 uppercase tracking-widest text-xs">[ NAME ]</span>
              <ClassifiedName />
            </div>

            <div>
              <span className="text-[#16FF00]/60 uppercase tracking-widest text-xs">[ TARGET ROLE ]</span>
              <p className="text-lg mt-1 text-white border-l-2 border-[#16FF00] pl-3">Aspiring Penetration Tester</p>
            </div>

            <div>
              <span className="text-[#16FF00]/60 uppercase tracking-widest text-xs">[ AFFILIATIONS ]</span>
              <ul className="mt-2 space-y-1 font-mono text-sm">
                {[
                  'City College of Angeles',
                  ['Institute Council', 'STUDENT ADVISER'],
                  ['Exploit Unit', 'FOUNDER & LEADER'],
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-[#16FF00] mr-2">&gt;&gt;</span>
                    {Array.isArray(item) ? (
                      <span>
                        {item[0]}{' '}
                        <span className="text-[#16FF00] text-xs border border-[#16FF00] px-1 ml-1 uppercase">{item[1]}</span>
                      </span>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[#16FF00]/60 uppercase tracking-widest text-xs">[ CONTACT ]</span>
              <ul className="mt-2 space-y-2 font-mono text-sm">
                <li className="flex items-center overflow-hidden">
                  <span className="text-[#16FF00] mr-2">@</span>
                  <a href="mailto:jasonsantos1228@gmail.com" className="hover:text-white hover:underline truncate">jasonsantos1228@gmail.com</a>
                </li>
                <li className="flex items-center overflow-hidden">
                  <span className="text-[#16FF00] mr-2">IN</span>
                  <a href="https://www.linkedin.com/in/jason-gomez-91b069249" target="_blank" rel="noreferrer" className="hover:text-white hover:underline truncate">/in/jason-gomez-91b069249</a>
                </li>
                <li className="flex items-center overflow-hidden">
                  <span className="text-[#16FF00] mr-2">GIT</span>
                  <a href="https://github.com/TrustTheGuardian" target="_blank" rel="noreferrer" className="hover:text-white hover:underline truncate">github.com/TrustTheGuardian</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bio + Interests */}
          <div className="space-y-6">
            <div className="bg-[#16FF00]/5 p-6">
              <h3 className="font-bold mb-3 uppercase tracking-widest underline decoration-[#16FF00]/30 text-[#16FF00]">Professional Summary</h3>
              <p className="text-sm leading-relaxed opacity-90 text-white text-justify">
                Computer Science student at City College of Angeles specialising in offensive security.
                Red Team enthusiast with hands-on experience in penetration testing, vulnerability analysis,
                and security tool development. Founder and Team Leader of the Exploit Unit CTF team, and
                current Institute Council Student Adviser.
              </p>
              <SummaryActions />
            </div>

            <div className="border border-[#16FF00]/20 p-6 bg-black/40 relative">
              <div className="absolute top-2 right-2 opacity-20">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16FF00" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 className="font-bold mb-4 uppercase tracking-widest opacity-60 text-xs">Technical Stack</h3>
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <p className="text-[#16FF00] text-[9px] tracking-widest uppercase mb-1.5">Offensive Security</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Kali Linux', 'Burp Suite', 'Metasploit', 'Wireshark', 'Nmap', 'OSINT'].map((t) => (
                      <span key={t} className="bg-[#16FF00]/10 border border-[#16FF00]/30 px-2 py-0.5 text-[#16FF00] hover:bg-[#16FF00]/20 transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[#16FF00] text-[9px] tracking-widest uppercase mb-1.5">Languages &amp; Dev</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'JavaScript', 'TypeScript', 'Bash', 'Java', 'HTML/CSS', 'PHP'].map((t) => (
                      <span key={t} className="bg-[#16FF00]/10 border border-[#16FF00]/30 px-2 py-0.5 text-[#16FF00] hover:bg-[#16FF00]/20 transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[#16FF00] text-[9px] tracking-widest uppercase mb-1.5">Frameworks &amp; Tools</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['PWA', 'Android Dev', 'n8n', 'MySQL', 'MITRE ATT&CK', 'OWASP'].map((t) => (
                      <span key={t} className="bg-[#16FF00]/10 border border-[#16FF00]/30 px-2 py-0.5 text-[#16FF00] hover:bg-[#16FF00]/20 transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── EDUCATION ─────────────────────────────────────────── */}
      <div className="my-12 border-b border-dashed border-[#16FF00]/40 flex justify-center">
        <span className="bg-[#0a0a0a] px-4 text-[10px] text-[#16FF00]/50 tracking-[0.3em] -mb-2">EDUCATION</span>
      </div>

      <div className="mb-12">
        <h3 className="font-bold mb-4 uppercase tracking-widest text-[#16FF00] flex items-center">
          <span className="w-2 h-2 bg-[#16FF00] mr-2" />
          Education
        </h3>
        <div className="border border-[#16FF00]/20 bg-[#16FF00]/5 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-30 text-[#16FF00] font-mono text-[10px]">
            [ STATUS: ACTIVE_STUDENT ]
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="text-xl font-bold text-white tracking-tight">Bachelor of Science in Computer Science</h4>
              <p className="text-[#16FF00] text-sm mt-1 flex items-center gap-2">
                <span>&gt;&gt; City College of Angeles</span>
                <span className="w-1 h-1 bg-[#16FF00] rounded-full" />
                <span className="opacity-70">Institute of Computing Studies</span>
              </p>
            </div>
            <div className="text-left md:text-right font-mono text-xs space-y-1 opacity-80">
              <p>TIMELINE: <span className="text-white">2023 – PRESENT</span></p>
              <p>LOCATION: <span className="text-white">Angeles City, PH</span></p>
            </div>
          </div>

          {/* Academic & Leadership Highlights */}
          <div className="mt-5 pt-4 border-t border-[#16FF00]/20">
            <ul className="space-y-1.5 font-mono text-xs text-white/90">
              {[
                "Dean's Lister 2023 – Current",
                'Running for Laude',
                'ICSLIS Vice President 2025',
                'ICSLIS Student Adviser 2026',
                'Exploit Unit Team Leader and Founder',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#16FF00]">&gt;&gt;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Thesis Subsection */}
            <div className="mt-5 pt-4 border-t border-[#16FF00]/15 space-y-3 font-mono">
              <div>
                <p className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="text-[#16FF00]">&gt;&gt;</span>
                  <span>Thesis: <span className="text-[#16FF00]">SmileCheck Dental Clinic Web Application</span></span>
                </p>
                <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
                  Developed a web application for appointment scheduling, file keeping, and analytics with AI support for SmileCheck Dental Clinic — achieving a <strong className="text-[#16FF00] font-semibold">92.66%</strong> rating (<span className="text-[#16FF00]/90">Accepted with Minor Revisions</span>).
                </p>
              </div>

              {/* Inline Thesis Photos (Always Visible) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {THESIS_PHOTOS.map((src, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(THESIS_PHOTOS, idx)}
                    className="aspect-video overflow-hidden border border-[#16FF00]/30 hover:border-[#16FF00] cursor-pointer transition-all bg-black/40 group"
                  >
                    <img
                      src={src}
                      alt={`Thesis defense photo ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Link to Projects */}
              <div className="pt-1">
                <button
                  onClick={() => navigate('projects')}
                  className="inline-flex items-center gap-2 border border-[#16FF00]/40 px-3 py-1.5 text-[11px] uppercase tracking-widest text-[#16FF00] hover:bg-[#16FF00] hover:text-black transition-colors font-mono cursor-pointer"
                >
                  <span>[ &gt;&gt; VIEW FULL DESCRIPTION IN PROJECTS ]</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#16FF00]/20">
            <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2">Key Modules:</p>
            <div className="flex flex-wrap gap-2">
              {['Data Structures', 'OOP', 'Algorithms', 'Networking', 'Web Development', 'Android Development', 'Data Analysis'].map((m) => (
                <span key={m} className="bg-black border border-[#16FF00]/30 px-2 py-1 text-[10px] text-[#16FF00]">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── HONORS & AWARDS ──────────────────────────────────── */}
      <div className="my-12 border-b border-dashed border-[#16FF00]/40 flex justify-center">
        <span className="bg-[#0a0a0a] px-4 text-[10px] text-[#16FF00]/50 tracking-[0.3em] -mb-2">HONORS &amp; AWARDS</span>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-6 uppercase tracking-widest text-[#16FF00] flex items-center">
          <span className="w-2 h-2 bg-[#16FF00] mr-2" />
          CTF Competitions &amp; Events
        </h3>

        <div className="space-y-3 font-mono text-sm">
          {HONORS.map((h) => {
            const hasPhotos = h.photos.length > 0
            const isOpen = openHonor === h.id

            return (
              <div
                key={h.id}
                onClick={hasPhotos ? () => toggleHonor(h.id) : undefined}
                className={`border-l-2 transition-all group ${
                  h.highlight
                    ? 'border-[#16FF00] bg-[#16FF00]/5'
                    : 'border-[#16FF00]/30'
                } ${
                  hasPhotos
                    ? 'cursor-pointer hover:border-[#16FF00] hover:bg-[#16FF00]/5'
                    : ''
                }`}
              >
                <div className="p-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div className="flex items-start gap-3">
                      <span
                        className={`font-bold flex-shrink-0 ${
                          h.highlight
                            ? 'text-[#16FF00]'
                            : hasPhotos
                              ? 'text-[#16FF00]/60 group-hover:text-[#16FF00]'
                              : 'text-[#16FF00]/40'
                        }`}
                      >
                        &gt;&gt;
                      </span>
                      <div>
                        <p className={`font-bold text-base ${h.highlight ? 'text-white' : 'text-white/90'} ${hasPhotos ? 'group-hover:text-white' : ''}`}>
                          {h.title}
                        </p>
                        <p className={`text-xs mt-0.5 ${h.highlight ? 'text-[#16FF00]/70' : 'text-white/50'}`}>
                          {h.date.toUpperCase()} // ROLE: {h.role.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <div className="mt-1 md:mt-0 text-right flex-shrink-0">
                      <span
                        className={`block text-xs px-2 py-1 border ${
                          h.highlight
                            ? 'text-[#16FF00] border-[#16FF00]/20 bg-[#16FF00]/10 font-bold animate-pulse'
                            : 'text-white/70 border-white/10'
                        }`}
                      >
                        {h.result}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-white/75 mt-3 pl-7 leading-relaxed">{h.description}</p>
                  {hasPhotos && (
                    <div className="mt-3 pl-7 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16FF00]/60 group-hover:text-[#16FF00] transition-colors">
                      <span>{isOpen ? '[-]' : '[+]'}</span>
                      <span>{isOpen ? 'HIDE PICTURES' : 'PRESS TO VIEW PICTURES'}</span>
                    </div>
                  )}
                </div>

                {hasPhotos && isOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="border-t border-[#16FF00]/20 p-4 bg-black/40"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {h.photos.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${h.title} photo ${i + 1}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            openLightbox(h.photos, i)
                          }}
                          className="h-48 w-full object-contain bg-black border border-[#16FF00]/30 hover:scale-105 hover:border-[#16FF00] transition-all cursor-zoom-in"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
