import React from 'react'
import { motion } from 'framer-motion'

export default function JoinMovement() {
  return (
    <section id="join" className="py-40 relative overflow-hidden">
      {/* Sunrise gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #021A04, #0A4010 30%, #1E5010 50%, #3D2800 75%, #1A0F00)',
        }}
      />

      {/* Golden horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background: 'radial-gradient(ellipse at bottom center, rgba(212,160,23,0.25) 0%, transparent 70%)',
        }}
      />

      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#D4A017' : '#45C453',
            opacity: 0.2,
          }}
          animate={{ y: [-20, 20, -20], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500" />
            <span className="section-label">The Time Is Now</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Africa's agricultural<br />transformation will be<br />
            <span className="gradient-text">led by its youth.</span>
          </h2>

          <p className="font-body text-white/60 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            This is your moment. Your continent. Your legacy. Join the continental movement that is reshaping how Africa feeds itself and the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <motion.button
              className="btn-primary text-base py-5 px-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              animate={{ boxShadow: ['0 0 20px rgba(212,160,23,0.4)', '0 0 40px rgba(212,160,23,0.7)', '0 0 20px rgba(212,160,23,0.4)'] }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
            >
              Become a Member
            </motion.button>
            <motion.button
              className="btn-secondary text-base py-5 px-10"
              whileHover={{ scale: 1.05 }}
            >
              Partner With Us
            </motion.button>
            <motion.button
              className="btn-secondary text-base py-5 px-10"
              whileHover={{ scale: 1.05 }}
              style={{ borderColor: 'rgba(46,168,58,0.4)', color: '#45C453' }}
            >
              Invest in Youth Agri
            </motion.button>
          </div>

          {/* Newsletter */}
          <div className="glass-card p-8 max-w-xl mx-auto">
            <h3 className="font-heading font-bold text-white mb-2">Stay Connected</h3>
            <p className="font-body text-sm text-white/50 mb-6">Get updates on programs, events, and opportunities across the continent.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded font-body text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <button className="btn-primary py-3 px-6 text-sm">Subscribe</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
