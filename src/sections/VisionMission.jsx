import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function VisionMission() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="vision-mission" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label">Our Direction</span>
          <h2 className="section-title text-white mt-3">Where We're Going</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative group rounded-3xl p-10 overflow-hidden cursor-default"
            style={{
              background: 'linear-gradient(135deg, rgba(26,92,42,0.3) 0%, rgba(13,13,13,0.8) 100%)',
              border: '1px solid rgba(26,92,42,0.3)',
            }}
            data-cursor="hover"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: 'inset 0 0 60px rgba(26,92,42,0.2)' }} />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-payna-green/20 border border-payna-green/30 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-payna-green-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="section-label text-payna-green-bright mb-4">Vision</div>
              <p className="text-white text-xl md:text-2xl font-medium leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                "A prosperous, food-secure Africa where youth drive a thriving, innovative, and sustainable agricultural economy across the continent."
              </p>
            </div>

            {/* Corner decoration */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
              style={{ background: 'radial-gradient(circle at bottom right, #4CAF72, transparent)' }} />
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.02 }}
            className="relative group rounded-3xl p-10 overflow-hidden cursor-default"
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(13,13,13,0.8) 100%)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
            data-cursor="hover"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ boxShadow: 'inset 0 0 60px rgba(201,168,76,0.1)' }} />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-payna-gold/10 border border-payna-gold/20 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-payna-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="section-label mb-4">Mission</div>
              <p className="text-white text-xl md:text-2xl font-medium leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
                "To mobilize, connect, and empower African youth to build profitable, innovation-driven agricultural enterprises and cooperative movements across the continent."
              </p>
            </div>

            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
              style={{ background: 'radial-gradient(circle at bottom right, #C9A84C, transparent)' }} />
          </motion.div>
        </div>

        {/* Core values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['Innovation', 'Solidarity', 'Enterprise', 'Sustainability', 'Pan-Africanism', 'Excellence', 'Inclusion'].map((v) => (
            <span key={v} className="glass-gold px-5 py-2 rounded-full text-sm text-payna-gold/80 tracking-wide">
              {v}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
