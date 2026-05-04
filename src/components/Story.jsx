import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

export default function Story() {
  const [ref, inView] = useInView(0.08)

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-[#0d0a07] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(ellipse, #f59e0b 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto px-8">
        <p
          className={`text-amber-500 text-xs tracking-[0.25em] uppercase mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontFamily: "'Lora', serif" }}
        >
          Our Story
        </p>

        <h2
          className={`text-3xl md:text-5xl font-bold text-[#fdf6ec] leading-tight mb-10 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          "I never imagined I'd be writing this."
        </h2>

        <div
          className={`space-y-7 text-[#c8b99a] leading-[1.95] text-base md:text-lg transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontFamily: "'Lora', serif" }}
        >
          <p>
            Asking for help from strangers goes against everything in me. My father wasn't a perfect man. He wasn't warm, he wasn't gentle, and there were years I resented him for it. But he showed up. Every single day, he showed up. He put food on the table. He kept the lights on. He carried the weight of this family without ever asking for thanks.
          </p>

          <p className="text-[#fdf6ec] italic border-l-2 border-amber-500/50 pl-5">
            Six months ago, he was gone. And I realized something painful: you don't have to love someone perfectly to need them.
          </p>

          <p>
            I am physically handicapped. My leg has limited me my whole life, but it never stopped me from trying. After he passed, I borrowed. I scraped. I took on <span className="text-amber-400 font-semibold">over $6,000 in debt</span> so my mother wouldn't have to go to sleep hungry. So she wouldn't have to feel the weight of what we'd lost on top of an empty stomach. I wanted to carry what he carried. I wanted to be enough.
          </p>

          <p className="text-[#fdf6ec] font-medium">
            But I am running out of ways to be enough.
          </p>

          <p>
            Last week, my mother collapsed.
          </p>

          <p>
            The doctors say she needs an ear operation. <span className="text-amber-400 font-semibold">$3,000.</span> It has to happen next week. I sat in that hospital hallway and did the math in my head over and over, hoping somehow the numbers would change. They didn't.
          </p>

          <p>
            Our relatives found reasons to look away. Friends we thought we had slowly stopped picking up the phone. And every single day, debt collectors call — not to ask how we are, but to threaten, to shout, to remind me of how little I have left.
          </p>

          <p className="text-[#fdf6ec] italic border-l-2 border-amber-500/50 pl-5">
            At night, I can hear my mother crying through the wall. She thinks I don't know. She's trying to protect me, even now, even broken — because that's who she is.
          </p>

          <p>
            I am not a charity case. I am a son doing the only thing he knows how to do: refuse to give up.
          </p>

          <p>
            If you can help, even a little, you won't just be giving money. You'll be giving a mother her surgery. You'll be giving a son the ability to breathe again.
          </p>

          <p className="text-[#fdf6ec] font-medium text-lg italic border-l-2 border-amber-500/60 pl-5">
            And if you cannot help financially, I ask only for one thing: please share this. Let someone who can, find us.
          </p>

          <p className="text-[#a89880]">
            Thank you for reading this far. That alone means more than I can say.
          </p>
        </div>
      </div>
    </section>
  )
}