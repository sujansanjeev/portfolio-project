# Portfolio Redesign — Design Specification

**Project:** Sujan Sanjeev D — Personal Brand Portfolio  
**Concept:** MONOLITH  
**Date:** 2026-06-27  
**Status:** Approved for implementation

---

## 1. Concept Overview

Transform the existing portfolio from a standard dark-themed developer showcase into a premium personal brand experience.

The design is anchored by a single signature visual idea: a **faceted crystalline monolith** floating in a dark void. The monolith represents precision, depth, forward motion, and building systems from first principles. It becomes the recurring brand mark — appearing in the hero, loader, section watermarks, and closing footer.

The overall personality is **visionary builder**: engineer + creator + systems thinker. The site should feel expensive, distinctive, and cinematic — not corporate, not playful, not a generic SaaS template.

---

## 2. Strategic Direction

### 2.1 What to Keep
- Existing tech stack: React 18 + Vite 6 + Tailwind CSS 3.
- Existing animation libraries: GSAP, Framer Motion, Lenis.
- Existing Three.js / React Three Fiber setup for the WebGL hero.
- All existing content: bio, experience, projects, education, certifications, contact info.
- All existing image assets in `src/assets/`.

### 2.2 What to Change
- Move from "developer portfolio" layout to **personal brand folio**.
- Replace card-grid-heavy sections with cinematic, asymmetric layouts.
- Introduce a cohesive brand system: monolith motif, custom monogram, refined palette, editorial typography.
- Rewrite generic copy into confident, human, visionary statements.
- Remove all emoji icons; use Lucide or custom SVG icons.
- Unify animation language: fewer bouncy effects, more cinematic reveals.

### 2.3 What to Avoid
- Generic AI/SaaS purple-blue gradients.
- Standard 3-column feature cards.
- Cookie-cutter resume templates.
- Overly noisy particles or cheap glow overload.
- Buzzword-heavy copy.

---

## 3. Visual Identity

### 3.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--void` | `#030305` | Deepest background |
| `--surface-1` | `#08080C` | Primary section backgrounds |
| `--surface-2` | `#101018` | Cards, panels |
| `--surface-3` | `#161620` | Elevated surfaces, borders |
| `--accent-cyan` | `#00E5FF` | Primary accent, CTAs, highlights |
| `--accent-amber` | `#FFB84D` | Secondary accent, warmth, gold moments |
| `--silver` | `#C8D4E8` | Bright highlights, headings |
| `--text-primary` | `#F0F2F5` | Body headings |
| `--text-secondary` | `#9CA3AF` | Body text, descriptions |
| `--text-muted` | `#6B7280` | Captions, meta |
| `--border` | `rgba(255,255,255,0.08)` | Subtle borders |

**Gradient signatures:**
- Hero glow: radial cyan + amber at low opacity.
- Timeline line: linear cyan → amber.
- Text accent: gradient from cyan to amber on key words.

### 3.2 Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | Space Grotesk | 500, 600, 700 | Hero name, section headings, big statements |
| Body | Inter | 400, 500 | Paragraphs, descriptions |
| Mono | JetBrains Mono | 400, 500 | Labels, tags, small tech details |
| Serif Accent | Source Serif 4 | 400, 600 | Occasional editorial quotes or emphasis |

**Type scale:**
- Hero name: `clamp(3.5rem, 10vw, 9rem)`, weight 700, tracking -0.03em.
- Section heading: `clamp(2.5rem, 6vw, 5rem)`, weight 700.
- Statement text: `clamp(1.5rem, 3vw, 2.5rem)`, weight 500.
- Body: `1rem` (16px), line-height 1.6.
- Caption/label: `0.75rem` (12px), uppercase, tracking 0.1em.

### 3.3 Monogram / Logo

A faceted "S" mark derived from the monolith geometry.
- Used in loader reveal.
- Used in navbar as home link.
- Used as subtle watermark between sections.
- Used in footer as brand close.

**Style:** angular, geometric, single-line or faceted outline. Cyan stroke with amber accent point.

---

## 4. Design System

### 4.1 Spacing Rhythm

- Section vertical padding: `py-24 md:py-32 lg:py-40`.
- Container max-width: `max-w-7xl mx-auto px-6 lg:px-8`.
- Card radius: `rounded-2xl` (16px) or `rounded-3xl` (24px).
- Section gap: consistent `gap-8 md:gap-12`.
- Border: `1px solid rgba(255,255,255,0.08)`.

