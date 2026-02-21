import React from 'react'
import { motion } from 'framer-motion'

const partners = [
  'African Union', 'IFAD', 'FAO', 'World Bank',
  'AGRA', 'AfDB', 'USAID', 'GIZ',
  'NEPAD', 'CTA', 'IITA', 'ICRISAT',
]

export default function Partnerships() {
  return (
    <section id="partnership" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold-500" />
            <span className="section-label">Ecosystem</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="section-title mb-6">Strategic <span className="gradient-text">Partnerships</span></h2>
          <p className="font-body text-white/50 text-lg max-w-xl mx-auto">
            Building alliances with the institutions, donors, and development organizations shaping Africa's agricultural future.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 flex items-center justify-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center font-display font-bold text-xl" style={{ background: 'rgba(212,160,23,0.1)', color: '#D4A017' }}>
                  {partner.charAt(0)}
                </div>
                <span className="font-heading text-xs font-bold text-white/40 group-hover:text-white/80 transition-colors tracking-wide uppercase">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <p className="font-body text-white/40 mb-6">Interested in partnering with PAYNA?</p>
          <button className="btn-secondary">
            Become a Partner →
          </button>
        </div>
      </div>
    </section>
  )
}
