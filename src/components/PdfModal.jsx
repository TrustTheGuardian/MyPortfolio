export default function PdfModal({ src, onClose }) {
  if (!src) return null

  const handleClose = () => {
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl h-[85vh] border border-[#16FF00]/30 bg-black flex flex-col shadow-[0_0_30px_rgba(22,255,0,0.1)]">
        {/* Header bar */}
        <div className="flex justify-between items-center p-3 border-b border-[#16FF00]/30 bg-[#16FF00]/10">
          <span className="text-[#16FF00] font-mono text-sm tracking-widest uppercase animate-pulse">
            &gt;&gt; DOCUMENT VIEWER
          </span>
          <button
            onClick={handleClose}
            className="text-[#16FF00] hover:text-black hover:bg-[#16FF00] font-bold px-3 py-1 transition-colors border border-[#16FF00] text-sm"
          >
            [X] CLOSE
          </button>
        </div>
        {/* PDF iframe */}
        <iframe
          src={src}
          className="w-full h-full bg-white"
          frameBorder="0"
          title="Document Viewer"
        />
      </div>
    </div>
  )
}

