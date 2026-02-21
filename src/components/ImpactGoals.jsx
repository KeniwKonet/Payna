import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const goals = [
  { number: 1000, suffix: '+', label: 'Youth Enterprises', icon: '🚀', desc: 'Agribusinesses launched and operational' },
  { number: 500000, suffix: '+', label: 'Jobs Created', icon: '👥', desc: 'Decent agricultural employment opportunities' },
  { number: 500, suffix: '', label: 'Cooperatives', icon: '🤝', desc: 'Strengthened youth agricultural cooperatives' },
  { number: 54, suffix: '', label: 'Nations Reached', icon: '🌍', desc: 'Active presence across all African countries' },
  { number: 5, suffix: 'B+', label: 'USD Trade Value', icon: '📈', desc: 'Agricultural export trade facilitated' },
  { number: 2030, suffix: '', label: 'Target Year', icon: '🎯', desc: 'Full continental transformation goal' },
]

function StatCard({ stat, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  return (
    <motion.div
      ref={ref}
      className="relative p-8 text-center group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(212,160,23,0.1)',
        borderRadius: 12,
      }}
      whileHover={{ borderColor: 'rgba(212,160,23,0.4)', background: 'rgba(212,160,23,0.04)' }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: 'inset 0 0 30px rgba(212,160,23,0.05)' }} />

      <div className="text-4xl mb-4">{stat.icon}</div>
      <div className="font-display text-5xl lg:text-6xl font-bold glow-text mb-2" style={{ color: '#D4A017' }}>
        {inView ? (
          <CountUp
            end={stat.number}
            duration={2.5}
            separator=","
            suffix={stat.suffix}
          />
        ) : '0'}
      </div>
      <h3 className="font-heading font-bold text-white text-lg mb-2">{stat.label}</h3>
      <p className="font-body text-xs text-white/40">{stat.desc}</p>
    </motion.div>
  )
}

export default function ImpactGoals() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, transparent, rgba(10,64,16,0.2), transparent)' }}>
      {/* Dark dramatic background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(212,160,23,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold-500" />
            <span className="section-label">By 2030</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="section-title mb-6">
            Our <span className="gradient-text">Impact Goals</span>
          </h2>
          <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
            These aren't just numbers. They're the futures of millions of young Africans building the continent's agricultural legacy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {goals.map((goal, i) => (
            <StatCard key={i} stat={goal} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
