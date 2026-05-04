export default function Footer() {
  return (
    <footer className="py-16 bg-[#0a0704] border-t border-white/5 text-center">
      <div className="max-w-xl mx-auto px-8">
        <div className="text-3xl mb-4">🕯️</div>
        <p
          className="text-[#fdf6ec] text-lg italic mb-4 leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          "In the middle of every difficulty lies opportunity — for someone to show kindness."
        </p>
        <p className="text-[#6b5d4f] text-xs tracking-widest uppercase mb-8" style={{ fontFamily: "'Lora', serif" }}>
          — A Family That Still Believes
        </p>

        <div className="h-px bg-white/5 mb-8" />

        <p className="text-[#4a3d30] text-xs" style={{ fontFamily: "'Lora', serif" }}>
          This campaign is real. Every word written here is the truth of a family trying to survive.
          If you cannot donate, please share — that too is an act of love.
        </p>
        <p className="text-[#3a2d20] text-xs mt-3" style={{ fontFamily: "'Lora', serif" }}>
          © {new Date().getFullYear()} · A Family's Plea · Made with what little hope remains.
        </p>
      </div>
    </footer>
  )
}
