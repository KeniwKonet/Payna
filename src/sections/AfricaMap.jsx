import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const regions = [
  {
    id: 'west',
    name: 'West Africa',
    x: 215, y: 340,
    color: '#4CAF72',
    countries: ['Nigeria', 'Ghana', 'Senegal', 'Côte d\'Ivoire', 'Mali', 'Burkina Faso'],
    focus: 'Cassava, Cocoa, Shea, Palm Oil value chains',
    members: '12 countries',
  },
  {
    id: 'east',
    name: 'East Africa',
    x: 450, y: 330,
    color: '#C9A84C',
    countries: ['Kenya', 'Ethiopia', 'Tanzania', 'Uganda', 'Rwanda'],
    focus: 'Coffee, Tea, Horticulture, Livestock',
    members: '9 countries',
  },
  {
    id: 'central',
    name: 'Central Africa',
    x: 360, y: 390,
    color: '#F0C96B',
    countries: ['DRC', 'Cameroon', 'Congo', 'CAR', 'Gabon'],
    focus: 'Tropical commodities, Timber, Cassava',
    members: '7 countries',
  },
  {
    id: 'north',
    name: 'North Africa',
    x: 310, y: 180,
    color: '#8B6914',
    countries: ['Egypt', 'Morocco', 'Algeria', 'Tunisia', 'Libya'],
    focus: 'Wheat, Citrus, Dates, Olives, Fisheries',
    members: '6 countries',
  },
  {
    id: 'south',
    name: 'Southern Africa',
    x: 380, y: 530,
    color: '#2D8B47',
    countries: ['South Africa', 'Zimbabwe', 'Zambia', 'Mozambique', 'Botswana'],
    focus: 'Maize, Wine, Minerals, Beef, Soya',
    members: '10 countries',
  },
]

// Simple Africa SVG path (simplified)
const AfricaPath = () => (
  <svg viewBox="0 0 600 700" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="continentGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(26,92,42,0.4)"/>
        <stop offset="100%" stopColor="rgba(26,92,42,0.05)"/>
      </radialGradient>
    </defs>

    {/* Africa continent shape (simplified) */}
    <path
      d="M220,60 L280,50 L340,60 L390,80 L430,110 L460,150 L480,200 L490,260 L480,320 L460,380 L440,430 L420,470 L400,520 L390,560 L380,590 L370,610 L360,620 L340,610 L320,590 L300,560 L270,520 L240,480 L210,440 L180,390 L160,340 L150,290 L145,240 L150,190 L160,150 L180,110 L200,80 Z"
      fill="url(#continentGlow)"
      stroke="rgba(201,168,76,0.25)"
      strokeWidth="1.5"
    />

    {/* Grid lines */}
    {[160, 220, 280, 340, 400, 460].map(y => (
      <line key={`h${y}`} x1="100" y1={y} x2="520" y2={y}
        stroke="rgba(201,168,76,0.04)" strokeWidth="0.5"/>
    ))}
    {[200, 260, 320, 380, 440].map(x => (
      <line key={`v${x}`} x1={x} y1="40" x2={x} y2="640"
        stroke="rgba(201,168,76,0.04)" strokeWidth="0.5"/>
    ))}

    {/* Trade route animations */}
    <line x1="215" y1="340" x2="450" y2="330" stroke="rgba(201,168,76,0.2)" strokeWidth="1" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite"/>
    </line>
    <line x1="360" y1="390" x2="450" y2="330" stroke="rgba(76,175,114,0.2)" strokeWidth="1" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite"/>
    </line>
    <line x1="310" y1="180" x2="215" y2="340" stroke="rgba(240,201,107,0.15)" strokeWidth="1" strokeDasharray="4 4">
      <animate attributeName="stroke-dashoffset" from="100" to="0" dur="5s" repeatCount="indefinite"/>
    </line>
  </svg>
)

