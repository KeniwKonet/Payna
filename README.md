# PAYNA — Pan African Youth Network for Agriculture

> **Youth Cultivating Africa's Future** | Continental Agricultural Movement

## 🌍 Overview

A full-featured, Vercel-ready React website for PAYNA — built with premium UI/UX, advanced animations, and elite design. This is not a template. It's a continental movement website.

---

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
npm install
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Vercel auto-detects Vite — click **Deploy**

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
payna/
├── public/
│   ├── favicon.svg          # PAYNA logo SVG
│   ├── robots.txt           # SEO robots config
│   └── sitemap.xml          # SEO sitemap
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx  # Branded cursor effect
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Navbar.jsx        # Sticky navigation
│   │   └── ScrollProgress.jsx # Progress bar
│   ├── hooks/
│   │   └── useScrollReveal.js # Intersection observer hooks
│   ├── sections/
│   │   ├── Hero.jsx           # 🔥 Full-width hero with parallax
│   │   ├── About.jsx          # About PAYNA
│   │   ├── VisionMission.jsx  # Split vision/mission
│   │   ├── ValueChain.jsx     # Interactive value chain
│   │   ├── YouthEmployment.jsx# Youth programs
│   │   ├── FoodAndCooperative.jsx # Food security + cooperatives
│   │   ├── MarketTrade.jsx    # Trade routes map
│   │   ├── Programs.jsx       # Key programs cards
│   │   ├── AfricaMap.jsx      # Africa interactive map + org structure
│   │   ├── Impact.jsx         # Animated counters
│   │   ├── Partnerships.jsx   # Partners wall
│   │   └── JoinMovement.jsx   # CTA section
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Global styles + animations
├── index.html                # Full SEO meta tags
├── vercel.json               # Vercel deployment config
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🎨 Design System

### Color Palette
| Name | Hex | Usage |
|------|-----|-------|
| Payna Gold | `#C9A84C` | Primary accent, CTAs |
| Gold Light | `#F0C96B` | Hover states, gradients |
| Payna Green | `#1A5C2A` | Brand primary |
| Green Bright | `#4CAF72` | Highlights |
| Charcoal | `#1A1A1A` | Section backgrounds |
| Dark | `#0D0D0D` | Main background |
| Beige | `#F5EDD6` | Body text |

### Typography
- **Display**: Playfair Display (serif) — for headings
- **Body**: DM Sans — for body text
- **Labels**: Space Grotesk — for UI elements

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| Hero | Cinematic SVG landscape with parallax + particles |
| Navigation | Glassmorphism sticky nav with smooth scroll |
| Scroll Progress | Gold/green gradient progress bar |
| Custom Cursor | Branded cursor with magnetic effect |
| Value Chain | Interactive clickable node system |
| Africa Map | SVG map with animated trade routes |
| Counters | Intersection-observer animated number counters |
| Programs | Expandable premium card system |
| Cooperative Viz | Animated SVG node connection diagram |
| Grain Overlay | Film grain texture for depth |
| Animations | Framer Motion scroll-triggered reveals |

---

## 🔍 SEO Configuration

The site includes:
- Full Open Graph tags (`og:title`, `og:description`, `og:image`)
- Twitter Card metadata
- JSON-LD structured data (Organization + WebSite schemas)
- `robots.txt` and `sitemap.xml`
- Canonical URLs
- Semantic HTML structure

**Update before launch:**
1. Change `https://payna.africa` to your actual domain in `index.html`
2. Replace `/og-image.jpg` with your actual OG image (1200×630px)
3. Update contact email and social media links

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `react` + `react-dom` | UI framework |
| `framer-motion` | Scroll animations, transitions |
| `gsap` | Advanced animation (available for extension) |
| `@studio-freight/lenis` | Smooth scrolling (available for integration) |
| `tailwindcss` | Utility CSS |

---

## 🌐 Environment Variables

No environment variables required for the base site.

For future integrations (CMS, forms, analytics):
```env
VITE_MAILCHIMP_API=your_key
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SANITY_PROJECT_ID=your_project_id
```

---

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px – 1024px  
- Desktop: > 1024px

All sections are fully responsive.

---

## 🚀 Performance Tips

- Replace SVG backgrounds with actual video files in production
- Add lazy loading for below-fold images
- Consider adding a service worker for PWA support
- Use Cloudinary or similar CDN for any media assets

---

## 📄 License

© 2024 Pan African Youth Network for Agriculture. All rights reserved.

---

*Built with ❤️ for Africa's agricultural revolution.*
