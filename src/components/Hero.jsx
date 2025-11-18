import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-end bg-[#0b0c0f]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay to increase contrast, allow interactions */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      <div className="relative z-10 max-w-screen-md mx-auto w-full px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">The Division Resurgence</h1>
        <p className="mt-2 text-base text-gray-300">A next-gen Tom Clancy looter shooter on mobile.</p>

        <div className="mt-6 flex gap-3">
          <a href="#download" className="flex-1 inline-flex items-center justify-center rounded-lg bg-[#ff6a00] text-white font-semibold py-3 text-base active:scale-[0.98] transition-transform">Download on mobile</a>
          <a href="#preregister" className="flex-1 inline-flex items-center justify-center rounded-lg border border-white/20 text-white font-semibold py-3 text-base active:scale-[0.98] transition-transform">Pre-register</a>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="h-10 w-28 bg-white/10 rounded-md"></div>
          <div className="h-10 w-28 bg-white/10 rounded-md"></div>
        </div>
        <p className="mt-2 text-xs text-gray-400">Join millions of agents worldwide.</p>
      </div>
    </section>
  )
}

export default Hero
