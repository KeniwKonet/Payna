import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const valueChain = [
  {
    id: 'production',
    label: 'Production',
    icon: '🌾',
    color: '#2EA83A',
    title: 'Agro-Production',
    desc: 'Supporting smallholder and commercial farmers with climate-smart practices, precision agriculture tools, and input access programs. We connect youth with land, seeds, and training.',
    programs: ['Farmer training', 'Input access', 'Precision agriculture', 'Climate adaptation'],
  },
  {
    id: 'processing',
    label: 'Processing',
    icon: '⚙️',
    color: '#D4A017',
    title: 'Agro-Processing',
    desc: 'Building agro-industrial capacity for value addition. From milling to packaging, we help youth establish processing enterprises that multiply commodity value by 3–10x.',
    programs: ['Processing equipment', 'Quality standards', 'Value addition training', 'Enterprise setup'],
  },
  {
    id: 'packaging',
    label: 'Packaging',
    icon: '📦',
    color: '#E8C14A',
    title: 'Packaging & Branding',
    desc: 'Transforming raw agricultural products into market-ready branded goods. Design, compliance, and retail-ready packaging solutions for African and export markets.',
    programs: ['Brand development', 'Packaging design', 'Export compliance', 'Label standards'],
  },
  {
    id: 'storage',
    label: 'Storage',
    icon: '🏭',
    color: '#45C453',
    title: 'Cold Chain & Storage',
    desc: 'Reducing post-harvest losses through modern storage infrastructure, cooperative warehouses, and cold chain technology access for perishable agricultural commodities.',
    programs: ['Warehouse co-ops', 'Cold storage', 'Post-harvest tech', 'Loss reduction'],
  },
  {
    id: 'logistics',
    label: 'Logistics',
    icon: '🚛',
    color: '#F5D78A',
    title: 'Agri-Logistics',
    desc: 'Building last-mile and inter-continental logistics networks. Digital freight platforms, aggregation hubs, and road/rail/port connectivity solutions for African agri-trade.',
    programs: ['Digital freight', 'Aggregation hubs', 'Transport networks', 'Supply chain tech'],
  },
  {
    id: 'export',
    label: 'Export',
    icon: '✈️',
    color: '#D4A017',
    title: 'Export & Global Markets',
    desc: 'Connecting African agricultural products to global markets. Trade facilitation, phytosanitary compliance, AfCFTA optimization, and buyer-seller matchmaking across continents.',
    programs: ['Trade facilitation', 'Market linkages', 'AfCFTA access', 'Export compliance'],
  },
]

export default function WhatWeDo() {
  const [active, setActive] = useState(null)

  return (
    <section id="programs" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, transparent, rgba(26,15,0,0.3) 50%, transparent)',
      }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold-500" />
            <span className="section-label">The Value Chain</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="section-title mb-6">What We Do</h2>
          <p className="font-body text-white/50 text-lg max-w-2xl mx-auto">
            We operate across the entire agricultural value chain — turning every link into a youth-powered enterprise opportunity.
          </p>
        </div>

        {/* Value chain visualization */}
        <div className="reveal">
          <div className="flex flex-col lg:flex-row items-stretch gap-1 mb-8">
            {valueChain.map((node, i) => (
              <React.Fragment key={node.id}>
                <motion.button
                  className="flex-1 relative p-6 rounded-xl text-left overflow-hidden group"
                  onClick={() => setActive(active === node.id ? null : node.id)}
                  style={{
                    background: active === node.id
                      ? `linear-gradient(135deg, ${node.color}20, ${node.color}10)`
                      : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${active === node.id ? node.color + '50' : 'rgba(255,255,255,0.06)'}`,
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl mb-3">{node.icon}</div>
                  <div className="font-heading font-bold text-white text-sm">{node.label}</div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: node.color }}
                    animate={{ scaleX: active === node.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {i < valueChain.length - 1 && (
                  <div className="hidden lg:flex items-center text-gold-500/30 text-xl font-bold px-1">→</div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Detail panel */}
          <AnimatePresence>
            {active && (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8"
              >
                {valueChain.filter(n => n.id === active).map(node => (
                  <div key={node.id} className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl">{node.icon}</span>
                        <div>
                          <h3 className="font-display text-2xl font-bold text-white">{node.title}</h3>
                          <div className="w-12 h-0.5 mt-1" style={{ background: node.color }} />
                        </div>
                      </div>
                      <p className="font-body text-white/60 leading-relaxed text-lg">{node.desc}</p>
                    </div>
                    <div>
                      <h4 className="font-heading text-xs tracking-widest uppercase mb-4" style={{ color: node.color }}>
                        Focus Programs
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {node.programs.map((prog, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: node.color }} />
                            <span className="font-body text-sm text-white/60">{prog}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {!active && (
            <p className="text-center font-heading text-xs tracking-widest text-white/30 uppercase mt-4">
              ↑ Click any node to explore
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
