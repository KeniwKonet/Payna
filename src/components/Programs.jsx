import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const programs = [
  {
    id: 1,
    icon: '🌱',
    title: 'Youth Agribusiness Incubation Program',
    short: 'YAIP',
    color: '#2EA83A',
    desc: 'A 12-month intensive incubation program providing African youth with the tools, mentorship, and capital access to launch successful agribusiness ventures. From ideation to market.',
    features: ['Business model development', 'Mentorship from experts', 'Seed grant access', 'Market linkages', 'Peer cohort network'],
    impact: '500 startups annually',
  },
  {
    id: 2,
    icon: '⛓️',
    title: 'Value Chain Acceleration Initiative',
    short: 'VCAI',
    color: '#D4A017',
    desc: 'A targeted intervention program that identifies value chain gaps and connects youth enterprises to fill them — turning agricultural commodities into manufactured, packaged, and exported goods.',
    features: ['Value chain mapping', 'Enterprise matching', 'Processing support', 'Export facilitation', 'Quality certification'],
    impact: '200 value chain positions filled',
  },
  {
    id: 3,
    icon: '🤝',
    title: 'Cooperative Strengthening Program',
    short: 'CSP',
    color: '#45C453',
    desc: 'Building and strengthening agricultural cooperatives with governance training, financial management, collective marketing strategies, and infrastructure development support.',
    features: ['Governance training', 'Financial management', 'Collective marketing', 'Infrastructure grants', 'Legal support'],
    impact: '500 cooperatives strengthened',
  },
  {
    id: 4,
    icon: '📱',
    title: 'Digital Agriculture & Market Access Platform',
    short: 'DAMAP',
    color: '#F5D78A',
    desc: 'A continental digital platform connecting farmers, processors, buyers, and logistics providers. Real-time commodity pricing, digital contracts, and fintech-powered agri-payments.',
    features: ['Commodity exchange', 'Digital contracts', 'Agri-fintech', 'Logistics marketplace', 'Market intelligence'],
    impact: '1M+ transactions facilitated',
  },
  {
    id: 5,
    icon: '🌍',
    title: 'Climate-Smart Agriculture Initiative',
    short: 'CSAI',
    color: '#E8C14A',
    desc: 'Preparing African youth farmers for climate change through training in regenerative practices, access to drought-resistant seeds, solar irrigation, and climate risk insurance products.',
    features: ['Climate training', 'Resilient seeds', 'Solar irrigation', 'Weather data tools', 'Risk insurance'],
    impact: '100,000 climate-resilient farms',
  },
]

export default function Programs() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="impact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold-500" />
            <span className="section-label">Flagship Initiatives</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="section-title mb-6">Key <span className="gradient-text">Programs</span></h2>
        </div>

        <div className="space-y-4">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.id}
              className="glass-card overflow-hidden reveal cursor-pointer"
              onClick={() => setExpanded(expanded === prog.id ? null : prog.id)}
              whileHover={{ borderColor: `${prog.color}40` }}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="p-6 flex items-center gap-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: `${prog.color}15` }}>
                  {prog.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-heading text-xs font-bold tracking-widest uppercase" style={{ color: prog.color }}>{prog.short}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg">{prog.title}</h3>
                  <p className="font-body text-sm text-white/40 mt-1 hidden sm:block">{prog.impact}</p>
                </div>
                <motion.div
                  animate={{ rotate: expanded === prog.id ? 45 : 0 }}
                  className="text-white/30 text-2xl flex-shrink-0"
                >
                  +
                </motion.div>
              </div>

              <AnimatePresence>
                {expanded === prog.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="px-6 pb-6 pt-0 grid md:grid-cols-2 gap-8 border-t border-white/5 mt-0">
                      <div className="pt-6">
                        <p className="font-body text-white/60 leading-relaxed">{prog.desc}</p>
                        <div className="mt-4 flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full" style={{ background: prog.color }} />
                          <span className="font-heading text-sm font-bold text-white/80">Target Impact: {prog.impact}</span>
                        </div>
                      </div>
                      <div className="pt-6">
                        <h4 className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: prog.color }}>Program Features</h4>
                        <ul className="space-y-2">
                          {prog.features.map((feat, j) => (
                            <li key={j} className="flex items-center gap-3 font-body text-sm text-white/60">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: prog.color }} />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
