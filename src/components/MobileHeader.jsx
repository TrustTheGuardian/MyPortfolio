export default function MobileHeader({ onToggle }) {
  return (
    <header className="md:hidden flex justify-between items-center p-4 border-b border-[#16FF00]/20 bg-[#080808] z-50 relative">
      <div className="text-sm font-bold tracking-widest text-[#16FF00]">JASON_GOMEZ</div>
      <button
        onClick={onToggle}
        className="border border-[#16FF00] px-3 py-1 text-xs uppercase hover:bg-[#16FF00] hover:text-black transition-colors font-mono"
      >
        [ MENU ]
      </button>
    </header>
  )
}

