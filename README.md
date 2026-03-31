# 🔵 Bipolar Factory — Storytelling Website

> A fully informative, story-driven website built using real data from **bipolarfactory.com**
> Designed to demonstrate a deep understanding of the company and its potential.

---

## 🚀 Setup & Run

```bash
# 1. Extract the folder
cd bpf-storytelling

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:5173

# 4. Build for production
npm run build
npm run preview
```

---

## 🏗️ Project Structure

```
bpf-storytelling/
├── index.html                        # Entry + Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono)
├── package.json
├── tailwind.config.js                # Custom color tokens (bpf-navy, bpf-blue, bpf-sky, bpf-cyan…)
├── vite.config.js
└── src/
    ├── main.jsx
    ├── index.css                     # All global CSS: cursor, reveal, cards, orbs, noise
    ├── App.jsx                       # Root: Loader + scroll-reveal + BackToTop + section assembly
    └── components/
        ├── Cursor.jsx                # Custom spring-physics cursor (dot + trailing ring)
        ├── Navbar.jsx                # Scroll-hide/show, active section highlight, mobile drawer
        ├── Hero.jsx                  # Parallax BG, animated stats, ticker, NVIDIA badge
        ├── About.jsx                 # Storytelling intro, 5-year timeline, 6 core values, team photo
        ├── Products.jsx              # All 3 real BPF products: OLY Store Sync, Control Center, Metawood
        ├── Services.jsx              # 4 services + 6 industries with interactive hover cards
        ├── Impact.jsx                # Bihar case study + 3 real testimonials + client logos
        ├── Contact.jsx               # Dark contact form with interest selector + success state
        └── Footer.jsx                # Branded footer with links, watermark, NVIDIA badge
```

---

## 🎨 Design System

### Color Palette — Light Blue Tech Theme
| Token | Hex | Used For |
|---|---|---|
| `bpf-navy` | `#0D1B2A` | Dark hero sections, footer, headings |
| `bpf-blue` | `#1565C0` | Primary CTA, active states |
| `bpf-sky` | `#1E88E5` | Accents, hover, gradient fills |
| `bpf-cyan` | `#00ACC1` | Secondary accent, gradient end |
| `bpf-light` | `#E3F2FD` | Soft fills, value icon backgrounds |
| `bpf-pale` | `#F0F7FF` | Page background, section fills |
| `bpf-gray` | `#F8FAFC` | Alternating section backgrounds |
| `bpf-accent`| `#FF6B2B` | Warm accent (CTA glow, hero outline) |

### Typography
- **Plus Jakarta Sans** — Display headings, bold numbers
- **Inter** — Body copy, descriptions
- **JetBrains Mono** — Labels, badges, code-like UI

---

## 📖 Storytelling Sections

| # | Section | Real Data Used | Story Arc |
|---|---|---|---|
| 1 | **Hero** | BPF tagline, NVIDIA badge, bg image | First impression — scale & ambition |
| 2 | **About** | Founded 2020, mission, values, team photo | Origin story — where it started |
| 3 | **Timeline** | 2020→2024 milestones | Journey — how they grew |
| 4 | **Products** | OLY Store Sync, Control Center, Metawood | Proof — real products with real impact |
| 5 | **Services** | 4 services + 6 industries | Scope — how broad their reach is |
| 6 | **Case Study** | Bihar Election Commission | Credibility — landmark real-world impact |
| 7 | **Testimonials** | 3 real quotes from actual clients | Trust — client validation |
| 8 | **Clients** | Real client logos (ECI, TN Govt, Max) | Authority — who trusts them |
| 9 | **Contact** | Real address, social links, careers | Call to Action |

---

## ✨ Key Features

- **Branded Loader** — Real BPF white logo, progress bar with percentage
- **Smart Navbar** — Hides on scroll down, reveals on scroll up, highlights active section
- **Mobile Drawer** — Smooth slide-in panel with animated links
- **Custom Cursor** — Spring-physics dot + ring, morphs on hover (desktop only)
- **Parallax Hero** — Background image scrolls at 25% speed
- **Scroll-reveal animations** — Every section reveals cleanly via IntersectionObserver
- **Stagger animations** — Grid children animate in sequence
- **Real product images** — Loaded directly from Wixstatic CDN
- **Real client logos** — Grayscale → color on hover
- **Case Study breakdown** — 4-step approach card layout
- **Interactive contact form** — Multi-select interest chips + success state
- **Back to Top button** — Appears after 600px scroll

---

## 📱 Responsive
Mobile → Tablet → Desktop — all grids, typography, and nav adapt cleanly.

---

*Built with real data from bipolarfactory.com. © Bipolar Factory Private Limited.*
