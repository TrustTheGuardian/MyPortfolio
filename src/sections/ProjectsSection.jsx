import { useState, useContext } from 'react'
import { LightboxContext } from '../App'
import { GitHubIcon, MediumIcon } from '../components/Icons'

// ── Thesis System Photos ─────────────────────────────────────────────────────
const THESIS_PHOTOS = [
  '/images/Thesis/System/Screenshot%202026-11-23%20211952.png',
  '/images/Thesis/System/Screenshot%202026-11-23%20212004.png',
  '/images/Thesis/System/Screenshot%202026-11-23%20212012.png',
  '/images/Thesis/System/Screenshot%202026-11-23%20212029.png',
  '/images/Thesis/System/Screenshot%202026-11-23%20212038.png',
  '/images/Thesis/System/Screenshot%202026-11-23%20212053.png',
  '/images/Thesis/System/Screenshot%202026-11-23%20212118.png',
  '/images/Thesis/System/Screenshot%202026-11-23%20212132.png',
  '/images/Thesis/System/Screenshot%202026-11-23%20212150.png',
]

// ── SmileCheck expandable case study ─────────────────────────────────────────
const TEAM = [
  { name: 'Jason Gomez', role: 'Team Leader and System Tester' },
  { name: 'Wesly Cunanan', role: 'Full Stack Developer, Main Developer' },
  { name: 'Joshua Manansala', role: 'Chatbot Developer, UI/UX Designer' },
  { name: 'Christian Lloyd Santos', role: 'Frontend Developer, UI/UX Designer' },
  { name: 'Joana Marie Tumabang', role: 'Documentation Leader' },
]

