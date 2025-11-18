import React from 'react'

const Support = () => {
  return (
    <section id="support" className="bg-[#0b0c0f] text-white">
      <div className="max-w-screen-md mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">Need help</h2>
        <p className="mt-2 text-sm text-gray-300">Visit the official support portal for account, technical, or purchase assistance.</p>
        <div className="mt-4">
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-[#ff6a00] text-white font-semibold px-5 py-3 active:scale-95 transition">Visit support</a>
          <p className="mt-2 text-xs text-gray-400">Report a bug from in-game settings.</p>
        </div>
      </div>
    </section>
  )
}

export default Support
