import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const chainNodes = [
  {
    id: 'production',
    icon: '🌾',
    label: 'Production',
    color: '#4CAF72',
    description: 'Climate-smart primary production using precision agriculture, IoT sensors, and regenerative practices to maximize yield and sustainability.',
    focuses: ['Precision farming', 'Irrigation tech', 'Seed innovation', 'Soil health'],
  },
  {
    id: 'processing',
    icon: '⚙️',
    label: 'Processing',
    color: '#C9A84C',
    description: 'Agro-industrial transformation turning raw agricultural commodities into high-value processed products for domestic and export markets.',
    focuses: ['Agro-industries', 'Quality control', 'Manufacturing', 'Value addition'],
  },
  {
    id: 'packaging',
    icon: '📦',
    label: 'Packaging',
    color: '#8B6914',
    description: 'Modern packaging solutions meeting international standards to extend shelf life, reduce waste, and enhance product appeal for global markets.',
    focuses: ['Eco packaging', 'Branding', 'Standards compliance', 'Export-ready'],
  },
  {
    id: 'storage',
    icon: '🏪',
    label: 'Storage',
    color: '#2D8B47',
    description: 'Cold chain infrastructure and modern warehousing to minimize post-harvest losses which cost Africa billions annually.',
    focuses: ['Cold chain', 'Warehousing', 'Loss reduction', 'Digital inventory'],
  },
  {
    id: 'logistics',
    icon: '🚛',
    label: 'Logistics',
    color: '#6B3F23',
    description: 'Integrated transport and logistics networks connecting producers to markets efficiently through tech-enabled supply chain management.',
    focuses: ['Transport', 'Supply chain', 'Fleet management', 'Last-mile delivery'],
  },
  {
    id: 'export',
    icon: '✈️',
    label: 'Export',
    color: '#C9A84C',
    description: 'Connecting African youth enterprises to continental and global markets through trade facilitation, AfCFTA alignment, and export finance.',
    focuses: ['AfCFTA', 'Global markets', 'Export finance', 'Trade facilitation'],
  },
]

export default function ValueChain() {
  const [activeNode, setActiveNode] = useState(null)
  const { ref, visible } = useScrollReveal()

  return (
    <section id="what-we-do" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-5"
          style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            className="section-label"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-white mt-3"
          >
            The Complete{' '}
            <span className="text-gradient-gold">Value Chain</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-payna-beige/60 max-w-xl mx-auto mt-4"
          >
            Click any node to explore PAYNA's focus areas across the agricultural value chain
          </motion.p>
        </div>

        {/* Chain visualization */}
        <div className="relative overflow-x-auto pb-8">
          <div className="flex items-center justify-start md:justify-center gap-0 min-w-max md:min-w-0 mx-auto px-4">
            {chainNodes.map((node, i) => (
              <div key={node.id} className="flex items-center">
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
                  whileHover={{ scale: 1.08, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 w-28 ${
                    activeNode?.id === node.id ? 'glass-gold' : 'hover:glass'
                  }`}
                  style={{
                    border: activeNode?.id === node.id
                      ? `1px solid ${node.color}40`
                      : '1px solid transparent',
                    boxShadow: activeNode?.id === node.id ? `0 0 30px ${node.color}30` : 'none',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${node.color}20, ${node.color}10)`,
                      border: `1px solid ${node.color}30`,
                    }}
                  >
                    {node.icon}
                  </div>
                  <span className="text-xs font-semibold text-center text-payna-beige/80" style={{ color: activeNode?.id === node.id ? node.color : undefined }}>
                    {node.label}
                  </span>
                  {activeNode?.id === node.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{ background: node.color }}
                    />
                  )}
                </motion.button>

                {/* Connector */}
                {i < chainNodes.length - 1 && (
                  <div className="relative w-8 flex items-center justify-center flex-shrink-0">
                    <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.4), rgba(201,168,76,0.1))' }} />
                    <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-payna-gold opacity-60" />
                    <motion.div
                      className="absolute w-1.5 h-1.5 rounded-full bg-payna-gold"
                      animate={{ x: ['-100%', '700%'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'linear' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal panel */}
        <AnimatePresence mode="wait">
          {activeNode && (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-3xl p-8 md:p-12 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${activeNode.color}15 0%, rgba(13,13,13,0.9) 100%)`,
                border: `1px solid ${activeNode.color}30`,
              }}
            >
              <button
                onClick={() => setActiveNode(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full glass flex items-center justify-center text-payna-beige/60 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{activeNode.icon}</div>
                    <div>
                      <div className="text-xs tracking-wider uppercase opacity-60" style={{ color: activeNode.color }}>Value Chain Node</div>
                      <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {activeNode.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-payna-beige/70 text-lg leading-relaxed">
                    {activeNode.description}
                  </p>
                </div>

                <div className="md:w-64">
                  <div className="text-xs tracking-wider uppercase mb-4" style={{ color: activeNode.color }}>Focus Areas</div>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.focuses.map((f) => (
                      <span key={f} className="px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                          background: `${activeNode.color}15`,
                          border: `1px solid ${activeNode.color}30`,
                          color: activeNode.color,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
