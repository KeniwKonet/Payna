import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Trade routes: [from, to] as percentage positions on Africa map
const tradeRoutes = [
  { from: [52, 25], to: [42, 60], color: '#D4A017' },
  { from: [30, 45], to: [55, 70], color: '#2EA83A' },
  { from: [60, 50], to: [35, 30], color: '#F5D78A' },
  { from: [48, 72], to: [25, 50], color: '#45C453' },
  { from: [70, 35], to: [50, 65], color: '#D4A017' },
  { from: [38, 20], to: [65, 55], color: '#E8C14A' },
]

const regions = [
  { name: 'North Africa', x: 47, y: 18, color: '#D4A017' },
  { name: 'West Africa', x: 28, y: 42, color: '#2EA83A' },
  { name: 'East Africa', x: 65, y: 48, color: '#F5D78A' },
  { name: 'Central Africa', x: 50, y: 55, color: '#45C453' },
  { name: 'Southern Africa', x: 52, y: 75, color: '#E8C14A' },
]

export default function MarketTrade() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Map */}
          <div className="reveal order-2 lg:order-1">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Africa SVG map background */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20">
                <path
                  d="M50,5 C38,5 28,10 22,20 C16,18 10,22 8,30 C3,34 2,42 5,50 C2,57 3,65 8,72 C12,82 22,90 32,95 C38,98 44,100 50,100 C56,100 62,98 68,95 C78,90 88,82 92,72 C97,65 98,57 95,50 C98,42 97,34 92,30 C90,22 84,18 78,20 C72,10 62,5 50,5Z"
                  fill="#2EA83A"
                  stroke="#45C453"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Animated trade route lines */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                {tradeRoutes.map((route, i) => (
                  <g key={i}>
                    <line
                      x1={route.from[0]} y1={route.from[1]}
                      x2={route.to[0]} y2={route.to[1]}
                      stroke={route.color}
                      strokeWidth="0.4"
                      strokeOpacity="0.3"
                      strokeDasharray="2,2"
                    />
                    <motion.circle
                      r="0.8"
                      fill={route.color}
                      animate={{
                        cx: [route.from[0], route.to[0]],
                        cy: [route.from[1], route.to[1]],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'linear',
                      }}
                    />
                  </g>
                ))}

                {/* Region dots */}
                {regions.map((region, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={region.x} cy={region.y} r="2.5"
                      fill={region.color}
                      fillOpacity="0.6"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                    <motion.circle
                      cx={region.x} cy={region.y} r="4"
                      fill="none"
                      stroke={region.color}
                      strokeWidth="0.3"
                      animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </g>
                ))}
              </svg>

              {/* Region labels overlay */}
              {regions.map((region, i) => (
                <div
                  key={i}
                  className="absolute font-heading text-xs font-bold"
                  style={{
                    left: `${region.x}%`,
                    top: `${region.y}%`,
                    color: region.color,
                    transform: 'translate(-50%, -200%)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {region.name}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold-500" />
              <span className="section-label">Trade & Markets</span>
            </div>
            <h2 className="section-title mb-6">
              Market & <span className="gradient-text">Trade Expansion</span>
            </h2>
            <p className="font-body text-white/60 leading-relaxed text-lg mb-8">
              Africa's agricultural products belong in Africa's markets — and in global ones. PAYNA builds the bridges that connect youth-grown produce to buyers across the continent and around the world.
            </p>

            {[
              { title: 'AfCFTA Integration', desc: 'Leveraging the African Continental Free Trade Area to open 54-nation markets' },
              { title: 'Digital Market Platforms', desc: 'Online commodity exchanges, buyer-seller matchmaking, and agri-finance tools' },
              { title: 'Export Corridor Development', desc: 'Building trade corridors connecting agricultural zones to port cities and airports' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4 mb-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-gold-400 font-heading font-bold text-sm" style={{ background: 'rgba(212,160,23,0.1)' }}>
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
