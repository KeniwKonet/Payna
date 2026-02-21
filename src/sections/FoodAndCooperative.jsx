import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const climateFeatures = [
  { icon: '🌿', title: 'Regenerative Farming', desc: 'Soil health restoration and carbon sequestration practices' },
  { icon: '💧', title: 'Smart Irrigation', desc: 'IoT-enabled water management reducing waste by 60%' },
  { icon: '☀️', title: 'Renewable Energy', desc: 'Solar-powered agro-processing and cold storage' },
  { icon: '🛡️', title: 'Climate Adaptation', desc: 'Drought-resistant varieties and risk management tools' },
]

const cooperativeBenefits = [
  { icon: '💪', title: 'Bargaining Power', desc: 'Collective negotiation for better input prices and market deals' },
  { icon: '🌐', title: 'Market Access', desc: 'Shared market intelligence and collective export capacity' },
  { icon: '🏗️', title: 'Shared Infrastructure', desc: 'Communal storage, processing, and transport facilities' },
  { icon: '📊', title: 'Financial Access', desc: 'Collective credit, savings, and investment instruments' },
]

function FeatureGrid({ features, accentColor, visible, delay = 0 }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay + i * 0.1 }}
          className="glass rounded-xl p-5 group hover:scale-[1.02] transition-transform cursor-default"
          style={{ border: `1px solid ${accentColor}15` }}
        >
          <div className="text-2xl mb-3">{f.icon}</div>
          <h4 className="text-white text-sm font-semibold mb-1 group-hover:text-opacity-100"
            style={{ color: accentColor }}>{f.title}</h4>
          <p className="text-payna-beige/50 text-xs leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

export function FoodSecurity() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="food-security" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Globe wireframe background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute right-0 top-0 opacity-5 w-96 h-96" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" fill="none" stroke="#4CAF72" strokeWidth="1"/>
          <ellipse cx="200" cy="200" rx="180" ry="70" fill="none" stroke="#4CAF72" strokeWidth="0.5"/>
          <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="#4CAF72" strokeWidth="0.5"/>
          <line x1="20" y1="200" x2="380" y2="200" stroke="#4CAF72" strokeWidth="0.5"/>
          <line x1="200" y1="20" x2="200" y2="380" stroke="#4CAF72" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              className="section-label text-payna-green-bright"
            >
              Food Security
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title text-white mt-3 mb-6"
            >
              Climate-Smart{' '}
              <span className="text-gradient-green-gold">Agriculture</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-payna-beige/70 text-lg leading-relaxed"
            >
              Africa faces a dual challenge: feeding 1.5 billion people while adapting to 
              increasingly erratic climate patterns. PAYNA equips youth farmers with the 
              tools, knowledge, and finance to build resilient, productive food systems.
            </motion.p>
          </div>
          <FeatureGrid features={climateFeatures} accentColor="#4CAF72" visible={visible} delay={0.3} />
        </div>
      </div>
    </section>
  )
}

export function CooperativeDevelopment() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="cooperatives" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive cooperative visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <svg viewBox="0 0 400 400" className="w-full max-w-sm mx-auto">
              <defs>
                <radialGradient id="nodeGrad">
                  <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.05"/>
                </radialGradient>
              </defs>

              {/* Central hub */}
              <circle cx="200" cy="200" r="50" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5"/>
              <circle cx="200" cy="200" r="35" fill="url(#nodeGrad)"/>
              <text x="200" y="196" textAnchor="middle" fill="#C9A84C" fontSize="11" fontWeight="600">COOPERATIVE</text>
              <text x="200" y="210" textAnchor="middle" fill="#C9A84C" fontSize="11" fontWeight="600">HUB</text>

              {/* Satellite nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                const x = 200 + 140 * Math.cos(rad)
                const y = 200 + 140 * Math.sin(rad)
                const labels = ['Farmer', 'Processor', 'Trader', 'Exporter', 'Finance', 'Tech']
                return (
                  <g key={i}>
                    <line x1="200" y1="200" x2={x} y2={y}
                      stroke="rgba(201,168,76,0.15)" strokeWidth="1" strokeDasharray="4 4">
                      <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur={`${2 + i * 0.3}s`} repeatCount="indefinite"/>
                    </line>
                    <circle cx={x} cy={y} r="22" fill="rgba(26,92,42,0.3)" stroke="rgba(76,175,114,0.3)" strokeWidth="1.5"/>
                    <text x={x} y={y + 4} textAnchor="middle" fill="rgba(245,237,214,0.8)" fontSize="9">
                      {labels[i]}
                    </text>
                    <circle cx={x} cy={y} r="22" fill="transparent">
                      <animate attributeName="r" values="22;28;22" dur={`${3 + i * 0.5}s`} repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.3;0;0.3" dur={`${3 + i * 0.5}s`} repeatCount="indefinite"/>
                    </circle>
                  </g>
                )
              })}
            </svg>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              className="section-label"
            >
              Cooperative Development
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title text-white mt-3 mb-6"
            >
              Strength in{' '}
              <span className="text-gradient-gold">Unity</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-payna-beige/70 text-lg leading-relaxed mb-8"
            >
              Individual farmers are vulnerable. Organized cooperatives are unstoppable. 
              PAYNA builds and strengthens 500 youth-led agricultural cooperatives across 
              Africa, enabling collective bargaining, shared infrastructure, and market power.
            </motion.p>
            <FeatureGrid features={cooperativeBenefits} accentColor="#C9A84C" visible={visible} delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  )
}
