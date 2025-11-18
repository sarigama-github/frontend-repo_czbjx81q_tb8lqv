import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gameplay from './components/Gameplay'
import LiveService from './components/LiveService'
import Community from './components/Community'
import FAQ from './components/FAQ'
import Support from './components/Support'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0b0c0f] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gameplay />
        <LiveService />
        <Community />
        <FAQ />
        <Support />
      </main>
      <Footer />
    </div>
  )
}

export default App