### 4.2 Surface Hierarchy

1. **Void layer:** `--void` — page background.
2. **Surface layer:** `--surface-1` — section backgrounds.
3. **Card layer:** `--surface-2` — cards, panels.
4. **Elevated layer:** `--surface-3` — hover states, focused cards.

### 4.3 Animation Timing

| Type | Duration | Easing |
|------|----------|--------|
| Micro-interactions | 200–300ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Section reveals | 800ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Text split reveals | 600ms | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| 3D hover | 400ms | spring-ish, Framer Motion spring |
| Parallax scrub | tied to scroll | `none` (scrub) |

---

## 5. Section-by-Section Design

### 5.1 Loader / Intro

**Purpose:** First brand moment. Builds anticipation.

**Sequence:**
1. Full-screen `--void` overlay.
2. Monogram "S" draws itself or forms from particles.
3. Monolith materializes as a wireframe, then solidifies.
4. Overlay splits/fades to reveal hero.
5. Total duration: ~2 seconds.

**Reduced motion:** instant fade to hero.

### 5.2 Navigation

**Style:**
- Fixed top, transparent initially.
- On scroll: `bg-surface-1/80 backdrop-blur-xl border-b border-border`.
- Height: `h-16 md:h-20`.
- Left: monogram + name wordmark.
- Right: nav links (Work, About, Skills, Contact) or single-word labels aligned to sections.
- Mobile: full-screen dark menu with large links.

**Interaction:**
- Links have a small cyan underline that animates on hover.
- Active section highlighted via scroll spy.

### 5.3 Hero

**Layout:**
- Full viewport height (`min-h-screen`).
- Two-layer composition:
  - Left (55%): name, role, description, CTAs.
  - Right (45%): WebGL monolith.
- On mobile: stacked, monolith above or behind text at reduced opacity.

**Content:**
- Label: "Software Engineer · Systems Thinker · Builder"
- Name: "Sujan Sanjeev"
- Role carousel: "Software Engineer", "Full Stack Developer", "Gen AI Enthusiast", "Tech Explorer" — displayed as gradient text with typewriter effect.
- Description: "Building enterprise systems at FISERV India. Exploring AI, open-source software, and the future of technology."
- CTAs: "Let's Connect" (primary cyan), "Explore Work" (secondary outline).
- Floating stat badges near monolith: "1.5+ Years", "5+ Projects", "20+ Technologies".

**WebGL Monolith:**
- Faceted crystalline geometry.
- Cyan + amber internal light.
- Slow rotation.
- Mouse-reactive tilt.
- Scroll-reactive: slight camera drift.
- Floating particles / energy field around it.

**Entrance animations:**
1. Loader fades.
2. Label fades in (0.2s).
3. Name letters stagger in (0.4s).
4. Role types in (0.7s).
5. Description + CTAs fade up (0.9s).
6. Monolith materializes + badges orbit in (1.1s).

**Scroll indicator:** minimal mouse/wheel icon at bottom center.

### 5.4 About

**Layout:**
- Two-column on desktop, single on mobile.
- Left: 3D-tilt portrait with decorative glow.
- Right: manifesto text + skill tags + counter stats.

**Content:**
- Heading: "Who I Am"
- Subheading: "Engineer by training. Builder by instinct. Explorer by choice."
- Manifesto paragraphs:
  - "I'm Sujan Sanjeev, a software engineer based in Chennai, currently building enterprise systems at FISERV India."
  - "My work sits at the intersection of systems thinking and practical execution — whether that's mainframe infrastructure, full-stack applications, or experiments with AI and open-source tools."
  - "Outside code, I'm drawn to Linux customization, local LLMs, fitness, music, and understanding how complex systems work."
- Skill tags: Software Engineering, Full Stack Development, AI/ML, IoT, Cloud, Linux, Mainframe, Financial Tech.
- Stats: 1.5+ Years, 5+ Projects, 20+ Technologies, 3+ Certifications.

**Interactions:**
- Portrait tilts on mouse move with glare overlay.
- Text lines reveal on scroll with stagger.
- Counters animate when in view.

### 5.5 Mindset

**Layout:**
- Full-width section with large typographic statements.
- Three statements stacked vertically, each taking significant vertical space.
- Subtle monolith watermark in background.

