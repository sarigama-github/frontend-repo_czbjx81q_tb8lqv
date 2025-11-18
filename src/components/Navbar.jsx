import React from 'react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/70 border-b border-white/5">
      <nav className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 text-white">
          <div className="w-6 h-6 rounded-sm bg-[#ff6a00]"></div>
          <span className="text-sm font-semibold tracking-wide">The Division Resurgence</span>
        </a>
        {/* Links */}
        <div className="flex items-center gap-4 text-xs text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#gameplay" className="hover:text-white transition-colors">Gameplay</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#support" className="hover:text-white transition-colors">Support</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
