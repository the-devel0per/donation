import { useState, useEffect } from 'react'

const WALLET_ADDRESS = 'A7jAnyk8FbB5xmDdwMs3P4ZoBaTLdFvqHCHYcM1jb7FF'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleCopy = () => {
    navigator.clipboard?.writeText(WALLET_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToDonate = () => {
    document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0d0a07]/90 backdrop-blur-md border-b border-amber-900/30 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      {/* Logo / Name */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
          <span className="text-amber-400 text-xs">🕯️</span>
        </div>
        <span
          className="text-amber-200/90 tracking-widest text-xs uppercase"
          style={{ fontFamily: "'Lora', serif", letterSpacing: '0.18em' }}
        >
          A Family's Plea
        </span>
      </div>

      {/* Center — Copy Address */}
      <button
        onClick={handleCopy}
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 group"
        style={{
          fontFamily: "'Lora', serif",
          borderColor: copied ? 'rgba(74,222,128,0.5)' : 'rgba(245,158,11,0.25)',
          background: copied ? 'rgba(74,222,128,0.08)' : 'rgba(245,158,11,0.06)',
        }}
      >
        <span className="text-[11px] tracking-widest uppercase" style={{ color: copied ? '#4ade80' : '#a89880' }}>
          {copied ? '✅ Copied!' : ''}
        </span>
        <span
          className="max-w-[720px] truncate text-xs"
          style={{ color: copied ? '#4ade80' : '#f59e0b', fontFamily: 'monospace' }}
        >
          {WALLET_ADDRESS}
        </span>
        <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: copied ? '#4ade80' : '#a89880' }}>
          {copied ? '' : '📋'}
        </span>
      </button>

      {/* Donate button */}
      <button
        onClick={scrollToDonate}
        className="relative group bg-amber-500 hover:bg-amber-400 text-[#0d0a07] font-semibold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-400/50 donate-pulse"
        style={{ fontFamily: "'Lora', serif" }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span>❤️</span>
          Donate Now
        </span>
      </button>
    </nav>
  )
}