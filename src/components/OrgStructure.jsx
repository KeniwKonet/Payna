import React from 'react'
import { motion } from 'framer-motion'

const regions = ['East Africa', 'West Africa', 'Central Africa', 'North Africa', 'Southern Africa']
const committees = ['Agritech', 'Finance', 'Policy', 'Gender', 'Climate']

export default function OrgStructure() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold-500" />
            <span className="section-label">Governance</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="section-title mb-6">Organizational <span className="gradient-text">Structure</span></h2>
        </div>

        <div className="reveal">
          {/* Continental Secretariat */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="glass-card p-6 text-center w-72 glow-border relative"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-forest-900 text-xs font-heading font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                Apex Body
              </div>
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="font-heading font-bold text-gold-400">Continental Secretariat</h3>
              <p className="font-body text-xs text-white/40 mt-1">Pan-African Headquarters</p>
            </motion.div>
          </div>

          {/* Connection lines */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-8 bg-gradient-to-b from-gold-500/60 to-gold-500/20" />
          </div>

          {/* Regional Chapters */}
          <div className="relative mb-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gold-500/20" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-8">
              {regions.map((region, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-px h-6 bg-gold-500/30" />
                  <motion.div
                    className="glass-card p-4 text-center w-full"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(46,168,58,0.5)' }}
                  >
                    <div className="text-xl mb-2">🌍</div>
                    <p className="font-heading text-xs font-bold text-forest-300">{region}</p>
                    <p className="font-body text-xs text-white/30 mt-0.5">Chapter</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* National Chapters label */}
          <div className="flex items-center gap-4 my-8 justify-center">
            <div className="w-32 h-px bg-white/10" />
            <div className="font-heading text-xs tracking-widest text-white/30 uppercase">↓ National Youth Chapters (54 nations)</div>
            <div className="w-32 h-px bg-white/10" />
          </div>

          {/* Thematic Committees */}
          <div className="glass-card p-6">
            <h4 className="font-heading text-xs tracking-widest uppercase text-gold-500/70 text-center mb-6">Thematic Committees</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {committees.map((com, i) => (
                <motion.div
                  key={i}
                  className="px-6 py-3 rounded-lg font-heading text-sm font-bold text-white/70 hover:text-gold-400 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {com}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
