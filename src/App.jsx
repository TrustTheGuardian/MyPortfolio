import { useState, createContext } from 'react'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import Lightbox from './components/Lightbox'
import Footer from './components/Footer'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import ProjectsSection from './sections/ProjectsSection'
import WritingsSection from './sections/WritingsSection'
import CredentialsSection from './sections/CredentialsSection'
import ContactSection from './sections/ContactSection'

export const LightboxContext = createContext({ openLightbox: () => {}, navigate: () => {} })

const NAV_ITEMS = [
  { id: 'about',       label: 'About Me',    num: '01' },
  { id: 'experience',  label: 'Experience',  num: '02' },
  { id: 'projects',    label: 'Projects',    num: '03' },
  { id: 'writings',    label: 'Writings',    num: '04' },
  { id: 'credentials', label: 'Credentials', num: '05' },
  { id: 'contact',     label: 'Contact',     num: '06' },
]

const SECTIONS = {
  about:       <AboutSection />,
  experience:  <ExperienceSection />,
  projects:    <ProjectsSection />,
  writings:    <WritingsSection />,
  credentials: <CredentialsSection />,
  contact:     <ContactSection />,
}

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (imagesOrSrc, index = 0) => {
    if (Array.isArray(imagesOrSrc)) {
      if (imagesOrSrc.length === 0) return
      const safeIndex = Math.max(0, Math.min(index, imagesOrSrc.length - 1))
      setLightbox({ images: imagesOrSrc, index: safeIndex })
    } else if (typeof imagesOrSrc === 'string') {
      setLightbox({ images: [imagesOrSrc], index: 0 })
    }
  }

  const setLightboxIndex = (nextIndex) => {
    setLightbox((prev) => (prev ? { ...prev, index: nextIndex } : null))
  }

  const navigate = (id) => {
    setActiveSection(id)
    setMobileOpen(false)
  }

  return (
    <LightboxContext.Provider value={{ openLightbox, navigate }}>
      <div className="relative h-screen overflow-hidden bg-[#050505]">
        {/* CRT scanline */}
        <div className="scanline" />
        {/* CRT colour overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50"
          style={{
            background:
              'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.1) 50%), linear-gradient(90deg, rgba(255,0,0,0.03), rgba(0,255,0,0.01), rgba(0,0,255,0.03))',
            backgroundSize: '100% 3px, 3px 100%',
          }}
        />

        {/* Mobile top header */}
        <MobileHeader onToggle={() => setMobileOpen((o) => !o)} />

        <div className="flex h-screen md:border-4 md:border-[#16FF00]/10">
          {/* Sidebar */}
          <Sidebar
            items={NAV_ITEMS}
            active={activeSection}
            onNavigate={navigate}
            mobileOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
          />

          {/* Main content */}
          <main className="flex-1 bg-[#0a0a0a] overflow-y-auto relative z-10 flex flex-col justify-between">
            <div className="p-6 md:p-12 flex-1">
              {SECTIONS[activeSection]}
            </div>
            <Footer />
          </main>
        </div>

        {/* Lightbox modal */}
        <Lightbox
          lightbox={lightbox}
          onChangeIndex={setLightboxIndex}
          onClose={() => setLightbox(null)}
        />
      </div>
    </LightboxContext.Provider>
  )
}
