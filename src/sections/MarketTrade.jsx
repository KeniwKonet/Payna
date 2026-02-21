import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const tradeRoutes = [
  { from: [215, 340], to: [450, 330], color: '#C9A84C', label: 'W-E Corridor' },
  { from: [360, 390], to: [380, 530], color: '#4CAF72', label: 'C-S Corridor' },
  { from: [310, 180], to: [215, 340], color: '#F0C96B', label: 'N-W Corridor' },
  { from: [450, 330], to: [380, 530], color: '#2D8B47', label: 'E-S Corridor' },
]

export default function MarketTrade() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="trade" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              className="section-label"
            >
              Market & Trade Expansion
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title text-white mt-3 mb-6"
            >
              Connecting Africa's{' '}
              <span className="text-gradient-gold">Markets</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-payna-beige/70 text-lg leading-relaxed mb-8"
            >
              The African Continental Free Trade Area represents a $3.4 trillion opportunity. 
              PAYNA youth enterprises are positioned to be the primary beneficiaries through 
              structured market linkage, export facilitation, and intra-African trade corridors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { label: 'AfCFTA Integration', desc: 'Leveraging the continental free trade framework' },
                { label: 'Digital Trade Platforms', desc: 'B2B agri-commodity marketplace for youth enterprises' },
                { label: 'Export Finance', desc: 'Trade finance facilities for cross-border transactions' },
                { label: 'Standards Compliance', desc: 'Quality certification support for global markets' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-payna-gold mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold text-sm">{item.label}</span>
                    <span className="text-payna-beige/50 text-sm"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Trade route SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <svg viewBox="0 0 600 700" className="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Africa shape */}
              <path
                d="M220,60 L280,50 L340,60 L390,80 L430,110 L460,150 L480,200 L490,260 L480,320 L460,380 L440,430 L420,470 L400,520 L390,560 L380,590 L370,610 L360,620 L340,610 L320,590 L300,560 L270,520 L240,480 L210,440 L180,390 L160,340 L150,290 L145,240 L150,190 L160,150 L180,110 L200,80 Z"
                fill="rgba(26,92,42,0.1)"
                stroke="rgba(201,168,76,0.2)"
                strokeWidth="1.5"
              />

              {/* Trade routes with animation */}
              {tradeRoutes.map((route, i) => {
                const [x1, y1] = route.from
                const [x2, y2] = route.to
                const length = Math.sqrt((x2-x1)**2 + (y2-y1)**2)
                return (
                  <g key={i}>
                    <line
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={route.color}
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from={length}
                        to={-length}
                        dur={`${3 + i * 0.8}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                    {/* Glowing dot moving along the route */}
                    <circle r="4" fill={route.color} opacity="0.9">
                      <animateMotion
                        dur={`${3 + i * 0.8}s`}
                        repeatCount="indefinite"
                        path={`M${x1},${y1} L${x2},${y2}`}
                      />
                    </circle>
                  </g>
                )
              })}

              {/* Region nodes */}
              {[
                { x: 215, y: 340, label: 'West', color: '#4CAF72' },
                { x: 450, y: 330, label: 'East', color: '#C9A84C' },
                { x: 360, y: 390, label: 'Central', color: '#F0C96B' },
                { x: 310, y: 180, label: 'North', color: '#8B6914' },
                { x: 380, y: 530, label: 'South', color: '#2D8B47' },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.x} cy={node.y} r="8" fill={node.color} opacity="0.8">
                    <animate attributeName="r" values="8;12;8" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
                  </circle>
                  <circle cx={node.x} cy={node.y} r="5" fill={node.color}/>
                  <text x={node.x} y={node.y + 22} textAnchor="middle" fill={node.color} fontSize="11" opacity="0.8">
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {tradeRoutes.map((route) => (
                <div key={route.label} className="flex items-center gap-2">
                  <div className="w-6 h-px" style={{ background: route.color }} />
                  <span className="text-xs text-payna-beige/50">{route.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
