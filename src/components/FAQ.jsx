import React, { useState } from 'react'

const faqs = [
  { q: 'What platforms support The Division Resurgence?', a: 'iOS and Android devices with supported OS versions. Check your store page for availability.' },
  { q: 'Is it free to play?', a: 'Yes. Optional cosmetic and convenience purchases are available.' },
  { q: 'Is cross-play supported?', a: 'You can play with friends on the same platform. Cross-progression support may vary.' },
  { q: 'What are the minimum device specs?', a: 'A modern device with at least 3 GB RAM is recommended. Performance will vary by model.' }
]

const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setOpen(!open)} className="w-full py-4 flex items-center justify-between text-left">
        <span className="text-sm font-semibold text-white">{q}</span>
        <span className="text-gray-400">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-sm text-gray-300">{a}</p>}
    </div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className="bg-[#0a0b0e] text-white">
      <div className="max-w-screen-md mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight">FAQ</h2>
        <div className="mt-4">
          {faqs.map(({ q, a }) => (
            <Item key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
