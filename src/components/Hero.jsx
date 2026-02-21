import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 6 + 5,
  color: i % 3 === 0 ? '#D4A017' : i % 3 === 1 ? '#2EA83A' : '#F5D78A',
  opacity: Math.random() * 0.4 + 0.1,
}))

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #021A04 0%, #062E09 30%, #0A4010 60%, #1A0F00 100%)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #D4A017 0%, transparent 70%)',
            top: '10%', right: '15%',
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #2EA83A 0%, transparent 70%)',
            bottom: '20%', left: '10%',
            transform: `translateY(${-scrollY * 0.05}px)`,
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #D4A017 0%, transparent 70%)',
            top: '50%', left: '40%',
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Africa silhouette SVG subtle background */}
      <div className="absolute inset-0 flex items-center justify-end opacity-5 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 400 500" className="h-full" fill="currentColor" style={{ color: '#D4A017' }}>
          <path d="M200,20 C160,20 130,40 120,70 C100,80 80,95 75,120 C60,130 55,150 60,175 C50,190 48,215 55,235 C45,255 48,280 60,300 C65,330 75,355 90,375 C110,410 145,440 175,460 C185,475 195,480 200,480 C205,480 215,475 225,460 C255,440 290,410 310,375 C325,355 335,330 340,300 C352,280 355,255 345,235 C352,215 350,190 340,175 C345,150 340,130 325,120 C320,95 300,80 280,70 C270,40 240,20 200,20Z"/>
        </svg>
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gold-500" />
            <span className="section-label">Pan African Youth Network for Agriculture</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-8"
          >
            <span className="block text-white">Transforming</span>
            <span className="block gradient-text">Agriculture.</span>
            <span className="block text-white">Empowering</span>
            <span className="block" style={{ color: '#45C453' }}>Africa's Youth.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-body text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed"
          >
            A youth-led continental movement building profitable, innovation-driven agricultural value chains across Africa — from farm to global market.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="btn-primary animate-glow-pulse magnetic-btn">
              <span className="relative z-10">Join the Movement</span>
            </button>
            <button className="btn-secondary magnetic-btn">
              Explore Our Programs
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { num: '54', label: 'African Nations' },
              { num: '5', label: 'Regional Chapters' },
              { num: '500K+', label: 'Youth Target' },
              { num: '2030', label: 'Transformation Goal' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-3xl font-bold text-gold-400">{stat.num}</span>
                <span className="font-body text-xs text-white/40 tracking-wider uppercase mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-heading text-xs tracking-widest uppercase text-white/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-4 h-4 border-b-2 border-r-2 border-gold-500 rotate-45"
        />
      </motion.div>
    </section>
  )
}
