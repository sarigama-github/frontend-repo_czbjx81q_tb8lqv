import React from 'react'
import { Shield, Users, PackageOpen, CalendarDays } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Authentic Division experience on mobile',
    desc: 'Play the franchise you love rebuilt for phones with tactical gunplay and cover mechanics.'
  },
  {
    icon: Users,
    title: 'Co-op missions and open world activities',
    desc: 'Team up with friends, clear control points, and take back NYC together.'
  },
  {
    icon: PackageOpen,
    title: 'Deep progression, gear, and skills',
    desc: 'Chase loot, optimize builds, and master specialization skills.'
  },
  {
    icon: CalendarDays,
    title: 'Regular updates and live events',
    desc: 'Fresh content, events, and challenges keep the fight going.'
  }
]

const Features = () => {
  return (
    <section id="features" className="bg-[#0a0b0e] text-white">
      <div className="max-w-screen-md mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">Why play The Division Resurgence</h2>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-black/40 border border-white/5 p-4 shadow-[0_1px_0_0_rgba(255,255,255,0.05)]">
              <Icon className="w-6 h-6 text-[#ff6a00]" />
              <h3 className="mt-3 text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
