import React from 'react'
import { motion } from 'framer-motion'

const pillars = [
  { icon: '🚀', title: 'Startup Incubation', desc: 'Hands-on agribusiness startup programs with mentorship, co-working spaces, and seed funding access for young agricultural entrepreneurs.' },
  { icon: '🧑‍🏫', title: 'Mentorship Networks', desc: 'Connecting youth with successful African agribusiness leaders, international agricultural experts, and veteran cooperative managers.' },
  { icon: '💰', title: 'Access to Finance', desc: 'Bridging the financing gap through partnerships with agricultural development banks, impact investors, and cooperative finance instruments.' },
  { icon: '📈', title: 'Enterprise Coaching', desc: 'Business development training, financial literacy, market analysis, and strategic planning coaching for growing agribusinesses.' },
]

export default function YouthEmployment() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #D4A017, transparent)', top: '-10%', left: '-5%' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-80 h-80 opacity-5"
          style={{ background: 'radial-gradient(circle, #2EA83A, transparent)', bottom: '0%', right: '0%' }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold-500" />
              <span className="section-label">Opportunity</span>
            </div>
            <h2 className="section-title mb-6">
              Youth Employment & <span className="gradient-text">Entrepreneurship</span>
            </h2>
            <p className="font-body text-white/60 leading-relaxed text-lg mb-8">
              Africa has the youngest population in the world. PAYNA turns this demographic advantage into agricultural enterprise by equipping young people with the skills, networks, and capital to build businesses that feed and sustain the continent.
            </p>
            <div className="glass-card p-6 border-l-4" style={{ borderColor: '#D4A017' }}>
              <blockquote className="font-display text-xl italic text-white/80 leading-relaxed">
                "We don't just create job seekers — we create job creators who feed Africa."
              </blockquote>
              <div className="mt-4 font-body text-sm text-gold-400">— PAYNA Continental Secretariat</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 tilt-card reveal group"
                style={{ transitionDelay: `${i * 0.1}s` }}
                whileHover={{ scale: 1.03, borderColor: 'rgba(212,160,23,0.4)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform" style={{ background: 'rgba(212,160,23,0.1)' }}>
                  {pillar.icon}
                </div>
                <h3 className="font-heading font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">{pillar.title}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
