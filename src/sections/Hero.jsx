import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Animated particle component
const Particle = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      width: style.size,
      height: style.size,
      left: style.x,
      top: style.y,
      background: style.color,
      opacity: style.opacity,
      filter: 'blur(1px)',
      animation: `particleFloat ${style.duration}s ${style.delay}s ease-in-out infinite`,
    }}
  />
)

const particles = Array.from({ length: 20 }, (_, i) => ({
  size: Math.random() * 6 + 2 + 'px',
  x: Math.random() * 100 + '%',
  y: Math.random() * 100 + '%',
  color: i % 3 === 0 ? 'rgba(201,168,76,0.6)' : i % 3 === 1 ? 'rgba(76,175,114,0.4)' : 'rgba(245,237,214,0.2)',
  opacity: Math.random() * 0.6 + 0.2,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * -8,
}))

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 200])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 1.08])

  const textVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }
    })
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Video Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        {/* Cinematic video background - replaced with a stunning gradient scene */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 80%, rgba(26, 92, 42, 0.6) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(201, 168, 76, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(61, 43, 31, 0.8) 0%, transparent 70%),
              linear-gradient(180deg, rgba(13,13,13,0.5) 0%, rgba(26,92,42,0.15) 50%, rgba(13,13,13,0.8) 100%)
            `,
            backgroundColor: '#0D1A0F',
          }}
        />

        {/* Animated background "landscape" */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="sunGlow" cx="50%" cy="60%" r="40%">
              <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0A0F0A"/>
              <stop offset="60%" stopColor="#0D2B15"/>
              <stop offset="100%" stopColor="#1A3A20"/>
            </linearGradient>
            <linearGradient id="fieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1A5C2A" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#0D1A0F"/>
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur stdDeviation="3"/>
            </filter>
          </defs>

          {/* Sky */}
          <rect width="1440" height="900" fill="url(#skyGrad)"/>

          {/* Sun glow */}
          <ellipse cx="720" cy="520" rx="500" ry="300" fill="url(#sunGlow)"/>

          {/* Stars */}
          {Array.from({ length: 80 }, (_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1440}
              cy={Math.random() * 450}
              r={Math.random() * 1.5 + 0.5}
              fill="white"
              opacity={Math.random() * 0.6 + 0.1}
            />
          ))}

          {/* Distant mountains/hills - Africa silhouette */}
          <path
            d="M0,600 Q180,480 360,520 Q540,560 720,480 Q900,400 1080,460 Q1260,520 1440,500 L1440,900 L0,900 Z"
            fill="#0D1A0F"
            opacity="0.9"
          />
          <path
            d="M0,650 Q240,580 480,620 Q720,660 960,590 Q1200,520 1440,580 L1440,900 L0,900 Z"
            fill="#0A1408"
          />

          {/* Field rows - agricultural terraces */}
          {[700, 730, 760, 790, 820, 850, 880].map((y, i) => (
            <path
              key={i}
              d={`M${i * 20},${y} Q720,${y - 20 + i * 5} ${1440 - i * 20},${y}`}
              stroke="rgba(26,92,42,0.3)"
              strokeWidth="1.5"
              fill="none"
            />
          ))}

          {/* Trees silhouettes */}
          {[150, 280, 420, 600, 780, 950, 1100, 1280].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${550 - (i % 3) * 20})`}>
              <line x1="0" y1="0" x2="0" y2="50" stroke="#0D2B15" strokeWidth="3"/>
              <ellipse cx="0" cy="-15" rx="25" ry="35" fill="#0D2B15" opacity="0.8"/>
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Dark overlay with gradient */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          animation: 'grain 0.4s steps(1) infinite',
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {particles.map((p, i) => <Particle key={i} style={p} />)}
      </div>

      {/* Main hero content */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-6xl mx-auto"
        style={{ opacity }}
      >
        {/* Label */}
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="w-12 h-px bg-payna-gold opacity-60" />
          <span className="section-label">Pan African Youth Network for Agriculture</span>
          <span className="w-12 h-px bg-payna-gold opacity-60" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="section-title mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          <span className="block text-white">Transforming</span>
          <span className="block text-gradient-gold">Agriculture.</span>
          <span className="block text-white">Empowering</span>
          <span className="block text-gradient-green-gold">Africa's Youth.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-payna-beige/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A youth-led continental movement building profitable, innovation-driven
          agricultural value chains across Africa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Join the Movement
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle at center, rgba(240,201,107,0.3) 0%, transparent 70%)' }}
            />
          </motion.button>

          <motion.button
            onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glass text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Programs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: '54', label: 'African Nations' },
            { value: '5', label: 'Regional Chapters' },
            { value: '500K+', label: 'Youth Target' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-gold" style={{ fontFamily: 'Playfair Display, serif' }}>
                {stat.value}
              </div>
              <div className="text-xs text-payna-beige/50 tracking-wider uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-payna-beige/40">Scroll</span>
        <div className="w-px h-12 relative overflow-hidden bg-white/10 rounded-full">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-payna-gold to-transparent rounded-full"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ height: '50%' }}
          />
        </div>
      </motion.div>

      {/* Diagonal bottom shape */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0D0D0D)',
          clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)'
        }}
      />
    </section>
  )
}
