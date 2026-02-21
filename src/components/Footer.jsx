import React from 'react'

const footerLinks = {
  Organization: ['About PAYNA', 'Vision & Mission', 'Governance', 'Leadership', 'Annual Reports'],
  Programs: ['Agribusiness Incubation', 'Value Chain Initiative', 'Cooperative Program', 'Digital Platform', 'Climate Initiative'],
  Resources: ['Research Papers', 'Policy Briefs', 'Media Gallery', 'Success Stories', 'Partner With Us'],
  Connect: ['Contact Us', 'Regional Chapters', 'Newsletter', 'Careers', 'Volunteering'],
}

export default function Footer() {
  return (
    <footer className="relative" style={{ background: 'linear-gradient(180deg, #1A0F00, #021A04)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-forest-600 flex items-center justify-center font-display font-bold text-forest-900 text-2xl">P</div>
              <div>
                <div className="font-heading font-bold text-white tracking-widest">PAYNA</div>
                <div className="font-body text-xs text-gold-400/60">Youth Cultivating Africa's Future</div>
              </div>
            </div>
            <p className="font-body text-sm text-white/40 leading-relaxed mb-6">
              A youth-led continental movement building profitable, innovation-driven agricultural value chains across Africa.
            </p>
            <div className="flex gap-3">
              {['𝕏', 'in', 'f', '▶'].map((social, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/40 transition-all text-sm font-bold" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-heading text-xs font-bold tracking-widest uppercase text-white/60 mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm text-white/30 hover:text-gold-400 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="font-body text-xs text-white/20">
            © 2025 Pan African Youth Network for Agriculture (PAYNA). All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="font-body text-xs text-white/20 hover:text-white/50 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
