import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const crises = [
  {
    icon: '🕯️',
    title: 'Father Gone',
    body: 'He passed six months ago. ',
    accent: '#f59e0b',
  },
  {
    icon: '💸',
    title: '$6,000 in Debt',
    body: 'Borrowed just to survive. Debt collectors call every single day threatening, intimidating.',
    accent: '#fb923c',
  },
  {
    icon: '🏥',
    title: "Mother's Surgery",
    body: 'Ear operation needed urgently. Costs $3,000. Surgery is in one week. No funds. No options.',
    accent: '#f87171',
  },
  {
    icon: '🦽',
    title: 'Physically Disabled',
    body: 'A leg condition limits my ability to work. Yet I carry my family on my broken shoulders.',
    accent: '#a78bfa',
  },
  {
    icon: '👥',
    title: 'Abandoned',
    body: 'Family and friends have turned away. We stand alone. You may be the only one who will listen.',
    accent: '#60a5fa',
  },
  {
    icon: '🙏',
    title: 'Last Hope',
    body: 'This campaign is all we have left. Every dollar is not charity — it is someone choosing to care.',
    accent: '#4ade80',
  },
]

export default function Crisis() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="relative py-24 bg-[#080604] overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 50%, #f87171 0%, transparent 50%)' }} />

      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Lora', serif" }}>
            What We Are Facing
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#fdf6ec]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Six reasons why<br />
            <span className="italic text-amber-400">we need you today.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crises.map((c, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl border border-white/5 transition-all duration-700 hover:border-white/15 hover:-translate-y-1 group`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                transitionDelay: `${i * 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              {/* glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `radial-gradient(ellipse at center, ${c.accent}15 0%, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: c.accent }}
                >
                  {c.title}
                </h3>
                <p className="text-[#a89880] leading-relaxed text-sm" style={{ fontFamily: "'Lora', serif" }}>
                  {c.body}
                </p>
              </div>
              {/* accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px opacity-20 group-hover:opacity-60 transition-opacity duration-300"
                style={{ background: c.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
