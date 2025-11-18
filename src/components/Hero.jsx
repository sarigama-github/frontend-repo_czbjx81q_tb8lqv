import React from 'react'
import { Apple, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90svh] sm:min-h-[80vh] flex items-end bg-[#0b0c0f] overflow-hidden">
      {/* Solid backdrop to guarantee no background text/artifacts */}
      <div className="absolute inset-0 bg-[#0b0c0f]" aria-hidden />

      {/* Ambient gradient accents (no external scenes) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c0f] via-[#0a0b0e] to-black opacity-90" aria-hidden />
      <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[#ff6a00]/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" aria-hidden />

      {/* Top and bottom vignettes for depth */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent" aria-hidden />

      <div className="relative z-10 max-w-screen-md mx-auto w-full px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">The Division Resurgence</h1>
        <p className="mt-2 text-base text-gray-300">A next-gen Tom Clancy looter shooter on mobile.</p>

        <div className="mt-6 flex gap-3">
          <a href="#download" className="flex-1 inline-flex items-center justify-center rounded-lg bg-[#ff6a00] text-white font-semibold py-3 text-base active:scale-[0.98] transition-transform">Download on Mobile</a>
          <a href="#preregister" className="flex-1 inline-flex items-center justify-center rounded-lg border border-white/20 text-white font-semibold py-3 text-base active:scale-[0.98] transition-transform">Pre-register</a>
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

        {/* Support text centered under CTAs */}
        <p className="mt-3 text-xs text-gray-400 text-center">Join millions of agents worldwide.</p>
      </div>
    </section>
  )
}

export default Hero
