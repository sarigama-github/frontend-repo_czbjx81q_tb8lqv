import React from 'react'
import { Apple, Play } from 'lucide-react'

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
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-white/60 uppercase">Tom Clancy’s</p>
          <h1 className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            The Division Resurgence
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-prose">
            A next‑gen looter shooter built for mobile. Squad up, reclaim the city, and rise as an agent of The Division.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
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

          {/* Store badges */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="#appstore" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors">
              <Apple className="h-5 w-5" />
              <span className="text-sm font-medium">App Store</span>
            </a>
            <a href="#googleplay" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors">
              <Play className="h-5 w-5" />
              <span className="text-sm font-medium">Google Play</span>
            </a>
          </div>

          {/* Support text centered under CTAs (mobile centered, left on wider for alignment) */}
          <p className="mt-3 text-xs text-gray-400 text-center">
            Join millions of agents worldwide.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
