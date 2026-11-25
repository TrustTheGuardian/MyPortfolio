import { useState, useContext } from 'react'
import { LightboxContext } from '../App'

const FILTER_TABS = ['ALL', 'OFFENSIVE SECURITY', 'NETWORKING & SYSTEMS', 'COMPETITIONS & EVENTS', 'GOVERNANCE & AI']

const CERTS_EARNED = [
  // ── OFFENSIVE SECURITY ──────────────────────────────────────────────────────
  {
    category: 'OFFENSIVE SECURITY',
    issuer: 'APIsec University',
    name: 'API Penetration Testing — Certificate of Completion',
    image: '/images/Certifications/ApiSecUni/API_PenTest_CertOfCompletion_Gomez.jpg',
  },
  {
    category: 'OFFENSIVE SECURITY',
    issuer: 'CyberWarfare Live',
    name: 'API Red Team Assessment — Gomez',
    image: '/images/Certifications/CyberWarfareLive/API_RTA_Gomez.jpg',
  },
  {
    category: 'OFFENSIVE SECURITY',
    issuer: 'Various',
    name: 'Fundamentals of Ethical Hacking',
    image: '/images/Certifications/FundamentalOfEthicalHacking/Fundamentals_Ethical_Hacking.png',
  },
  {
    category: 'OFFENSIVE SECURITY',
    issuer: 'SecOps Group',
    name: 'CAPen — Certified AppSec Pentester (with Merit)',
    image: '/images/Certifications/SecOpsGroup/CAPen_withMerit_Gomez.jpg',
  },

  // ── NETWORKING & SYSTEMS ────────────────────────────────────────────────────
  {
    category: 'NETWORKING & SYSTEMS',
    issuer: 'Cisco',
    name: 'CCNAv7: Enterprise Networking, Security and Automation',
    image: '/images/Certifications/Cisco/CCNAv7_Enterprise_Networking_Security.png',
  },
  {
    category: 'NETWORKING & SYSTEMS',
    issuer: 'Cisco',
    name: 'CCNAv7: Introduction to Networks',
    image: '/images/Certifications/Cisco/CCNAv7_Intro_to_Net.png',
  },
  {
    category: 'NETWORKING & SYSTEMS',
    issuer: 'Cisco',
    name: 'CCNAv7: Switching, Routing & Wireless Essentials',
    image: '/images/Certifications/Cisco/CCNAv7_Switching_Routing.png',
  },
  {
    category: 'NETWORKING & SYSTEMS',
    issuer: 'Cisco',
    name: 'Ethical Hacker',
    image: '/images/Certifications/Cisco/Ethical_Hacker.png',
  },
  {
    category: 'NETWORKING & SYSTEMS',
    issuer: 'Cisco',
    name: 'Introduction to Cybersecurity',
    image: '/images/Certifications/Cisco/Intro_to_CyberSec.png',
  },
  {
    category: 'NETWORKING & SYSTEMS',
    issuer: 'Cisco',
    name: 'IT Essentials',
    image: '/images/Certifications/Cisco/IT_Eseentials.png',
  },
  {
    category: 'NETWORKING & SYSTEMS',
    issuer: 'Cisco',
    name: 'Networking Basics',
    image: '/images/Certifications/Cisco/Networking_Basics.png',
  },
  {
    category: 'NETWORKING & SYSTEMS',
    issuer: 'Cisco',
    name: 'Network Device Configuration',
    image: '/images/Certifications/Cisco/Net_Device_Configuration.png',
  },
  {
    category: 'NETWORKING & SYSTEMS',
    issuer: 'Linux Foundation',
    name: 'Cybersecurity Essentials',
    image: '/images/Certifications/LinuxEssentials/CybersecurityEssentials.png',
  },

  // ── COMPETITIONS & EVENTS ───────────────────────────────────────────────────
  {
    category: 'COMPETITIONS & EVENTS',
    issuer: 'CCA / Hack4Gov',
    name: 'Hack5Gov 2026 — CCA Coach Certificate',
    image: '/images/Certifications/CCA/Hack4Gov_CCA_Coach.jpg',
  },
  {
    category: 'COMPETITIONS & EVENTS',
    issuer: 'DICT Region 3',
    name: 'Hack4Gov 2025 — Certificate of Participation',
    image: '/images/Certifications/Hack4Gov/CertOfParticipation_Gomez.jpg',
  },
  {
    category: 'COMPETITIONS & EVENTS',
    issuer: 'Cloudstaff',
    name: 'Cloudstaff Hackathon — Participant',
    image: '/images/Certifications/CloudStaff Hackathon/Cloudstaff_Hackathon.jpg',
  },
  {
    category: 'COMPETITIONS & EVENTS',
    issuer: 'Devcon',
    name: 'Devcon Convergence I',
    image: '/images/Certifications/Devcon/Convergence_I.png',
  },
  {
    category: 'COMPETITIONS & EVENTS',
    issuer: 'Devcon',
    name: 'Devcon Convergence II',
    image: '/images/Certifications/Devcon/Convergence_II.png',
  },
  {
    category: 'COMPETITIONS & EVENTS',
    issuer: 'Devcon',
    name: 'Devcon Convergence III',
    image: '/images/Certifications/Devcon/Convergence_III.png',
  },
  // ── GOVERNANCE & AI ─────────────────────────────────────────────────────────
  {
    category: 'GOVERNANCE & AI',
    issuer: 'Basel Institute of Governance',
    name: 'Certificate of Completion',
    image: '/images/Certifications/Basel_Institute_Of_Govern/Certificate_Of_Completion.png',
  },
  {
    category: 'GOVERNANCE & AI',
    issuer: 'Mapua',
    name: 'Introduction to AI Literacy and Responsible Use',
    image: '/images/Certifications/Mapua/Introduction to AI Literacy and Responsible Use.png',
  },
]

