import React from 'react'

// Inline official-style store badges (SVG)
const AppleBadge = () => (
  <a
    href="#appstore"
    aria-label="Download on the App Store"
    className="group inline-flex items-center gap-3 rounded-lg bg-black px-3.5 py-2 text-white border border-white/10 hover:border-white/20 transition"
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.365 1.43c.08 1.011-.3 2.001-.99 2.72-.7.73-1.74 1.29-2.758 1.221-.098-1.002.323-2.028 1.003-2.723.69-.71 1.859-1.228 2.746-1.218zM20.7 17.037c-.522 1.208-.773 1.748-1.444 2.818-.938 1.494-2.261 3.357-3.895 3.373-1.454.014-1.83-.888-3.406-.88-1.577.01-2.0.898-3.462.882-1.636-.013-2.886-1.695-3.825-3.187C2.02 17.5.777 13.1 2.582 10.19c1.05-1.678 2.713-2.745 4.609-2.77 1.435-.03 2.789.98 3.406.98.615 0 2.34-1.213 3.943-1.037.672.028 2.563.273 3.775 2.064-.098.062-2.253 1.316-2.22 3.93.037 3.135 2.738 4.177 2.605 4.68z"/>
    </svg>
    <span className="flex flex-col leading-none">
      <span className="text-[10px] text-white/70">Download on the</span>
      <span className="text-sm font-semibold tracking-wide">App Store</span>
    </span>
  </a>
)

const GooglePlayBadge = () => (
  <a
    href="#googleplay"
    aria-label="Get it on Google Play"
    className="group inline-flex items-center gap-3 rounded-lg bg-black px-3.5 py-2 text-white border border-white/10 hover:border-white/20 transition"
  >
    <svg width="22" height="22" viewBox="0 0 512 512" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A0FF"/>
          <stop offset="50%" stopColor="#00E3FF"/>
          <stop offset="100%" stopColor="#00A0FF"/>
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE000"/>
          <stop offset="100%" stopColor="#FF9C00"/>
        </linearGradient>
        <linearGradient id="g3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF3A44"/>
          <stop offset="100%" stopColor="#C31162"/>
        </linearGradient>
        <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#32A071"/>
          <stop offset="100%" stopColor="#00A569"/>
        </linearGradient>
      </defs>
      <path fill="url(#g1)" d="M325.3 232.4 74.2 53.2c-8.5-6.1-19.9-6.7-29-.9L287.8 256z"/>
      <path fill="url(#g2)" d="m446.6 209.5-71.3-42.6-87.5 89.1 87.5 89.1 71.3-42.6c10.9-6.5 17.4-18.1 17.4-30.9s-6.5-24.4-17.4-31.1z"/>
      <path fill="url(#g3)" d="M45.2 52.3C41.6 57 39.5 63 39.5 69.3v373.4c0 6.3 2.1 12.3 5.7 17l242.6-204z"/>
      <path fill="url(#g4)" d="M74.2 458.8c9 5.8 20.5 5.2 29-.9l222.1-156.2-37.7-31.7z"/>
    </svg>
    <span className="flex flex-col leading-none">
      <span className="text-[10px] text-white/70">GET IT ON</span>
      <span className="text-sm font-semibold tracking-wide">Google Play</span>
    </span>
  </a>
)

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[92svh] sm:min-h-[80vh] flex items-end bg-[#0b0c0f] overflow-hidden">
      {/* Base backdrop */}
      <div className="absolute inset-0 bg-[#0b0c0f]" aria-hidden />

      {/* Radial highlight behind content (subtle orange glow) */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 20%, rgba(255,106,0,0.20) 0%, rgba(255,106,0,0.06) 40%, rgba(11,12,15,0.0) 70%)'
        }}
        aria-hidden
      />

      {/* Conic ambient sweep for depth */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            'conic-gradient(from 210deg at 70% 20%, rgba(255,106,0,0.15), rgba(4,117,186,0.10), rgba(11,12,15,0.0) 70%)'
        }}
        aria-hidden
      />

      {/* Soft grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          backgroundPosition: 'center'
        }}
        aria-hidden
      />

      {/* Blurred accent orbs */}
      <div className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full bg-[#ff6a00]/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" aria-hidden />

      {/* Noise/grain overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\" viewBox=\"0 0 140 140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.35\"/></svg>')"
        }}
        aria-hidden
      />

      {/* Top and bottom vignettes */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/70 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" aria-hidden />

      <div className="relative z-10 max-w-screen-lg mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-widest text-white/60 uppercase">Tom Clancy’s</p>
          <h1 className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            The Division Resurgence
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-prose mx-auto">
            A next‑gen looter shooter built for mobile. Squad up, reclaim the city, and rise as an agent of The Division.
          </p>

          {/* Primary CTAs centered */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-lg bg-[#ff6a00] text-white font-semibold py-3 px-5 text-base shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:brightness-110 active:scale-[0.98] transition"
            >
              Download on Mobile
            </a>
            <a
              href="#preregister"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white font-semibold py-3 px-5 text-base hover:bg-white/5 active:scale-[0.98] transition"
            >
              Pre-register
            </a>
          </div>

          {/* Store badges centered under CTAs with official look */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <AppleBadge />
            <GooglePlayBadge />
          </div>

          {/* Support text centered under badges */}
          <p className="mt-3 text-xs text-gray-400 text-center">
            Join millions of agents worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
