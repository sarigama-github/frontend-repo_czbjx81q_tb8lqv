import React, { useState } from 'react'

const scenes = [
  { key: 'open-world', label: 'Open world', color: '#1f2937' },
  { key: 'co-op', label: 'Co-op mission', color: '#111827' },
  { key: 'dark-zone', label: 'Dark Zone PvP', color: '#0b1220' },
]

const Gameplay = () => {
  const [active, setActive] = useState(scenes[0].key)

  return (
    <section id="gameplay" className="bg-[#0b0c0f] text-white">
      <div className="max-w-screen-md mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">Tactical gameplay built for touch</h2>
        <div className="mt-6">
          {/* Phone mockup */}
          <div className="mx-auto w-full max-w-sm aspect-[9/16] rounded-[2rem] border border-white/10 bg-black/40 shadow-2xl overflow-hidden">
            <div className="h-6 bg-black/60 flex items-center justify-center text-[10px] text-gray-400">Notch</div>
            <div className="relative flex-1 h-full">
              {scenes.map((s) => (
                <div key={s.key} className={`absolute inset-0 transition-opacity duration-300 ${active === s.key ? 'opacity-100' : 'opacity-0'}`} style={{ background: s.color }}>
                  <div className="w-full h-full grid place-items-center">
                    <div className="text-center px-6">
                      <div className="mx-auto w-24 h-24 rounded-lg bg-white/5"></div>
                      <p className="mt-3 text-sm text-gray-300">Screenshot placeholder</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar">
            {scenes.map((s) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`flex-none w-28 rounded-lg border text-left p-2 ${active === s.key ? 'border-[#ff6a00] bg-[#ff6a00]/10' : 'border-white/10 bg-white/5'}`}
              >
                <div className="w-full h-12 rounded-md" style={{ background: s.color }}></div>
                <span className="mt-1 block text-xs text-gray-300">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gameplay
