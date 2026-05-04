import { useState, useEffect } from 'react'

const slides = [
  {
    id: 0,
    // Father passed away - candle / grief photo
    bgImage: 'https://res.cloudinary.com/dmdnowrnc/image/upload/v1777880025/Donation/2602c77e-19be-4322-b131-415ee01c924e_ax4fgj.png',
    overlay: 'rgba(10,4,0,0.72)',
    accent: '#f59e0b',
    icon: '🕯️',
    eyebrow: 'Six months ago, everything changed',
    headline: 'I lost my father.\nThen I lost everything.',
    sub: 'He was our income, our strength, our world. When he left, the walls came down. Grief turned into debt, and debt into fear.',
  },
  {
    id: 1,
    // Ear / medical emergency - hospital / pain
    bgImage: 'https://res.cloudinary.com/dmdnowrnc/image/upload/v1777880146/Donation/bf20e595-660b-402c-bb17-85df551c84a6_ygvcey.png',
    overlay: 'rgba(0,5,18,0.75)',
    accent: '#f87171',
    icon: '🏥',
    eyebrow: 'Surgery is in one week',
    headline: "My mother's ear\ncannot wait any longer.",
    sub: 'The doctors say she needs surgery urgently. She cries at night hiding her pain from me. The cost is $3,000 — money we simply do not have.',
  },
  {
    id: 2,
    // Disability / leg issue
    bgImage: 'https://res.cloudinary.com/dmdnowrnc/image/upload/v1777899752/Donation/IMG_1663_zb20zv.jpg',
    overlay: 'rgba(0,8,15,0.72)',
    accent: '#a78bfa',
    icon: '🦽',
    eyebrow: 'I am physically handicapped',
    headline: 'I cannot run.\nBut I refuse to give up.',
    sub: 'A leg disability limits everything I can do. I cannot work like others. But I carry my family on broken shoulders — because they have nobody else.',
  },
  {
    id: 3,
    // Debt threat / desperation
    bgImage: 'https://res.cloudinary.com/dmdnowrnc/image/upload/v1777899162/Donation/45792c2a-596a-4dbc-91f8-e5895a718c86_vxnxsq.jpg',
    overlay: 'rgba(8,2,0,0.78)',
    accent: '#fb923c',
    icon: '📞',
    eyebrow: 'Debt collectors call every single day',
    headline: '$6,000 in debt.\nEvery call is a threat.',
    sub: 'They call. They shout. They threaten. I have no family or friends to turn to — they turned their backs. You are reading this because you are our last hope.',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % slides.length)
        setFading(false)
      }, 700)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx) => {
    if (idx === current) return
    setFading(true)
    setTimeout(() => { setCurrent(idx); setFading(false) }, 700)
  }

  const slide = slides[current]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background photo — Ken Burns */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: i === current ? 1 : 0,
            backgroundImage: `url(${s.bgImage})`,
            backgroundSize: 'fit-cover',
            backgroundPosition: 'center',
            filter: 'grayscale(20%) sepia(15%)',
            animation: i === current ? 'kenBurns 10s ease-in-out infinite alternate' : 'none',
          }}
        />
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{ background: slide.overlay }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,1.0) 100%)' }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-16 h-16 pointer-events-none opacity-30"
        style={{ borderTop: `1px solid ${slide.accent}`, borderLeft: `1px solid ${slide.accent}` }} />
      <div className="absolute bottom-16 right-8 w-16 h-16 pointer-events-none opacity-30"
        style={{ borderBottom: `1px solid ${slide.accent}`, borderRight: `1px solid ${slide.accent}` }} />

      {/* Content */}
      <div
        className="relative z-10 max-w-4xl mx-auto px-8 text-center"
        style={{
          opacity: fading ? 0 : 1,
          transform: fading ? 'translateY(16px)' : 'translateY(0)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        {/* Icon */}
        <div
          className="text-6xl mb-6 inline-block"
          style={{
            filter: 'drop-shadow(0 0 24px rgba(255,255,255,0.25))',
            animation: 'heartbeat 2.5s ease-in-out infinite',
          }}
        >
          {slide.icon}
        </div>

        {/* Eyebrow */}
        <p
          className="text-xs md:text-sm tracking-[0.22em] uppercase mb-5 font-medium"
          style={{ fontFamily: "'Lora', serif", color: slide.accent }}
        >
          {slide.eyebrow}
        </p>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#fdf6ec',
            textShadow: '0 4px 40px rgba(0,0,0,0.9)',
            whiteSpace: 'pre-line',
          }}
        >
          {slide.headline}
        </h1>

        {/* Accent line */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div className="h-px w-20 opacity-50" style={{ background: slide.accent }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: slide.accent }} />
          <div className="h-px w-20 opacity-50" style={{ background: slide.accent }} />
        </div>

        {/* Sub */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-[#e0d4c4] mb-10"
          style={{ fontFamily: "'Lora', serif", textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}
        >
          {slide.sub}
        </p>

        {/* CTA */}
        <button
          onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-[#0d0a07] text-base transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Lora', serif",
            background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}bb)`,
            boxShadow: `0 8px 40px ${slide.accent}55`,
          }}
        >
          ❤️ Help This Family
        </button>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-400"
            style={{
              width: i === current ? '36px' : '8px',
              height: '8px',
              background: i === current ? slide.accent : 'rgba(255,255,255,0.25)',
              boxShadow: i === current ? `0 0 10px ${slide.accent}88` : 'none',
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2 opacity-35 z-10">
        <div className="h-14 w-px" style={{ background: 'linear-gradient(to bottom, transparent, #f5efe6)' }} />
        <span className="text-[9px] tracking-[0.2em] uppercase text-[#f5efe6]" style={{ fontFamily: "'Lora', serif" }}>Scroll</span>
      </div>

      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.07) translate(-1.5%, -1%); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%  { transform: scale(1.25); }
          28%  { transform: scale(1); }
          42%  { transform: scale(1.18); }
          56%  { transform: scale(1); }
        }
      `}</style>
    </section>
  )
}
