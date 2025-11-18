import React from 'react'
import { Clock, Star, Wrench } from 'lucide-react'

const items = [
  { icon: Clock, title: 'New seasons', desc: 'Fresh narratives, gear, and goals arrive regularly.' },
  { icon: Star, title: 'Events and challenges', desc: 'Time-limited modes and rewards keep things exciting.' },
  { icon: Wrench, title: 'Gear balance updates', desc: 'Frequent tuning to keep builds and playstyles viable.' }
]

const LiveService = () => {
  return (
    <section className="bg-[#0a0b0e] text-white">
      <div className="max-w-screen-md mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">Ongoing updates</h2>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-black/40 border border-white/5 p-4">
              <Icon className="w-5 h-5 text-[#ff6a00]" />
              <h3 className="mt-2 text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LiveService