**Content:**
1. "I think in systems." — small label: "Approach"
2. "I build with curiosity." — small label: "Method"
3. "I move with discipline." — small label: "Habit"

**Interaction:**
- Each statement animates in with split-text or word reveal as it enters viewport.
- Parallax drift on the monolith watermark.

### 5.6 Experience

**Layout:**
- Vertical timeline centered on desktop, left-aligned on mobile.
- Alternating left/right cards on desktop.
- Liquid gradient line connects entries.

**Content:**
1. FISERV India — Software Engineer — June 2025 - Present — Mainframe, COBOL, JCL, DB2, CICS.
2. Gorilla Technology — SWE Intern — May 2024 - July 2024 — Python, Ansible, React, NETBOX.
3. Tata Communications — Full Stack Intern — June 2023 - July 2023 — Angular, Flask, Python, SQL.

**Interactions:**
- Timeline line draws on scroll.
- Cards slide in from alternating sides.
- Cards have 3D tilt on hover.
- Current role dot pulses.

### 5.7 Projects

**Layout:**
- Section intro + featured project as full-width cinematic panel.
- University projects below as 2-3 stacked/asymmetric panels with depth overlap.

**Featured project:**
- Integrated Disputes System — FISERV India — Merchant Solutions Tech.
- Large panel with logo, description, tech stack.

**University projects:**
1. Autonomous Rover — ROS, Python, SLAM.
2. AI Teaching Assistant — GPT-3, Streamlit.
3. Sign Language Tool — Mediapipe, OpenCV.

**Interactions:**
- Featured panel has subtle parallax.
- Project panels tilt on hover.
- Images scale on hover inside overflow-hidden containers.
- Tags highlight on hover.

### 5.8 Skills

**Layout:**
- Header + stats row.
- Categorized skill clusters displayed as floating/orbiting cards or horizontal marquee bands.
- Categories: Languages, Mainframe, Web Dev, AI/ML & Cloud, Tools.

**Interactions:**
- Icons scale in with stagger on scroll.
- Horizontal bands drift at different speeds (parallax).
- Hover: icon lifts, border glows cyan.

### 5.9 Education

**Layout:**
- Compact section, horizontal or vertical timeline.
- Featured degree (B.Tech CSE IoT, Shiv Nadar University) as primary card.
- Earlier education as minimal secondary cards.

**Content:**
1. Shiv Nadar University, Chennai — B.Tech CSE (IoT) — 2021-2025 — CGPA 8.0/10.
2. M.L.M HSS — Higher Secondary, Computer Science — 2019-2021 — 92%.
3. M.L.M HSS — Secondary — 2017-2019 — 90%.

**Interactions:**
- Cards fade/slide in on scroll.
- Featured card has subtle gradient border.

### 5.10 Certifications

**Layout:**
- Two elegant cards side by side on desktop, stacked on mobile.
- Each card: certificate image, title, issuer, date, skills.

**Content:**
1. Generative AI Foundations — DeepLearning.AI & AWS.
2. Cybersecurity Professional Certificate — Google.

**Interactions:**
- Cards fade and slide up on scroll.
- Subtle rotation on hover (3D card).

### 5.10 Contact

**Layout:**
- Two-column: contact methods left, form right.
- Strong CTA headline.
- Magnetic social/contact links.
- Minimal form with animated floating labels.

**Content:**
- Heading: "Let's Build Something."
- Subheading: "Open to opportunities, collaborations, and interesting conversations."
- Contact methods: Email, LinkedIn, GitHub, Location.
- Form fields: Name, Email, Message.

**Interactions:**
- Form labels float on focus.
- Submit button magnetic + glow.
- Contact cards move slightly toward cursor on hover.

### 5.11 Footer

**Layout:**
- Centered monogram.
- Closing line: "Built by Sujan Sanjeev. Systems, curiosity, discipline."
- Copyright + year.

**Interaction:**
- Subtle parallax on scroll into footer.
- Monogram pulses gently.

---

## 6. Animation Strategy

### 6.1 Global Motion
- **Lenis smooth scroll** connected to GSAP ScrollTrigger.
- **Scroll progress indicator** at top of viewport (thin cyan line).
- **Scroll-to-section** navigation via Lenis scrollTo.

