export default function DonateSection() {
  return (
    <section id="donate" className="relative py-28 bg-[#080604] overflow-hidden">
      {/* Warm glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #f59e0b, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-amber-500 text-xs tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Be the miracle
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#fdf6ec] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Every dollar,<br />
            <span className="italic text-amber-400">every prayer counts.</span>
          </h2>
          <p className="text-[#a89880] text-base" style={{ fontFamily: "'Lora', serif" }}>
            You can help directly — scan, transfer, or click below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* QR Scanner */}
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-full aspect-square max-w-[220px] rounded-2xl border-2 border-amber-500/40 bg-white/5 flex flex-col items-center justify-center p-4 hover:border-amber-500/80 transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(245,158,11,0.1)' }}
            >
              {/* Replace this img src with your actual QR code image */}
              <img
                src="https://res.cloudinary.com/dmdnowrnc/image/upload/v1777901081/Donation/HHIwI_7bYAAbMcV_zp9nd3.png"
                alt="Donation QR Code"
                className="w-full h-full object-contain rounded-xl"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback if no image */}
              <div
                className="w-full h-full flex-col items-center justify-center text-center hidden"
                style={{ display: 'none' }}
              >
               
              </div>
            </div>
            <p className="text-amber-400/80 text-xs tracking-widest uppercase text-center" style={{ fontFamily: "'Lora', serif" }}>
              Scan to Pay
            </p>
            <p className="text-[#6b5d4f] text-[10px] text-center" style={{ fontFamily: "'Lora', serif" }}>
            Solana
            </p>
          </div>

          {/* Divider */}
          <div className="flex md:flex-col items-center justify-center gap-4 py-4 md:py-0">
            <div className="flex-1 md:flex-none h-px md:h-24 w-full md:w-px bg-white/10" />
            <span
              className="text-[#6b5d4f] text-xs tracking-widest uppercase px-2"
              style={{ fontFamily: "'Lora', serif" }}
            >
              or
            </span>
            <div className="flex-1 md:flex-none h-px md:h-24 w-full md:w-px bg-white/10" />
          </div>

          {/* Wallet + Link */}
          <div className="flex flex-col gap-6">

            {/* Wallet address */}
            <div>
              <p
                className="text-amber-500 text-[10px] tracking-[0.2em] uppercase mb-2"
                style={{ fontFamily: "'Lora', serif" }}
              >
               Wallet Address
              </p>
              <div
                className="relative group cursor-pointer"
                onClick={() => {
                  navigator.clipboard?.writeText('A7jAnyk8FbB5xmDdwMs3P4ZoBaTLdFvqHCHYcM1jb7FF')
                  alert('Address copied!')
                }}
              >
                <div
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-amber-300 text-sm break-all leading-relaxed hover:border-amber-500/50 transition-all duration-300"
                  style={{ fontFamily: "'Lora', serif", letterSpacing: '0.03em' }}
                >
                  A7jAnyk8FbB5xmDdwMs3P4ZoBaTLdFvqHCHYcM1jb7FF
                </div>
                <span
                  className="absolute top-2 right-2 text-[10px] text-[#6b5d4f] group-hover:text-amber-500 transition-colors"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                
                </span>
              </div>
              <p className="text-[#6b5d4f] text-[10px] mt-2" style={{ fontFamily: "'Lora', serif" }}>
                Solana 
              </p>
            </div>

            {/* Donation link */}
            <div>
              <p
                className="text-amber-500 text-[10px] tracking-[0.2em] uppercase mb-2"
                style={{ fontFamily: "'Lora', serif" }}
              >
                🌐 Donate via Link
              </p>
              <a
                href="https://www.donate.gg/campaigns/help-me-for-medical-debt-and-financial-stability"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-4 py-3 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm hover:bg-amber-500/20 hover:border-amber-500/60 transition-all duration-300 group"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <span>Donate.gg</span>
                <span className="text-amber-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
             
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-14 pt-10 border-t border-white/5">
          <p
            className="text-[#c8b99a] text-base italic leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "If you cannot donate, please share this page. Even one share can reach the person who changes everything for us."
          </p>
          <p className="text-amber-500/60 text-sm mt-4">🙏 May God bless every kind soul.</p>
        </div>
      </div>
    </section>
  )
}
