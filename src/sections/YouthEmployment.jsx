import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: '🚀',
    title: 'Startup Incubation',
    desc: 'From concept to commercial — guiding youth agribusinesses through structured 6-month incubation cohorts.',
    color: '#4CAF72',
  },
  {
    icon: '🧠',
    title: 'Expert Mentorship',
    desc: 'Access to a pan-African network of seasoned agribusiness leaders, entrepreneurs, and investors.',
    color: '#C9A84C',
  },
  {
    icon: '💰',
    title: 'Access to Finance',
    desc: 'Connecting youth enterprises to grants, blended finance, impact investment, and agricultural credit.',
    color: '#F0C96B',
  },
  {
    icon: '📈',
    title: 'Enterprise Coaching',
    desc: 'Business model validation, financial management, and growth strategy tailored for agribusinesses.',
    color: '#2D8B47',
  },
]

export default function YouthEmployment() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="youth" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(26,92,42,0.08), transparent)',
            top: '-10%',
            left: '-10%',
          }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.06), transparent)',
            bottom: '-5%',
            right: '10%',
          }}
          animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            className="section-label"
          >
            Youth Employment & Entrepreneurship
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-white mt-3"
          >
            Building Tomorrow's{' '}
            <span className="text-gradient-green-gold">Agripreneurs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-payna-beige/60 max-w-xl mx-auto mt-4 text-lg"
          >
            Africa has 420 million young people by 2063. PAYNA turns that demographic dividend 
            into agricultural enterprise power.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 + 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass rounded-2xl p-8 cursor-default relative overflow-hidden"
              style={{ border: `1px solid ${service.color}15` }}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)` }} />

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
              >
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-opacity-100"
                style={{ fontFamily: 'Playfair Display, serif' }}>
                {service.title}
              </h3>
              <p className="text-payna-beige/50 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 glass rounded-2xl p-10 relative overflow-hidden"
          style={{ border: '1px solid rgba(201,168,76,0.1)' }}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-payna-gold to-transparent" />
          <div className="text-4xl text-payna-gold/20 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>"</div>
          <blockquote className="text-xl text-white/80 italic leading-relaxed max-w-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
            PAYNA represents exactly what Africa needs — young people who refuse to see agriculture 
            as a last resort, but as the most exciting enterprise opportunity of our generation.
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-payna-green to-payna-gold" />
            <div>
              <div className="text-white font-semibold text-sm">PAYNA Member, Kenya</div>
              <div className="text-payna-gold/60 text-xs">Youth Agribusiness Founder</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
