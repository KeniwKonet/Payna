import React, { useState } from 'react'
import { motion } from 'framer-motion'

const benefits = [
  { label: 'Collective Bargaining Power', icon: '💪', desc: 'United we negotiate better prices from buyers and suppliers' },
  { label: 'Shared Infrastructure', icon: '🏗️', desc: 'Co-own processing equipment, storage, and transport assets' },
  { label: 'Market Access', icon: '🛒', desc: 'Open doors to supermarkets, exporters, and institutional buyers' },
  { label: 'Financial Services', icon: '🏦', desc: 'Group credit, savings schemes, and cooperative finance tools' },
  { label: 'Knowledge Sharing', icon: '📚', desc: 'Peer learning, best practices, and collective innovation' },
  { label: 'Risk Mitigation', icon: '🛡️', desc: 'Spread risk across members — what hurts one affects all' },
]

export default function CooperativeDev() {
  const [hovered, setHovered] = useState(null)
  const centerX = 50, centerY = 50, radius = 35

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold-500" />
            <span className="section-label">Collective Power</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="section-title mb-6">Cooperative <span className="gradient-text">Development</span></h2>
          <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
            Alone, a farmer is vulnerable. Together, a cooperative is unstoppable. We build the networks that turn individual farmers into market forces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Network visualization */}
          <div className="reveal flex justify-center">
            <div className="relative w-80 h-80">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Connecting lines */}
                {benefits.map((_, i) => {
                  const angle = (i * 360 / benefits.length - 90) * (Math.PI / 180)
                  const x = centerX + radius * Math.cos(angle)
                  const y = centerY + radius * Math.sin(angle)
                  return (
                    <motion.line
                      key={i}
                      x1={centerX} y1={centerY} x2={x} y2={y}
                      stroke={hovered === i ? '#D4A017' : 'rgba(212,160,23,0.2)'}
                      strokeWidth="0.5"
                      strokeDasharray="2,2"
                      animate={{ strokeDashoffset: [0, -10] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  )
                })}
                {/* Center node */}
                <motion.circle
                  cx={centerX} cy={centerY} r="8"
                  fill="rgba(212,160,23,0.2)"
                  stroke="#D4A017"
                  strokeWidth="0.5"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <text x={centerX} y={centerY + 1} textAnchor="middle" dominantBaseline="middle" fill="#D4A017" fontSize="3" fontFamily="sans-serif" fontWeight="bold">
                  COOP
                </text>
                {/* Outer nodes */}
                {benefits.map((benefit, i) => {
                  const angle = (i * 360 / benefits.length - 90) * (Math.PI / 180)
                  const x = centerX + radius * Math.cos(angle)
                  const y = centerY + radius * Math.sin(angle)
                  return (
                    <g key={i} style={{ cursor: 'pointer' }} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                      <motion.circle
                        cx={x} cy={y} r="6"
                        fill={hovered === i ? 'rgba(212,160,23,0.3)' : 'rgba(46,168,58,0.15)'}
                        stroke={hovered === i ? '#D4A017' : 'rgba(46,168,58,0.4)'}
                        strokeWidth="0.5"
                        whileHover={{ scale: 1.3 }}
                      />
                      <text x={x} y={y + 0.5} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="3">
                        {benefit.icon}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Benefits list */}
          <div className="grid sm:grid-cols-2 gap-4 reveal">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="glass-card p-5 group"
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  borderColor: hovered === i ? 'rgba(212,160,23,0.4)' : 'rgba(255,255,255,0.06)',
                  background: hovered === i ? 'rgba(212,160,23,0.05)' : 'rgba(255,255,255,0.03)',
                }}
              >
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <h4 className="font-heading font-bold text-sm text-white mb-1 group-hover:text-gold-400 transition-colors">{benefit.label}</h4>
                <p className="font-body text-xs text-white/40 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
