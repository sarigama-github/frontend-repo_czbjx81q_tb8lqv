import React from 'react'
import { DiscordLogoIcon } from '@radix-ui/react-icons'
import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react'

const Community = () => {
  return (
    <section className="bg-[#0b0c0f] text-white">
      <div className="max-w-screen-md mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">Join the agent community</h2>
        <p className="mt-2 text-sm text-gray-300">Connect on Discord and follow our channels for events, patch notes, and drops.</p>
        <div className="mt-4 flex items-center gap-3">
          <a href="#" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition"><DiscordLogoIcon className="w-5 h-5" /></a>
          <a href="#" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition"><Youtube className="w-5 h-5" /></a>
          <a href="#" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="w-11 h-11 rounded-full grid place-items-center bg-white/5 border border-white/10 text-white active:scale-95 transition"><Facebook className="w-5 h-5" /></a>
        </div>
        <a href="#" className="mt-3 inline-block text-xs text-gray-400 underline">Community guidelines</a>
      </div>
    </section>
  )
}

export default Community