function SmileCheckCard() {
  const { openLightbox } = useContext(LightboxContext)
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-[#16FF00]/20 bg-black/40 hover:border-[#16FF00]/40 transition-colors">
      {/* Title row */}
      <div className="p-6 pb-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
          <a
            href="https://smile-check-system-rouge.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-base font-bold uppercase font-mono text-white hover:text-[#16FF00] transition-colors leading-snug flex items-start gap-2 group max-w-2xl"
          >
            <span>
              A Web Application for Appointment Scheduling, File Keeping, and Analytics with AI
              Support for SmileCheck Dental Clinic
            </span>
            <span className="text-[10px] opacity-40 group-hover:opacity-100 mt-1 flex-shrink-0">↗</span>
          </a>
          <div className="flex items-center gap-2 self-start flex-shrink-0 font-mono">
            <span className="text-xs border border-[#16FF00]/40 px-2 py-0.5 whitespace-nowrap text-[#16FF00]/80 bg-[#050505]">
              2026
            </span>
            <span className="text-xs border border-[#16FF00] px-2 py-0.5 whitespace-nowrap text-[#16FF00] bg-[#16FF00]/10">
              THESIS — COMPLETED
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {['TypeScript', 'Next.js', 'Groq AI', 'AES-256-GCM', 'HMAC-SHA256', 'ISO/IEC 25010'].map((tag) => (
            <span key={tag} className="bg-[#16FF00]/10 text-[10px] px-2 py-1 border border-[#16FF00]/20 font-mono text-[#16FF00]">
              {tag}
            </span>
          ))}
        </div>

        {/* Collapsed summary */}
        <p className="text-xs font-mono text-[#16FF00]/60 mb-1 uppercase tracking-widest">
          Role: Team Leader and System Tester
        </p>
        <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
          Developed a web application for appointment scheduling, file keeping, and analytics with AI support for SmileCheck Dental Clinic — achieving a <strong className="text-[#16FF00] font-semibold">92.66%</strong> rating (<span className="text-[#16FF00]/90">Accepted with Minor Revisions</span>).
        </p>

        {/* Thesis photos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {THESIS_PHOTOS.map((src, idx) => (
            <div
              key={idx}
              onClick={(e) => {
                e.stopPropagation()
                openLightbox(THESIS_PHOTOS, idx)
              }}
              className="aspect-video overflow-hidden border border-[#16FF00]/30 hover:border-[#16FF00] cursor-pointer transition-all bg-black/40 group"
            >
              <img
                src={src}
                alt={`SmileCheck Thesis photo ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16FF00]/60 hover:text-[#16FF00] transition-colors"
        >
          <span>{expanded ? '[-]' : '[+]'}</span>
          <span>{expanded ? 'COLLAPSE' : 'READ FULL CASE STUDY'}</span>
        </button>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-[#16FF00]/20 p-6 pt-5 bg-black/20 space-y-5">
          {/* Full paragraphs */}
          <div className="space-y-4 text-sm text-white/80 leading-relaxed font-mono">
            <p>
              Led a team of five members in completing our Thesis project for the Bachelor of Science in
              Computer Science program at City College of Angeles. The project focused on developing a web
              application for appointment scheduling, file keeping, and analytics with AI support for
              SmileCheck Dental Clinic.
            </p>
            <p>
              I was responsible for coordinating the team's workflow, managing project timelines, gathering
              and documenting system requirements, and spearheading system testing and quality assurance.
              Collaborating closely with our full-stack/main developer, chatbot developer, frontend
              developers, and documentation leader, I facilitated smooth communication across the team,
              conducted regular progress reviews, and co-led the preparation of our final research
              manuscript and defense presentation.
            </p>
            <p>
              While my teammates focused on full-stack implementation, Groq AI chatbot integration, and
              UI/UX frontend design, I continuously tested the application's functionality—validating the
              scheduling algorithms, AES-256-GCM encryption, and HMAC-SHA256 audit logs—and ensured that
              both clinical user experience and ISO/IEC 25010 software quality standards were met. This
              experience strengthened my leadership, quality assurance, and project management skills in a
              real-world healthcare software development setting.
            </p>
          </div>

          {/* Team roster */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#16FF00]/50 mb-3 font-mono">Project Team:</p>
            <div className="space-y-1.5">
              {TEAM.map((member) => (
                <div key={member.name} className="flex items-start gap-3 text-xs font-mono">
                  <span className="text-[#16FF00] mt-0.5">&gt;&gt;</span>
                  <span>
                    <span className="text-white font-bold">{member.name}</span>
                    <span className="text-white/50"> — {member.role}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://smile-check-system-rouge.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#16FF00] px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#16FF00] bg-[#050505] hover:bg-[#16FF00] hover:text-black transition-colors"
            >
              <span>↗</span> Launch Live App
            </a>
            <a
              href="https://www.linkedin.com/in/jason-gomez-91b069249"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#16FF00]/40 px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#16FF00]/70 bg-[#050505] hover:border-[#16FF00] hover:text-[#16FF00] hover:bg-[#16FF00]/10 transition-colors"
            >
              <span>IN</span> View on LinkedIn
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Collapsible project card ──────────────────────────────────────────────────
function ProjectCard({ p }) {
  const { openLightbox } = useContext(LightboxContext)
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-[#16FF00]/20 bg-black/40 hover:border-[#16FF00]/60 transition-colors">
      {/* Clickable collapsed summary header */}
      <div
        onClick={() => setExpanded((prev) => !prev)}
        className="p-6 cursor-pointer hover:bg-[#16FF00]/5 transition-colors group"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
          <div>
            <h4 className="text-base font-bold uppercase font-mono text-white group-hover:text-[#16FF00] transition-colors leading-snug">
              {p.title}
            </h4>
            <p className="text-xs font-mono text-[#16FF00]/60 mt-1.5 uppercase tracking-widest">
              Role: {p.role}
            </p>
          </div>
          <div className="flex items-center gap-2 self-start flex-shrink-0 font-mono">
            <span className="text-xs border border-[#16FF00]/40 px-2 py-0.5 whitespace-nowrap text-[#16FF00]/80 bg-[#050505]">
              {p.year}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#16FF00]/60 group-hover:text-[#16FF00] transition-colors">
          <span>{expanded ? '[-]' : '[+]'}</span>
          <span>{expanded ? 'COLLAPSE' : 'PRESS TO VIEW PROJECT'}</span>
        </div>
      </div>

      {/* Expanded full project section */}
      {expanded && (
        <div className="border-t border-[#16FF00]/20 p-6 pt-5 bg-black/20">
          {/* Subtitle & Description */}
          <p className="text-xs text-white/60 italic font-mono">{p.subtitle}</p>
          {p.description && (
            <p className="text-xs text-white/80 mt-2 leading-relaxed max-w-3xl">
              {p.description}
            </p>
          )}

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {p.tags.map((tag) => (
              <span key={tag} className="bg-[#16FF00]/10 text-[10px] px-2 py-1 border border-[#16FF00]/20 font-mono text-[#16FF00]">
                {tag}
              </span>
            ))}
          </div>

          {/* Project Image Gallery */}
          {p.images && p.images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              {p.images.map((src, idx) => (
                <div
                  key={src}
                  onClick={(e) => {
                    e.stopPropagation()
                    openLightbox(p.images, idx)
                  }}
                  className="aspect-video overflow-hidden border border-[#16FF00]/30 hover:border-[#16FF00] cursor-pointer transition-all bg-black/40 group"
                >
                  <img
                    src={src}
                    alt={`${p.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-[#16FF00]/15">
            {p.articleUrl && (
              <a
                href={p.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 border border-[#16FF00] px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#16FF00] bg-[#050505] hover:bg-[#16FF00] hover:text-black transition-colors"
              >
                <MediumIcon />
                <span>View Article</span>
              </a>
            )}
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 border border-[#16FF00]/50 px-4 py-2 text-xs font-mono uppercase tracking-widest text-[#16FF00]/90 bg-[#050505] hover:border-[#16FF00] hover:bg-[#16FF00] hover:text-black transition-colors"
              >
                <GitHubIcon />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Project data (chronological: newest first) ────────────────────────────────
const PROJECTS = [
  {
    id: 'evpopulation',
    title: 'Electric Vehicle Population Data Analysis and Forecasting',
    subtitle: 'Data cleaning, analysis, and dashboard for EV population dataset',
    role: 'Team Leader / Data Modeling Analytics',
    year: '2026',
    status: 'STABLE',
    articleUrl:
      'https://medium.com/@jasonsantos1228/end-to-end-ev-market-analytics-data-modeling-with-snowflake-schema-power-bi-forecasting-ca015b95798b?sharedUserId=jasonsantos1228',
    githubUrl: 'https://github.com/TrustTheGuardian/Electronic-Vehicles-Population-Dataset',
    tags: ['Power BI', 'Excel', 'Data Cleaning', 'DAX'],
    description:
      'Full data pipeline from raw CSV ingestion through cleaning to interactive Power BI dashboards with forecasting visualisations.',
    images: [
      '/images/Projects/Electric%20Cars/DescDash.png',
      '/images/Projects/Electric%20Cars/PredDash.png',
    ],
  },
  {
    id: 'purrfectly',
    title: 'Purrfectly Stitched',
    subtitle: 'E-commerce platform for handcrafted crocheted items',
    role: 'Backend Developer',
    year: '2025',
    status: 'STABLE',
    githubUrl: 'https://github.com/TrustTheGuardian/Web-based-E-commerce-platform-for-Purrfectly-Stitched-',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    description:
      'Full-stack e-commerce website with product catalogue, cart management, and order processing for a small crochet business.',
    images: [
      '/images/Projects/Purrfectly_Stitched/Admin1.png',
      '/images/Projects/Purrfectly_Stitched/Admin2.png',
      '/images/Projects/Purrfectly_Stitched/Admin3.png',
      '/images/Projects/Purrfectly_Stitched/Admin4.png',
      '/images/Projects/Purrfectly_Stitched/User1.png',
      '/images/Projects/Purrfectly_Stitched/User2.png',
      '/images/Projects/Purrfectly_Stitched/User3.png',
    ],
  },
  {
    id: 'ccapathfinder',
    title: 'CCA Pathfinder',
    subtitle: 'Android indoor map application for CCA campus',
    role: 'Android Developer',
    year: '2024',
    status: 'STABLE',
    githubUrl: 'https://github.com/TrustTheGuardian/CCAPathfinder01',
    tags: ['Java', 'Android Studio'],
    description:
      'Android app with interactive indoor maps and room locator for the City College of Angeles Main and Pagcor Buildings.',
    images: [
      '/images/Projects/CCA_pathfinder/android1.jpg',
      '/images/Projects/CCA_pathfinder/android2.png',
      '/images/Projects/CCA_pathfinder/android3.png',
      '/images/Projects/CCA_pathfinder/android4.png',
    ],
  },
]

// ── Section ───────────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-[#16FF00]">Projects</h2>
        <div className="text-xs font-mono opacity-50 mb-2">&gt;&gt; TECHNICAL_WORK_03</div>
      </div>

      {/* ── Thesis / Featured ── */}
      <div className="mb-6">
        <h3 className="font-bold mb-4 uppercase tracking-widest text-[#16FF00] flex items-center font-mono">
          <span className="w-2 h-2 bg-[#16FF00] mr-2" />
          Thesis Project
        </h3>
        <SmileCheckCard />
      </div>

      {/* ── Other Projects ── */}
      <div className="my-10 border-b border-dashed border-[#16FF00]/40 flex justify-center">
        <span className="bg-[#0a0a0a] px-4 text-[10px] text-[#16FF00]/50 tracking-[0.3em] -mb-2">OTHER PROJECTS</span>
      </div>

      <div className="space-y-5">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  )
}