### 6.2 Entrance Choreography
- Hero: sequence described in section 5.3.
- Sections: fade-up + slight translateY on scroll into view.
- Headings: split-text word/line reveals.
- Cards: staggered scale/fade from below.

### 6.3 Scroll Effects
- Parallax layers in hero (text + monolith + particles at different speeds).
- Monolith watermark drifts in Mindset section.
- Timeline line draws with scroll scrub.
- Skill bands move horizontally at different rates.

### 6.4 Interaction Effects
- **Magnetic buttons:** move toward cursor on hover, spring back.
- **3D tilt cards:** rotate based on cursor position, max ±10°.
- **Glare overlays:** follow cursor on tilt cards/portrait.
- **Mouse-follow glow:** subtle radial gradient glow follows cursor in hero.

### 6.5 Reduced Motion
- All animations respect `prefers-reduced-motion`.
- Disable parallax, tilt, float, and scroll-driven motion.
- Show static final states with instant fades.

---

## 7. WebGL Hero Specification

### 7.1 Technology
- React Three Fiber (`@react-three/fiber`).
- Drei helpers (`@react-three/drei`) for Float, Environment, effects.
- Three.js core (`three`).
- Lazy-loaded with `React.lazy` + `Suspense`.

### 7.2 Monolith Geometry
- Low-poly crystalline form.
- Options:
  - Icosahedron with flat shading.
  - Custom faceted geometry.
  - Wireframe overlay for tech feel.
- Material: `MeshStandardMaterial` or `MeshPhysicalMaterial` with transmission/iridescence.
- Color: cyan base with amber internal light.

### 7.3 Lighting
- Ambient light (low).
- Point lights: cyan + amber positioned to create edge highlights.
- Optional environment map for reflections.

### 7.4 Animation
- Continuous slow rotation on Y and slight X.
- `Float` component for gentle bobbing.
- Mouse interaction: monolith tilts toward cursor.
- Scroll interaction: rotation speed increases slightly or camera angle shifts.

### 7.5 Performance
- `dpr={[1, 2]}` max.
- Disable on mobile if performance is poor; fallback to CSS monolith.
- Pause rendering when hero is out of viewport (optional).

### 7.6 Fallback
- CSS-only crystalline shape using layered `clip-path` polygons, gradients, and blur.
- Used when WebGL fails or reduced motion is enabled.

---

## 8. Content Rewrite

### 8.1 Copy Principles
- Confident, intelligent, polished, concise, human.
- No buzzwords.
- No emojis.
- Avoid: "Welcome to my portfolio", "passionate about technology", generic filler.

### 8.2 Section Headings
- Hero: no heading needed; name is the heading.
- About: "Who I Am"
- Mindset: no heading; statements stand alone.
- Experience: "The Journey"
- Projects: "Selected Work"
- Skills: "Tools & Systems"
- Education: "Academic Path"
- Certifications: "Credentials"
- Contact: "Let's Build Something"

### 8.3 Key Phrases
- "Engineer by training. Builder by instinct. Explorer by choice."
- "I think in systems. I build with curiosity. I move with discipline."
- "Building enterprise systems at FISERV India."
- Footer: "Built by Sujan Sanjeev. Systems, curiosity, discipline."

---

## 9. Technical Notes

### 9.1 File Structure

```
src/
├── App.jsx                     # Layout orchestrator, Lenis init
├── main.jsx                    # Entry point
├── index.css                   # Global styles, CSS variables, fonts
├── App.css                     # Additional global styles
├── hooks/
│   ├── useMousePosition.js     # Global mouse tracker
│   ├── useScrollProgress.js    # Normalized scroll progress
│   ├── useMagneticEffect.js    # Magnetic hover logic
│   ├── useTilt.js              # 3D tilt logic
│   └── useReducedMotion.js     # Prefers-reduced-motion wrapper
├── lib/
│   └── animations.js           # GSAP ScrollTrigger presets
├── components/
│   ├── LoadingScreen.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── MonolithCanvas.jsx      # WebGL hero
│   ├── MonolithFallback.jsx    # CSS fallback
│   ├── About.jsx
│   ├── Mindset.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── MagneticButton.jsx
│   ├── TiltCard.jsx
│   ├── ScrollReveal.jsx
│   ├── SplitText.jsx
│   ├── Counter.jsx
│   ├── ParallaxLayer.jsx
│   └── ParticleBackground.jsx
└── assets/
    └── (existing images)
```

