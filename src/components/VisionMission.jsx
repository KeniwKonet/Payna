import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function VisionMission() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth-900/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold-500" />
            <span className="section-label">Our Direction</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="section-title">Vision & Mission</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-1">
          {/* Vision */}
          <motion.div
            className="relative p-12 overflow-hidden cursor-pointer reveal"
            onHoverStart={() => setHovered('vision')}
            onHoverEnd={() => setHovered(null)}
            animate={{
              scale: hovered === 'vision' ? 1.02 : 1,
              zIndex: hovered === 'vision' ? 10 : 1,
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: hovered === 'vision'
                ? 'linear-gradient(135deg, rgba(10,64,16,0.8), rgba(20,90,28,0.6))'
                : 'rgba(255,255,255,0.02)',
              border: '1px solid',
              borderColor: hovered === 'vision' ? 'rgba(212,160,23,0.4)' : 'rgba(255,255,255,0.06)',
              borderRadius: '16px 0 0 16px',
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0"
              animate={{ opacity: hovered === 'vision' ? 0.05 : 0 }}
              style={{
                background: 'radial-gradient(circle at top left, #D4A017, transparent 70%)',
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-display text-xl">✦</div>
                <span className="section-label">Vision</span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                A Transformed, Food-Secure, and Agriculturally Prosperous Africa
              </h3>
              <p className="font-body text-white/50 leading-relaxed text-lg">
                An Africa where youth are the backbone of a modern, profitable, and innovative agricultural sector — driving food sovereignty, industrial growth, and continental prosperity by 2063.
              </p>
              <motion.div
                className="mt-8 flex items-center gap-3 text-gold-400"
                animate={{ x: hovered === 'vision' ? 5 : 0 }}
              >
                <span className="font-heading text-sm tracking-wider">Explore Vision</span>
                <span>→</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="relative p-12 overflow-hidden cursor-pointer reveal"
            onHoverStart={() => setHovered('mission')}
            onHoverEnd={() => setHovered(null)}
            animate={{
              scale: hovered === 'mission' ? 1.02 : 1,
              zIndex: hovered === 'mission' ? 10 : 1,
            }}
            transition={{ duration: 0.3 }}
            style={{
              background: hovered === 'mission'
                ? 'linear-gradient(135deg, rgba(26,15,0,0.8), rgba(61,40,0,0.6))'
                : 'rgba(255,255,255,0.02)',
              border: '1px solid',
              borderColor: hovered === 'mission' ? 'rgba(212,160,23,0.4)' : 'rgba(255,255,255,0.06)',
              borderRadius: '0 16px 16px 0',
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0"
              animate={{ opacity: hovered === 'mission' ? 0.05 : 0 }}
              style={{
                background: 'radial-gradient(circle at bottom right, #D4A017, transparent 70%)',
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-forest-500/20 flex items-center justify-center text-forest-300 font-display text-xl">◆</div>
                <span className="section-label" style={{ color: '#45C453' }}>Mission</span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Empowering Youth to Lead Africa's Agricultural Revolution
              </h3>
              <p className="font-body text-white/50 leading-relaxed text-lg">
                To mobilize, train, connect, and empower African youth to build and lead profitable agricultural enterprises, cooperatives, and agribusinesses across the entire value chain — from farm to global market.
              </p>
              <motion.div
                className="mt-8 flex items-center gap-3 text-forest-300"
                animate={{ x: hovered === 'mission' ? 5 : 0 }}
              >
                <span className="font-heading text-sm tracking-wider">Explore Mission</span>
                <span>→</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
