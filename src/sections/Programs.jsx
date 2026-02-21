import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const programs = [
  {
    id: 'incubation',
    icon: '🚀',
    title: 'Youth Agribusiness Incubation Program',
    subtitle: 'From Idea to Enterprise',
    color: '#4CAF72',
    description: 'A comprehensive 6-month intensive program that transforms promising agribusiness ideas into viable, scalable enterprises. Participants receive mentorship from leading industry veterans, access to seed funding, market connections, and business development support.',
    features: ['6-month intensive cohorts', 'Seed funding access', 'Industry mentors', 'Market linkages', 'Legal & compliance support'],
    tag: 'Flagship',
  },
  {
    id: 'value-chain',
    icon: '⛓️',
    title: 'Value Chain Acceleration Initiative',
    subtitle: 'Scaling Existing Businesses',
    color: '#C9A84C',
    description: 'For agricultural enterprises ready to scale. We provide technical assistance, off-take agreements, export market access, and institutional investment readiness support to accelerate growth across the full value chain.',
    features: ['Off-take agreements', 'Export market access', 'Investment readiness', 'Technical assistance', 'Cross-border trade'],
    tag: 'Growth',
  },
  {
    id: 'cooperative',
    icon: '🤝',
    title: 'Cooperative Strengthening Program',
    subtitle: 'Collective Agricultural Power',
    color: '#2D8B47',
    description: 'Building and strengthening youth-led agricultural cooperatives across Africa. We provide governance frameworks, financial literacy, collective bargaining training, and shared infrastructure models to maximize collective impact.',
    features: ['Governance frameworks', 'Financial literacy', 'Collective bargaining', 'Shared infrastructure', 'Digital cooperative tools'],
    tag: 'Community',
  },
  {
    id: 'digital',
    icon: '📱',
    title: 'Digital Agriculture & Market Access Platform',
    subtitle: 'Technology-Enabled Farming',
    color: '#F0C96B',
    description: 'A continental digital platform connecting youth farmers to markets, inputs, finance, and knowledge. Features AI-powered crop advisory, real-time market prices, digital finance integration, and e-commerce for agricultural commodities.',
    features: ['AI crop advisory', 'Real-time market prices', 'Digital finance', 'E-commerce platform', 'Weather intelligence'],
    tag: 'Tech',
  },
  {
    id: 'climate',
    icon: '🌱',
    title: 'Climate-Smart Agriculture Initiative',
    subtitle: 'Farming for the Future',
    color: '#6B3F23',
    description: 'Equipping African youth farmers with climate adaptation technologies, regenerative practices, and access to climate finance. Building resilient food systems that thrive in the face of climate change.',
    features: ['Regenerative practices', 'Climate finance access', 'Irrigation systems', 'Renewable energy', 'Carbon credits'],
    tag: 'Climate',
  },
]

function ProgramCard({ program, index, visible }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative group cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div
        className="rounded-2xl p-8 h-full transition-all duration-500 relative overflow-hidden"
        style={{
          background: expanded
            ? `linear-gradient(135deg, ${program.color}20 0%, rgba(20,20,20,0.95) 100%)`
            : 'rgba(255,255,255,0.03)',
          border: `1px solid ${expanded ? program.color + '40' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: expanded ? `0 20px 60px ${program.color}20` : 'none',
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at top left, ${program.color}10, transparent 60%)` }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block"
                style={{ background: `${program.color}20`, color: program.color, border: `1px solid ${program.color}30` }}>
                {program.tag}
              </span>
              <div className="text-3xl mt-2 mb-3">{program.icon}</div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 45 : 0 }}
              className="w-8 h-8 rounded-full glass flex items-center justify-center text-payna-beige/40 flex-shrink-0"
            >
              +
            </motion.div>
          </div>

          <h3 className="text-white text-xl font-bold mb-1 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            {program.title}
          </h3>
          <p className="text-xs tracking-wider uppercase mb-4" style={{ color: program.color }}>
            {program.subtitle}
          </p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-payna-beige/70 text-sm leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="space-y-2">
                  {program.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-payna-beige/60">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: program.color }} />
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  className="mt-6 btn-glass text-sm py-2 w-full justify-center"
                  style={{ borderColor: `${program.color}40`, color: program.color }}
                >
                  Learn More →
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {!expanded && (
            <p className="text-payna-beige/50 text-sm line-clamp-2">
              {program.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Programs() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="programs" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none african-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            className="section-label"
          >
            Key Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-white mt-3"
          >
            Transformational{' '}
            <span className="text-gradient-gold">Initiatives</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-payna-beige/60 max-w-xl mx-auto mt-4"
          >
            Click any program to explore details. Each initiative is designed to unlock Africa's agricultural potential at scale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