### 9.2 Dependencies to Keep/Add

**Keep:**
- `react`, `react-dom`
- `vite`
- `tailwindcss`
- `framer-motion`
- `gsap`
- `lenis`
- `lucide-react`
- `react-icons`
- `three`, `@react-three/fiber`, `@react-three/drei`
- `split-type`

**Add:**
- `@fontsource/space-grotesk`
- `@fontsource/source-serif-4`
- Or use Google Fonts via `index.html`.

### 9.3 Tailwind Config Updates

Extend existing config with new tokens:

```js
colors: {
  void: '#030305',
  surface: {
    1: '#08080C',
    2: '#101018',
    3: '#161620',
  },
  cyan: {
    DEFAULT: '#00E5FF',
    glow: '#33EBFF',
  },
  amber: {
    DEFAULT: '#FFB84D',
    glow: '#FFCA70',
  },
  silver: '#C8D4E8',
}
```

Add fonts:

```js
fontFamily: {
  display: ['Space Grotesk', 'Inter', 'sans-serif'],
  sans: ['Inter', 'SF Pro Display', '-apple-system', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
  serif: ['Source Serif 4', 'Georgia', 'serif'],
}
```

### 9.4 Performance Requirements
- Lazy load WebGL hero.
- Lazy load images below the fold.
- Keep LCP under 3 seconds.
- Reduce particle count on mobile.
- Use `will-change` sparingly.
- Disconnect observers after triggering.

### 9.5 Accessibility
- WCAG AA contrast for all text.
- Visible focus rings (`ring-2 ring-cyan`).
- Semantic HTML (`nav`, `main`, `section`, `article`, `footer`).
- `aria-hidden` on decorative 3D canvas.
- Respect `prefers-reduced-motion`.
- Keyboard-navigable CTAs and form.

---

## 10. Asset Requirements

### 10.1 Existing Assets (Keep)
- `me.jpg` — profile photo.
- `fiserv.png`, `gorilla.png`, `tata.png` — company logos.
- `snu.png`, `mlm.jpg` — education logos.
- `rover.jpg`, `gpt.jpg`, `sign.jpg` — project images.
- `gen.jpg`, `cyber.jpg` — certification thumbnails.
- `logo.png` — existing logo (may be replaced by monogram).

### 10.2 New Assets to Create
- Monogram SVG ("S" mark).
- Optional: custom font loading via Google Fonts.

---

## 11. Responsive Strategy

### 11.1 Breakpoints
- Mobile: < 768px
- Tablet: 768px – 1024px
- Desktop: > 1024px

### 11.2 Key Adaptations
- Hero: stacked layout on mobile; monolith becomes background element or smaller focal.
- WebGL: optional disable on mobile; fallback to CSS monolith.
- Timeline: single-column left-aligned on mobile.
- Projects: horizontal scroll or stacked cards on mobile.
- Skills: accordion or vertical clusters on mobile.
- Navigation: full-screen mobile menu.

---

## 12. Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| WebGL performance on mobile | Lazy load; fallback to CSS; reduce DPR; optionally disable on touch devices. |
| GSAP + Framer conflicts | Use GSAP for scroll/parallax; Framer for hover/micro-interactions. Never animate same property with both. |
| Scroll jank | Limit simultaneous animations; use `will-change` sparingly; reduce particle count. |
| Build size increase | Tree-shake Three.js; code-split WebGL component; lazy load below-fold sections if needed. |
| Accessibility failures | Test keyboard nav; respect reduced motion; verify contrast. |

---

## 13. Success Criteria

- [ ] Site feels premium and unmistakably personal, not template-like.
- [ ] Hero makes a strong first impression with WebGL monolith.
- [ ] All sections have intentional, differentiated layouts.
- [ ] Animations are cinematic and purposeful.
- [ ] Copy is confident, human, and free of generic filler.
- [ ] Fully responsive across mobile, tablet, desktop.
- [ ] Respects reduced motion.
- [ ] Performs well (fast load, smooth scroll).
- [ ] All existing content preserved and elevated.

---

## 14. Open Decisions

None. Direction approved by user.

---

*Spec Version: 1.0*  
*Approved by: Sujan Sanjeev*  
*Next step: Implementation planning via writing-plans skill.*
