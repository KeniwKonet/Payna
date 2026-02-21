import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const duration = 2000
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref} className="counter-number text-5xl md:text-7xl font-bold tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const impacts = [
  { target: 1000, suffix: '+', label: 'Youth Enterprises', sublabel: 'Built and supported across Africa', icon: '🏢' },
  { target: 500000, suffix: '+', label: 'Jobs Created', sublabel: 'Direct & indirect employment', icon: '💼' },
  { target: 500, suffix: '', label: 'Cooperatives', sublabel: 'Strengthened & formalized', icon: '🤝' },
  { target: 54, suffix: '', label: 'African Nations', sublabel: 'Continental presence', icon: '🌍' },
]

export default function Impact() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="impact" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Deep dark background */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0D0D0D 0%, #050A08 50%, #0D0D0D 100%)',
        }}
      />

      {/* Radial glow center */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #C9A84C, transparent)' }} />
      </div>

      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '2px', height: '2px',
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
            background: '#C9A84C',
            opacity: 0.6,
            animation: `particleFloat ${4 + i}s ${-i}s ease-in-out infinite`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-6"
        >
          <span className="section-label">Our Impact Goals</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title text-white text-center mb-4"
        >
          Numbers That{' '}
          <span className="text-gradient-gold">Define</span>{' '}
          a Continent
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-payna-beige/50 max-w-lg mx-auto mb-20"
        >
          PAYNA's 5-year continental impact targets — ambitious, achievable, transformational.
        </motion.p>

        {/* Counter grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
              className="text-center relative group"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: '0 0 40px rgba(201,168,76,0.1)' }} />

              <div className="text-3xl mb-4">{item.icon}</div>
              <div className="flex items-end justify-center gap-1 mb-3">
                <AnimatedCounter target={item.target} suffix={item.suffix} />
              </div>
              <div className="text-white font-semibold text-lg mb-1">{item.label}</div>
              <div className="text-payna-beige/40 text-sm">{item.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Increased Export Revenue', desc: 'Through PAYNA-facilitated trade routes and AfCFTA alignment', icon: '📈' },
            { label: 'Improved Food Access', desc: 'For millions through enhanced production and distribution networks', icon: '🍽️' },
            { label: 'Climate Adaptation', desc: 'Youth farmers equipped with climate-resilient farming practices', icon: '♻️' },
          ].map((item, i) => (
            <div key={i} className="glass rounded-2xl p-6 flex items-start gap-4"
              style={{ border: '1px solid rgba(201,168,76,0.1)' }}>
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="text-payna-gold font-semibold mb-1">{item.label}</div>
                <div className="text-payna-beige/50 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