export default function CredentialsSection() {
  const { openLightbox } = useContext(LightboxContext)
  const [filter, setFilter] = useState('ALL')

  const filtered = filter === 'ALL' ? CERTS_EARNED : CERTS_EARNED.filter((c) => c.category === filter)

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#16FF00]">Credentials</h2>
        <div className="text-xs font-mono opacity-50 mb-2">&gt;&gt; CLEARANCE_FILE_05</div>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`text-[10px] uppercase px-3 py-1 border font-mono tracking-widest transition-colors ${filter === tab
              ? 'bg-[#16FF00] text-black border-[#16FF00]'
              : 'border-[#16FF00]/30 text-[#16FF00]/70 hover:border-[#16FF00] hover:text-[#16FF00]'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Count indicator */}
      <div className="text-[10px] font-mono text-[#16FF00]/40 mb-4 tracking-widest">
        [ SHOWING {filtered.length} OF {CERTS_EARNED.length} RECORDS ]
      </div>

      {/* Certificates grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {filtered.map((cert, idx) => (
          <div
            key={cert.image}
            onClick={() => openLightbox(filtered.map((c) => c.image), idx)}
            className="flex flex-col items-center justify-start p-4 border border-[#16FF00]/20 bg-black/40 hover:border-[#16FF00] hover:bg-[#16FF00]/5 transition-all group cursor-zoom-in"
          >
            <div className="h-32 w-full mb-3 flex items-center justify-center overflow-hidden">
              <img
                src={cert.image}
                alt={cert.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(22,255,0,0.3)]"
              />
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-center text-[#16FF00]/80 leading-tight">
              {cert.name}
            </p>
            <p className="text-[8px] opacity-50 uppercase mt-1 tracking-widest group-hover:text-[#16FF00] group-hover:opacity-100 transition-all">
              {cert.issuer}
            </p>
          </div>
        ))}
      </div>

      {/* Skills summary */}
      <div className="my-10 border-b border-dashed border-[#16FF00]/40 flex justify-center">
        <span className="bg-[#0a0a0a] px-4 text-[10px] text-[#16FF00]/50 tracking-[0.3em] -mb-2">TECHNICAL SKILLS</span>
      </div>

      <div className="space-y-6">
        {[
          {
            heading: 'Offensive & Defensive Operations',
            items: [
              { label: 'Red Teaming & Research', detail: 'Kali Linux, Burp Suite, Metasploit, Automated Fuzzing (Genetic Algorithms), OSINT' },
              { label: 'Blue Teaming', detail: 'Wireshark, Nmap' },
            ],
          },
          {
            heading: 'Programming & Development',
            items: [
              { label: 'Core Languages', detail: 'Python, JavaScript, Bash' },
              { label: 'Web & Mobile', detail: 'HTML/CSS, Progressive Web Apps (PWA), Java (Android Dev)' },
              { label: 'Automation', detail: 'n8n Workflow Automation, Scripting, Dify' },
            ],
          },
          {
            heading: 'Frameworks & Standards',
            items: [
              { label: 'Standards', detail: 'MITRE ATT&CK, NIST, OWASP Top 10' },
            ],
          },
        ].map((section) => (
          <div key={section.heading}>
            <h3 className="text-base font-bold text-[#16FF00] mb-3 uppercase tracking-widest">{section.heading}</h3>
            <ul className="space-y-2 text-sm text-white/90 font-mono">
              {section.items.map((item) => (
                <li key={item.label} className="flex items-start">
                  <span className="text-[#16FF00] mr-2 font-bold">&gt;&gt;</span>
                  <span><strong className="text-white">{item.label}:</strong> {item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
