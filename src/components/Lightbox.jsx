import { useEffect } from 'react'

export default function Lightbox({ lightbox, onChangeIndex, onClose }) {
  const images = lightbox?.images ?? []
  const index = lightbox?.index ?? 0
  const isOpen = Boolean(lightbox && images.length > 0)
  const hasMultiple = images.length > 1

  const handlePrev = () => {
    if (!hasMultiple) return
    onChangeIndex((index - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    if (!hasMultiple) return
    onChangeIndex((index + 1) % images.length)
  }

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft' && hasMultiple) {
        e.preventDefault()
        onChangeIndex((index - 1 + images.length) % images.length)
      } else if (e.key === 'ArrowRight' && hasMultiple) {
        e.preventDefault()
        onChangeIndex((index + 1) % images.length)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, hasMultiple, index, images.length, onChangeIndex, onClose])

  if (!isOpen) return null

  const currentSrc = images[index]

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center cursor-zoom-out backdrop-blur-sm p-3 sm:p-6"
    >
      <div className="flex flex-col items-center gap-3 max-w-full max-h-full">
        {/* Image row with Previous / Next square buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-5 max-w-full">
          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              aria-label="Previous image"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#050505] border border-[#16FF00]/50 hover:border-[#16FF00] hover:bg-[#16FF00]/10 text-[#16FF00] font-mono font-bold text-lg sm:text-xl transition-colors flex-shrink-0 cursor-pointer shadow-[0_0_20px_rgba(22,255,0,0.15)] select-none"
            >
              &lt;
            </button>
          )}

          <div
            className="relative border-2 border-[#16FF00] shadow-[0_0_50px_rgba(22,255,0,0.2)] bg-black max-w-[74vw] sm:max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-[#16FF00] pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-[#16FF00] pointer-events-none" />

            <img
              src={currentSrc}
              className="max-h-[80vh] max-w-full object-contain block select-none"
              alt={`Expanded view ${index + 1} of ${images.length}`}
            />
          </div>

          {hasMultiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              aria-label="Next image"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#050505] border border-[#16FF00]/50 hover:border-[#16FF00] hover:bg-[#16FF00]/10 text-[#16FF00] font-mono font-bold text-lg sm:text-xl transition-colors flex-shrink-0 cursor-pointer shadow-[0_0_20px_rgba(22,255,0,0.15)] select-none"
            >
              &gt;
            </button>
          )}
        </div>

        {/* Bottom HUD bar: counter + close */}
        <div
          className="flex items-center gap-3 font-mono"
          onClick={(e) => e.stopPropagation()}
        >
          {hasMultiple && (
            <span className="bg-[#050505] border border-[#16FF00]/50 px-3 py-1 text-xs tracking-widest text-[#16FF00] select-none">
              [ {index + 1} / {images.length} ]
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-[#16FF00] bg-[#050505] px-4 py-1 border border-[#16FF00] text-xs tracking-[0.2em] font-mono cursor-pointer hover:bg-[#16FF00] hover:text-black transition-colors uppercase"
          >
            &gt;&gt; CLICK TO CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}
