import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import WhatWeDo from './components/WhatWeDo'
import YouthEmployment from './components/YouthEmployment'
import FoodSecurity from './components/FoodSecurity'
import CooperativeDev from './components/CooperativeDev'
import MarketTrade from './components/MarketTrade'
import Programs from './components/Programs'
import OrgStructure from './components/OrgStructure'
import Partnerships from './components/Partnerships'
import ImpactGoals from './components/ImpactGoals'
import JoinMovement from './components/JoinMovement'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  useEffect(() => {
    // Lenis smooth scroll
    const initLenis = async () => {
      try {
        const { default: Lenis } = await import('lenis')
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
        })
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return lenis
      } catch (e) {
        console.log('Lenis not available, using default scroll')
      }
    }
    const lenisInstance = initLenis()

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
      lenisInstance?.then(l => l?.destroy())
    }
  }, [])

  return (
    <div className="relative bg-forest-900 min-h-screen">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <WhatWeDo />
        <YouthEmployment />
        <FoodSecurity />
        <CooperativeDev />
        <MarketTrade />
        <Programs />
        <OrgStructure />
        <Partnerships />
        <ImpactGoals />
        <JoinMovement />
      </main>
      <Footer />
    </div>
  )
}