export default function AfricaMap() {
  const [activeRegion, setActiveRegion] = useState(null)
  const { ref, visible } = useScrollReveal()

  return (
    <section id="structure" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            className="section-label"
          >
            Continental Presence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-white mt-3"
          >
            5 Regions.{' '}
            <span className="text-gradient-gold">One Africa.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[6/7] max-w-md mx-auto">
              <AfricaPath />

              {/* Region markers */}
              {regions.map((region, i) => (
                <motion.button
                  key={region.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={visible ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  onClick={() => setActiveRegion(activeRegion?.id === region.id ? null : region)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `${(region.x / 600) * 100}%`,
                    top: `${(region.y / 700) * 100}%`,
                  }}
                >
                  {/* Pulse ring */}
                  <div className="absolute inset-0 -inset-3 rounded-full opacity-40 animate-ping"
                    style={{ background: region.color, animationDuration: `${2 + i * 0.5}s` }} />

                  {/* Dot */}
                  <div
                    className="relative w-4 h-4 rounded-full transition-transform duration-300 group-hover:scale-150"
                    style={{
                      background: region.color,
                      boxShadow: `0 0 12px ${region.color}`,
                    }}
                  />

                  {/* Label */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold"
                    style={{ color: region.color }}>
                    {region.name}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Region info */}
          <div>
            <AnimatePresence mode="wait">
              {activeRegion ? (
                <motion.div
                  key={activeRegion.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  className="rounded-2xl p-8"
                  style={{
                    background: `linear-gradient(135deg, ${activeRegion.color}15, rgba(13,13,13,0.9))`,
                    border: `1px solid ${activeRegion.color}30`,
                  }}
                >
                  <div className="w-12 h-1 rounded-full mb-6" style={{ background: activeRegion.color }} />
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {activeRegion.name}
                  </h3>
                  <p className="text-xs tracking-wider uppercase mb-6" style={{ color: activeRegion.color }}>
                    PAYNA Regional Chapter · {activeRegion.members}
                  </p>

                  <div className="mb-6">
                    <div className="text-xs text-payna-beige/40 uppercase tracking-wider mb-3">Agricultural Focus</div>
                    <p className="text-payna-beige/80">{activeRegion.focus}</p>
                  </div>

                  <div>
                    <div className="text-xs text-payna-beige/40 uppercase tracking-wider mb-3">Key Countries</div>
                    <div className="flex flex-wrap gap-2">
                      {activeRegion.countries.map(c => (
                        <span key={c} className="px-3 py-1 rounded-full text-xs"
                          style={{ background: `${activeRegion.color}15`, color: activeRegion.color }}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <p className="text-payna-beige/60 mb-8">
                    Click a region on the map to explore PAYNA's continental chapter structure.
                  </p>
                  {regions.map((region, i) => (
                    <motion.button
                      key={region.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={visible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      onClick={() => setActiveRegion(region)}
                      className="w-full flex items-center gap-4 glass rounded-xl p-4 group hover:border-opacity-50 transition-all"
                      style={{ border: `1px solid ${region.color}20` }}
                    >
                      <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: region.color }} />
                      <span className="text-payna-beige/80 group-hover:text-white text-sm font-medium">{region.name}</span>
                      <span className="ml-auto text-xs" style={{ color: region.color }}>{region.members}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Governance structure */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-center text-white text-2xl font-bold mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Organizational Structure
          </h3>
          <div className="flex flex-col items-center gap-0">
            {[
              { label: 'Continental Secretariat', sublabel: 'Pan-African Leadership & Strategy', level: 0 },
              { label: 'Regional Chapters', sublabel: 'East · West · Central · North · Southern', level: 1 },
              { label: 'National Youth Chapters', sublabel: 'Country-level implementation teams', level: 2 },
              { label: 'Thematic Committees', sublabel: 'Agritech · Finance · Trade · Climate · Gender', level: 3 },
            ].map((tier, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={visible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.15 }}
                  className={`rounded-xl px-8 py-4 text-center glass-gold ${
                    i === 0 ? 'min-w-[280px]' : i === 1 ? 'min-w-[320px]' : i === 2 ? 'min-w-[360px]' : 'min-w-[400px]'
                  }`}
                  style={{ border: '1px solid rgba(201,168,76,0.15)' }}
                >
                  <div className="text-white font-semibold">{tier.label}</div>
                  <div className="text-payna-gold/60 text-xs mt-1">{tier.sublabel}</div>
                </motion.div>
                {i < 3 && (
                  <motion.div
                    className="w-px h-6 bg-gradient-to-b from-payna-gold to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={visible ? { scaleY: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    style={{ transformOrigin: 'top' }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
