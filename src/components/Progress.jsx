import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function Counter({ target, inView }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])
  return <>{count.toLocaleString()}</>
}

export default function Progress() {
  const [ref, inView] = useInView()
  const goal = 10000
  const raised = 184
  const pct = Math.round((raised / goal) * 100)

  return (
    <section ref={ref} className="relative py-24 bg-[#0d0a07] overflow-hidden">
      {/* warm glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #f59e0b, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-amber-500 text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Lora', serif" }}>
            Every dollar counts
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#fdf6ec]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Help us reach our goal
          </h2>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-6 mb-10 text-center transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
              $<Counter target={raised} inView={inView} />
            </p>
            <p className="text-xs text-[#a89880] mt-1 tracking-wide uppercase" style={{ fontFamily: "'Lora', serif" }}>Raised</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-[#fdf6ec]" style={{ fontFamily: "'Playfair Display', serif" }}>
              $<Counter target={goal} inView={inView} />
            </p>
            <p className="text-xs text-[#a89880] mt-1 tracking-wide uppercase" style={{ fontFamily: "'Lora', serif" }}>Goal</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-green-400" style={{ fontFamily: "'Playfair Display', serif" }}>
              <Counter target={1} inView={inView} />
            </p>
            <p className="text-xs text-[#a89880] mt-1 tracking-wide uppercase" style={{ fontFamily: "'Lora', serif" }}>Donors</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between text-xs text-[#a89880] mb-2" style={{ fontFamily: "'Lora', serif" }}>
            <span>{pct}% funded</span>
            <span>${(goal - raised).toLocaleString()} remaining</span>
          </div>
          <div className="h-3 rounded-full bg-white/5 overflow-hidden border border-white/5">
            <div
              className="h-full rounded-full transition-all ease-out"
              style={{
                width: inView ? `${pct}%` : '0%',
                transitionDuration: '2.2s',
                transitionDelay: '0.4s',
                background: 'linear-gradient(90deg, #f59e0b, #fb923c, #f87171)',
                boxShadow: '0 0 16px rgba(245,158,11,0.5)',
              }}
            />
          </div>
          <p className="text-center text-xs text-[#a89880] mt-3 italic" style={{ fontFamily: "'Lora', serif" }}>
            * Numbers updated in real time. Your donation matters.
          </p>
        </div>

        {/* Breakdown */}
        <div className={`mt-12 grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { label: 'Family Debt', amount: '$6,000', icon: '💸', pct: 67 },
            { label: "Mother's Surgery", amount: '$3,000', icon: '🏥', pct: 33 },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-white/5 bg-white/3">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-semibold text-[#fdf6ec] mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.label}</p>
              <p className="text-amber-400 font-bold text-xl mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.amount}</p>
              <p className="text-xs text-[#a89880] mt-1" style={{ fontFamily: "'Lora', serif" }}>{item.pct}% of total goal</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
