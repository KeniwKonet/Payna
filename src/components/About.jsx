import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const pillars = [
    { icon: '🌱', title: 'Youth-Led', desc: 'Founded by youth for youth across all 54 African nations' },
    { icon: '🌍', title: 'Continental Scope', desc: 'Aligned with African Union and Continental development goals' },
    { icon: '💡', title: 'Innovation-Driven', desc: 'Agriculture beyond farming — enterprise, agritech, and global trade' },
    { icon: '🤝', title: 'Collaborative', desc: 'Building networks, cooperatives, and shared market access' },
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left content */}
          <div>
            <div className="reveal">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold-500" />
                <span className="section-label">Who We Are</span>
              </div>
              <h2 className="section-title mb-8">
                A Continental <span className="gradient-text">Movement,</span> Not Just an Organization
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-6 text-lg">
                PAYNA is where Africa's agricultural future is being built — by the very generation that will inherit it. We are a youth-powered network transforming how Africa produces, processes, and profits from its most abundant resource.
              </p>
              <p className="font-body text-white/50 leading-relaxed mb-10">
                From smallholder cooperatives in rural Kenya to agritech startups in Lagos, from irrigation projects in Mali to export corridors in Southern Africa — we are the connective tissue of a new agricultural Africa.
              </p>
              <button className="btn-secondary">
                Our Story →
              </button>
            </div>
          </div>

          {/* Right: animated cards */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 tilt-card reveal"
                style={{ animationDelay: `${i * 0.15}s` }}
                whileHover={{
                  rotateX: -5,
                  rotateY: 5,
                  scale: 1.02,
                  borderColor: 'rgba(212,160,23,0.4)',
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl mb-4">{pillar.icon}</div>
                <h3 className="font-heading font-bold text-white mb-2">{pillar.title}</h3>
                <p className="font-body text-sm text-white/50 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-24 flex items-center gap-6 reveal">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
          <span className="font-heading text-xs tracking-widest text-gold-500/50 uppercase">Aligned with AU Agenda 2063</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
