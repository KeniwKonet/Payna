import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  { icon: '🌱', title: 'Enterprise First', desc: 'Agriculture as business, not subsistence' },
  { icon: '💡', title: 'Innovation-Driven', desc: 'Technology at the heart of farming' },
  { icon: '🌍', title: 'Continental Scale', desc: 'Building Pan-African value chains' },
  { icon: '👥', title: 'Youth Led', desc: "Founded by youth, for Africa's future" },
]

export default function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="about" className="relative py-32 overflow-hidden african-pattern" ref={ref}>
      {/* Subtle BG decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1A5C2A, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-px bg-payna-gold opacity-60" />
          <span className="section-label">About PAYNA</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-title text-white mb-6"
            >
              Agriculture{' '}
              <span className="text-gradient-gold">Beyond</span>{' '}
              Farming
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-payna-beige/70 text-lg leading-relaxed mb-6"
            >
              PAYNA is a youth-led continental platform uniting young agricultural entrepreneurs, 
              innovators, and professionals across all 54 African nations. We believe Africa's 
              agricultural transformation must be led by its most dynamic resource — its youth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-payna-beige/70 text-lg leading-relaxed mb-10"
            >
              Aligned with the African Continental development framework, AU Agenda 2063, and the 
              Comprehensive Africa Agriculture Development Programme (CAADP), PAYNA builds enterprise, 
              innovation, and trade across the full agricultural value chain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Discover Our Programs
              </button>
            </motion.div>
          </div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass rounded-2xl p-6 group cursor-default"
                style={{ border: '1px solid rgba(201,168,76,0.08)' }}
                data-cursor="hover"
              >
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-payna-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-payna-beige/50 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
