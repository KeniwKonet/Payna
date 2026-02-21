import React from 'react'
import { motion } from 'framer-motion'

const pillars = [
  { icon: '♻️', title: 'Regenerative Farming', desc: 'Soil health, biodiversity, carbon sequestration, and sustainable land management practices.' },
  { icon: '💧', title: 'Irrigation Systems', desc: 'Drip irrigation, solar-powered pumps, and water harvesting for climate resilience.' },
  { icon: '☀️', title: 'Renewable Energy', desc: 'Solar-powered cold storage, agritech tools, and processing equipment for off-grid farms.' },
  { icon: '🌡️', title: 'Climate Adaptation', desc: 'Drought-resistant crops, early warning systems, and adaptive farming for a changing climate.' },
]

export default function FoodSecurity() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Subtle globe wireframe */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center opacity-5 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ width: '600px', height: '600px' }}
        >
          <svg viewBox="0 0 200 200" fill="none" stroke="#D4A017" strokeWidth="0.5">
            <circle cx="100" cy="100" r="90"/>
            <ellipse cx="100" cy="100" rx="50" ry="90"/>
            <ellipse cx="100" cy="100" rx="90" ry="35"/>
            <line x1="10" y1="100" x2="190" y2="100"/>
            <line x1="100" y1="10" x2="100" y2="190"/>
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold-500" />
            <span className="section-label">Food Systems</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="section-title mb-6">Food Security & <span className="gradient-text">Climate-Smart</span> Agriculture</h2>
          <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
            Building agricultural systems that feed Africa today while protecting the land for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              className="reveal glass-card p-8 text-center group hover:glow-border"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-5xl mb-6 block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {pillar.icon}
              </motion.div>
              <h3 className="font-heading font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">{pillar.title}</h3>
              <p className="font-body text-sm text-white/50 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* SDG alignment */}
        <div className="mt-20 reveal glass-card p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-heading font-bold text-gold-400 text-sm tracking-widest uppercase mb-3">UN SDG Alignment</h3>
              <h4 className="font-display text-2xl font-bold text-white mb-3">Committed to Zero Hunger by 2030</h4>
              <p className="font-body text-white/50">PAYNA's programs directly contribute to SDG 2 (Zero Hunger), SDG 8 (Decent Work), SDG 13 (Climate Action), and SDG 17 (Partnerships for the Goals).</p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              {['SDG 2', 'SDG 8', 'SDG 13', 'SDG 17'].map(sdg => (
                <div key={sdg} className="w-16 h-16 rounded-xl flex items-center justify-center font-heading font-bold text-xs text-white border border-gold-500/30" style={{ background: 'rgba(212,160,23,0.1)' }}>
                  {sdg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
