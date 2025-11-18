import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-screen-md mx-auto px-4 py-8">
        <div className="text-sm font-semibold text-white">Tom Clancy’s The Division Resurgence</div>
        <div className="mt-2 flex flex-wrap gap-4 text-xs">
          <a href="#" className="hover:text-white">Terms of use</a>
          <a href="#" className="hover:text-white">Privacy policy</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
        <p className="mt-3 text-[11px] text-gray-500">Tom Clancy’s, The Division, and the Soldier Icon are trademarks of Ubisoft Entertainment.</p>
      </div>
    </footer>
  )
}

export default Footer
