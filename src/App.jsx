import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Story from './components/Story'
import Crisis from './components/Crisis'
import Progress from './components/Progress'
import DonateSection from './components/DonateSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain min-h-screen bg-[#0d0a07] text-[#f5efe6]">
      <Navbar />
      <HeroSlider />
      <Story />
      <Crisis />
      <Progress />
      <DonateSection />
      <Footer />
    </div>
  )
}
