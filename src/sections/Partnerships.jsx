import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const partners = [
  { name: 'African Union', abbr: 'AU', color: '#4CAF72' },
  { name: 'CAADP', abbr: 'CAADP', color: '#C9A84C' },
  { name: 'AfCFTA', abbr: 'AfCFTA', color: '#2D8B47' },
  { name: 'AGRA', abbr: 'AGRA', color: '#F0C96B' },
  { name: 'IFAD', abbr: 'IFAD', color: '#6B3F23' },
  { name: 'UN FAO', abbr: 'FAO', color: '#4CAF72' },
  { name: 'AfDB', abbr: 'AfDB', color: '#C9A84C' },
  { name: 'IFC', abbr: 'IFC', color: '#2D8B47' },
]

export default function Partnerships() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="partnerships" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            className="section-label"
          >
            Strategic Partnerships
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-white mt-3"
          >
            Aligned With{' '}
            <span className="text-gradient-gold">Continental Power</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="group glass rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-default transition-all duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.04)' }}
              data-cursor="hover"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                style={{
                  background: `${partner.color}15`,
                  border: `1px solid ${partner.color}30`,
                  color: 'rgba(255,255,255,0.3)',
                }}
              >
                <span className="group-hover:hidden">{partner.abbr.charAt(0)}</span>
                <span className="hidden group-hover:block text-xs" style={{ color: partner.color }}>{partner.abbr}</span>
              </div>
              <span className="text-xs text-center text-payna-beige/30 group-hover:text-payna-beige/80 transition-colors duration-300">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-payna-beige/40 text-sm mt-8"
        >
          * Partnerships in development. PAYNA actively seeks collaboration with continental and global institutions.
        </motion.p>
      </div>
    </section>
  )
}
