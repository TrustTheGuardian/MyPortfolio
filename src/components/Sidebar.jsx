export default function Sidebar({ items, active, onNavigate, mobileOpen, onClose }) {
  return (
    <nav
      className={`
        ${mobileOpen ? 'flex' : 'hidden'} md:flex
        flex-col absolute inset-0 z-40
        bg-black/95 md:bg-[#080808]
        md:relative md:w-72 w-full
        p-8 md:border-r border-[#16FF00]/20
        justify-between transition-all
      `}
    >
      {/* Close button (mobile only) */}
      <button
        onClick={onClose}
        className="md:hidden absolute top-6 right-6 text-[#16FF00] text-xl font-bold border border-[#16FF00] px-3 py-1 hover:bg-[#16FF00] hover:text-black"
      >
        [ X ]
      </button>

      <div>
        {/* Logo / identity */}
        <div className="mb-12 border-b border-[#16FF00]/20 pb-4 mt-8 md:mt-0">
          <h1 className="text-2xl font-black italic tracking-tighter text-[#16FF00]">JASON_GOMEZ</h1>
          <p className="text-[10px] text-white/40 tracking-[0.2em] mt-1">CS STUDENT // PENETRATION TESTER</p>
        </div>

        {/* Navigation items */}
        <ul className="space-y-6">
          {items.map(({ id, label, num }) => (
            <li key={id}>
              <button
                onClick={() => onNavigate(id)}
                className={`
                  uppercase text-sm tracking-widest flex items-center space-x-3 w-full text-left transition-all
                  ${active === id
                    ? 'nav-active text-white'
                    : 'opacity-60 hover:opacity-100'
                  }
                `}
              >
                <span className="text-[#16FF00]/70">{num}</span>
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-[9px] opacity-30 mt-8 md:mt-0 font-mono">
        STATUS: ONLINE // PH_NODE_03
      </div>
    </nav>
  )
}

