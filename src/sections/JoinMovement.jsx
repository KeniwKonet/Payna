import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function JoinMovement() {
  const { ref, visible } = useScrollReveal(0.1)

  return (
    <section id="join" className="relative py-40 overflow-hidden" ref={ref}>
      {/* Animated golden sunrise background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 120%, rgba(201,168,76,0.35) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, rgba(26,92,42,0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 80%, rgba(61,43,31,0.3) 0%, transparent 50%),
              linear-gradient(to bottom, #0D0D0D 0%, #0D1A0F 50%, #0D0D0D 100%)
            `,
          }}
        />

        {/* Horizon glow */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: 'linear-gradient(to top, rgba(201,168,76,0.15), transparent)',
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Rising sun */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-48 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at bottom, rgba(240,201,107,0.2), transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: '3px',
            height: '3px',
            left: `${Math.random() * 100}%`,
            top: `${30 + Math.random() * 60}%`,
            background: i % 2 === 0 ? '#C9A84C' : '#4CAF72',
            opacity: 0.6,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            delay: Math.random() * -5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-16 h-px opacity-40" style={{ background: 'linear-gradient(to right, transparent, #C9A84C)' }} />
          <span className="section-label">Join the Continental Movement</span>
          <span className="w-16 h-px opacity-40" style={{ background: 'linear-gradient(to left, transparent, #C9A84C)' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Africa's Agricultural{' '}
          <span className="text-gradient-gold">Transformation</span>{' '}
          Will Be Led By Its Youth.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-payna-beige/60 text-xl mb-14 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you're a young farmer, agripreneur, investor, or institution — 
          the continent needs you at this table.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 12px 50px rgba(201,168,76,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-base px-10 py-5"
          >
            <span className="text-lg">🌱</span>
            Become a Member
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glass text-base px-10 py-5"
          >
            <span className="text-lg">🤝</span>
            Partner With Us
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glass text-base px-10 py-5"
            style={{ borderColor: 'rgba(76,175,114,0.4)', color: '#4CAF72' }}
          >
            <span className="text-lg">📈</span>
            Invest in Youth Agriculture
          </motion.button>
        </motion.div>

        {/* Membership tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: '🧑‍🌾', title: 'Youth Member', desc: 'Individual farmers & entrepreneurs aged 18–35', free: true },
            { icon: '🏢', title: 'Enterprise Partner', desc: 'Agricultural businesses & cooperatives', free: false },
            { icon: '🏛️', title: 'Institutional Ally', desc: 'NGOs, DFIs, governments & academia', free: false },
          ].map((tier, i) => (
            <div
              key={i}
              className="glass rounded-xl p-5 text-center hover:scale-[1.02] transition-transform cursor-default"
              style={{ border: '1px solid rgba(201,168,76,0.1)' }}
            >
              <div className="text-2xl mb-2">{tier.icon}</div>
              <div className="text-white font-semibold text-sm mb-1">{tier.title}</div>
              <div className="text-payna-beige/40 text-xs mb-3">{tier.desc}</div>
              {tier.free && (
                <span className="text-xs px-3 py-1 rounded-full bg-payna-green/20 text-payna-green-bright border border-payna-green/20">
                  Free to join
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
