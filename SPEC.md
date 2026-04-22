# Portfolio Redesign — Technical Specification

## 1. Overview & Goals

Transform the existing light-themed React + Vite portfolio into an **Apple-inspired dark showcase** featuring immersive 3D elements, parallax scrolling, and choreographed scroll animations while **preserving all existing content**.

### Success Criteria
- [x] Dark-themed Apple-style portfolio (#0a0a0a base)
- [x] 3D floating name in hero section (React Three Fiber)
- [x] Smooth parallax scroll throughout all sections
- [x] Scroll-triggered animations on every section
- [x] Responsive on mobile / tablet / desktop
- [x] Fast loading (<3s LCP) with lazy-loaded 3D
- [x] Working contact section with enhanced interactions
- [x] Respects `prefers-reduced-motion`
- [x] All existing content preserved (bio, projects, experience, etc.)

---

## 2. Architecture Decision: Keep Vite + React

**Decision**: Retain the existing **React 18 + Vite 6 + Tailwind CSS 3** stack.

**Rationale**:
- The current build pipeline is production-ready (`dist/` exists, Vite config is clean).
- Migrating to Next.js offers no benefit for a static single-page portfolio and introduces unnecessary complexity (SSR hydration, `app/` router migration, potential deployment breakage).
- Vite's HMR and build speed are superior for this use case.
- All required libraries (GSAP, Framer Motion, Lenis) are already installed and working.

**What changes**: Folder restructure, dependency additions, global style overhaul, component rewrites.

---

## 3. Tech Stack & Dependencies

### Existing (Keep)
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.3.1 | UI framework |
| `react-dom` | ^18.3.1 | DOM renderer |
| `vite` | ^6.0.1 | Build tool |
| `tailwindcss` | ^3.4.16 | Styling |
| `framer-motion` | ^11.15.0 | Micro-interactions, page transitions |
| `gsap` | ^3.12.5 | ScrollTrigger timelines, parallax |
| `lenis` | ^1.3.21 | Smooth scroll engine |
| `react-icons` | ^5.4.0 | Tech stack icons |
| `lucide-react` | ^0.468.0 | UI icons |

### To Install
| Package | Purpose |
|---------|---------|
| `three` | Core 3D library |
| `@react-three/fiber` | React renderer for Three.js |
| `@react-three/drei` | Helpers (Text3D, Float, Environment) |
| `split-type` | Text splitting for scroll reveals |

### Dev Dependencies
No additional dev dependencies required.

---

## 4. File Structure

```
portfolio-project/
├── index.html                      # Updated meta tags, preconnects
├── vite.config.js                  # Keep as-is
├── tailwind.config.js              # Extended with dark theme tokens
├── package.json                    # Added deps
├── public/                         # Static assets
├── src/
│   ├── main.jsx                    # Entry point (keep StrictMode)
│   ├── App.jsx                     # Layout orchestrator, Lenis init
│   ├── index.css                   # Global styles, CSS vars, dark theme
│   ├── App.css                     # Font imports
│   ├── hooks/
│   │   ├── useMousePosition.js     # Global mouse tracker for 3D/magnetic
│   │   useScrollProgress.js        # Normalized scroll progress (0-1)
│   │   useMagneticEffect.js        # Magnetic hover logic
│   │   useTilt.js                  # 3D tilt on hover
│   │   useReducedMotion.js         # Wrapper for prefers-reduced-motion
│   ├── lib/
│   │   └── animations.js           # GSAP ScrollTrigger presets, easings
│   ├── components/
│   │   ├── LoadingScreen.jsx       # Initial load animation
│   │   ├── Navbar.jsx              # Fixed dark navbar, active states
│   │   ├── Hero.jsx                # 3D name + parallax + CTA
│   │   ├── About.jsx               # Parallax text + 3D tilt photo
│   │   ├── Education.jsx           # Dark-themed education cards
│   │   ├── Skills.jsx              # Floating parallax icons + counters
│   │   ├── Experience.jsx          # Enhanced timeline, dark theme
│   │   ├── Projects.jsx            # 3D tilt cards, staggered reveals
│   │   ├── Certifications.jsx      # Dark-themed cert cards
│   │   ├── Contact.jsx             # Animated form + magnetic socials
│   │   ├── ParticleBackground.jsx  # Dark-adapted canvas particles
│   │   ├── Canvas3D.jsx            # R3F Canvas for hero (lazy loaded)
│   │   ├── FloatingName.jsx        # 3D text mesh inside Canvas3D
│   │   ├── MagneticButton.jsx      # Reusable magnetic CTA
│   │   ├── TiltCard.jsx            # Reusable 3D perspective card
│   │   ├── ParallaxLayer.jsx       # Reusable parallax wrapper
│   │   ├── ScrollReveal.jsx        # Reusable scroll-triggered fade/slide
│   │   ├── Counter.jsx             # Animated number counter
│   │   ├── SplitText.jsx           # Text split for line-by-line reveal
│   │   └── Footer.jsx              # Subtle parallax footer
│   └── assets/                     # All images, logos, PDFs (keep all)
```

---

## 5. Design System

### Color Palette (Tailwind Config Extension)
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      dark: {
        950: '#050505',   // Deepest background
        900: '#0a0a0a',   // Primary background
        800: '#111111',   // Card/surface background
        700: '#1a1a1a',   // Elevated surface
        600: '#222222',   // Borders, dividers
        500: '#333333',   // Subtle borders
        400: '#666666',   // Muted text
        300: '#999999',   // Secondary text
        200: '#cccccc',   // Primary text dim
        100: '#f5f5f5',   // Primary text
      },
      accent: {
        blue: '#0066FF',
        blueGlow: '#3385FF',
        gold: '#D4AF37',
        goldGlow: '#E5C158',
      }
    },
    fontFamily: {
      sans: ['Inter', 'SF Pro Display', '-apple-system', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    animation: {
      'float': 'float 6s ease-in-out infinite',
      'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-20px)' },
      }
    }
  }
}
```

### Typography
- **Hero Name**: `clamp(3rem, 10vw, 8rem)`, weight 800, tracking tight
- **Section Headings**: `clamp(2rem, 5vw, 4rem)`, weight 700
- **Body**: `1rem` (16px) base, weight 400, line-height 1.6
- **Captions/Labels**: `0.875rem` (14px), weight 500, uppercase, tracking-widest

### Spacing
- Section vertical padding: `py-24 md:py-32 lg:py-40`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card border-radius: `rounded-2xl` (16px) or `rounded-3xl` (24px)
- Card gap: `gap-6 md:gap-8`

### Easing & Duration
- **Micro-interactions**: `cubic-bezier(0.25, 0.1, 0.25, 1)`, 300ms
- **Reveals**: `cubic-bezier(0.16, 1, 0.3, 1)`, 800ms
- **Parallax scrub**: `power1.out` (GSAP)
- **3D transitions**: `power2.out`, 600ms

---

## 6. Global Features

### 6.1 Smooth Scroll
**Keep existing Lenis setup** in `App.jsx` with these tweaks:
- Reduce `duration` from `1.2` to `1.0` for snappier Apple-like feel.
- Ensure `lenis.destroy()` is called on unmount.

### 6.2 Loading Screen
**New component**: `LoadingScreen.jsx`
- Full-screen overlay (`fixed inset-0 z-[100]`).
- Dark background (`bg-dark-950`).
- Animated logo or name reveal.
- Progress bar or percentage counter.
- Fades out with Framer Motion `AnimatePresence` after all critical assets loaded.
- Duration: ~2s minimum for perceived quality.

### 6.3 Navbar
**Rewrite**: `Navbar.jsx`
- Fixed top, transparent → `bg-dark-900/80 backdrop-blur-xl` on scroll.
- Remove light-theme classes (`bg-white/95`, `text-gray-900`).
- Active state: `text-accent-blue` with underline indicator.
- Mobile menu: dark slide-out (`bg-dark-800`).
- Height: `h-16 md:h-20`.

### 6.4 Scroll-to-Top Button
**Keep existing** in `App.jsx` but restyle:
- `bg-accent-blue` instead of gradient.
- `hover:bg-accent-blueGlow`.
- Subtle scale on hover.

### 6.5 Particle Background
**Enhance**: `ParticleBackground.jsx`
- Adapt colors for dark theme: particles use `hsla(220, 60%, 50%, ...)` → `hsla(220, 60%, 70%, ...)`.
- Connection lines: `rgba(0, 102, 255, 0.08)` instead of indigo.
- Mouse glow: `rgba(0, 102, 255, 0.05)`.
- Reduce particle count on mobile (`< 768px`) to 40 for performance.

---

## 7. Section Specifications

### 7.1 Hero Section (`Hero.jsx`)
**Replaces `Home.jsx`**

#### Layout
- Full viewport (`min-h-screen`, `relative`, `overflow-hidden`).
- **Background layers** (z-index stack):
  1. `ParticleBackground` (fixed, z-0)
  2. Subtle mesh gradient overlay (CSS radial gradients, z-1)
  3. 3D Canvas (`Canvas3D.jsx`, z-5, `pointer-events-none`)
  4. Content (`z-10`)

#### 3D Floating Name
**Component**: `FloatingName.jsx` inside `Canvas3D.jsx`
- Uses `@react-three/drei` `<Text>` or `<Text3D>`.
- Text: `"Sujan Sanjeev"`.
- Material: `MeshStandardMaterial` with `metalness: 0.8`, `roughness: 0.2`, color `#D4AF37` (gold).
- Animation: `<Float>` from drei (speed: 2, rotationIntensity: 0.3, floatIntensity: 0.5).
- Position: centered, slightly behind text content (`position-z: -2`).
- Lighting: `<AmbientLight intensity={0.5} />` + `<PointLight position={[10, 10, 10]} intensity={1} color="#0066FF" />`.
- Fallback: If WebGL fails or reduced motion is preferred, show CSS 3D text fallback.

#### Content (below/overlaying 3D)
- **Greeting**: `"Hello, I am"` — fade in, tracking-widest, `text-dark-300`.
- **Name (CSS fallback)**: `"Sujan Sanjeev"` — large, bold, `text-dark-100`. If 3D is active, this is hidden on desktop but shown on mobile.
- **Role carousel**: Keep existing rotating roles but update styling:
  - Gradient text: `from-accent-blue to-accent-gold`.
  - Faster transition (2.5s interval).
- **Description**: Updated dark text colors.
- **CTA Buttons**:
  - Primary: `<MagneticButton>` — "Let's Connect", `bg-accent-blue`, rounded-full.
  - Secondary: `<MagneticButton>` — "Explore My Work", bordered, `border-dark-600`.
- **Feature cards**: 4 cards in a grid, `bg-dark-800/50 backdrop-blur-md border-dark-700`.
- **Scroll indicator**: Mouse wheel icon, `border-dark-600`, animated dot.

#### Entrance Animations
1. Loading screen fades out.
2. Greeting fades in (0.3s delay).
3. 3D name floats in from `z: -10` to `z: 0` (1s, `power3.out`).
4. Role carousel fades in (0.6s delay).
5. Description + CTAs fade up (0.8s delay).
6. Feature cards stagger in (1.0s delay, 0.1s stagger).

---

### 7.2 About Section (`About.jsx`)

#### Layout
- Two-column grid on desktop (`md:grid-cols-2`), single column on mobile.
- Background: `bg-dark-900`.

#### Left Column — Profile Photo
- **3D Tilt on Hover**: `useTilt` hook.
  - `perspective: 1000px` on container.
  - On `mousemove`, calculate `rotateX` and `rotateY` based on cursor position relative to card center.
  - Max rotation: `±15deg`.
  - Smooth return to `0deg` on `mouseleave` (spring animation).
  - Glare effect: CSS pseudo-element with `linear-gradient` that follows mouse.
- Image: `me.jpg`, `rounded-3xl`.
- Decorative glow behind image: `absolute -inset-4 bg-gradient-to-r from-accent-blue/20 to-accent-gold/20 blur-2xl`.
- Floating badge ("Currently at FISERV India"): keep but dark-themed (`bg-dark-800 border-dark-700`).

#### Right Column — Text Content
- **Parallax Text Reveal**: Use `SplitText` + GSAP ScrollTrigger.
  - Split bio paragraph into lines.
  - Each line starts at `y: 40, opacity: 0`.
  - On scroll (trigger: `top 80%`), stagger lines to `y: 0, opacity: 1`.
  - Stagger: 0.05s per line.
- Stats grid (4 items): `Years Learning`, `Projects`, `Technologies`, `Certifications`.
  - Numbers use `<Counter>` component (animate from 0 to value).
  - Triggered when section enters viewport.

#### Entrance Animations
- Section title: `ScrollReveal` (fade up).
- Left column: slide in from left (`x: -50 → 0`).
- Right column: slide in from right (`x: 50 → 0`).
- Stats: stagger up from bottom.

---

### 7.3 Education Section (`Education.jsx`)

#### Layout
- Keep existing featured card + grid layout.
- Background: `bg-dark-900` with subtle top border (`border-t border-dark-800`).

#### Styling Updates
- All cards: `bg-dark-800 border-dark-700`.
- Text: `text-dark-100` headings, `text-dark-300` body.
- Badges: `bg-accent-blue/10 text-accent-blue` for "Current", `bg-dark-700 text-dark-300` for duration.
- Score badge: gradient `from-accent-blue to-accent-gold`.

#### Animations
- Featured card: `ScrollReveal` with scale (`0.95 → 1`).
- Grid cards: staggered fade-up (`delay: index * 0.1`).

---

### 7.4 Skills Section (`Skills.jsx`)

#### Layout
- Background: `bg-dark-900`.
- Keep category grouping.

#### Floating Tech Stack Icons
- **Parallax depth**: Each icon row moves at a different scroll speed.
  - Row 1 (Languages): `data-speed="1.0"` (normal)
  - Row 2 (Mainframe): `data-speed="0.8"` (slower, deeper)
  - Row 3 (Web Dev): `data-speed="1.2"` (faster, closer)
  - Implementation: GSAP ScrollTrigger `scrub` with `y` translation based on speed multiplier.
- **Icon styling**:
  - Container: `bg-dark-800 border-dark-700 rounded-2xl p-4`.
  - Icon size: `w-12 h-12 md:w-14 md:h-14`.
  - Hover: `scale-110`, `border-accent-blue/50`, glow shadow.
  - Label: `text-dark-300 group-hover:text-accent-blue`.

#### Counter Animation
- Add a stats row above or below icons:
  - `1.5+ Years` (Counter)
  - `20+ Technologies` (Counter)
  - `3+ Certifications` (Counter)
- Triggered on scroll into view.

#### Animations
- Category headers: fade in.
- Icons: stagger scale-in (`scale: 0.8 → 1, opacity: 0 → 1`).

---

### 7.5 Experience Section (`Experience.jsx`)

#### Layout
- Keep vertical timeline layout.
- Background: `bg-dark-900`.

#### Styling Updates
- Timeline line: `bg-gradient-to-b from-accent-blue via-accent-gold to-accent-blue`.
- Cards: `bg-dark-800 border-dark-700`.
- Dots: company brand colors with `shadow-lg shadow-[color]/30`.
- "Current" pulse: `animate-ping` on FISERV dot.

#### Enhanced Animations
- **Timeline line drawing**: Keep existing GSAP `scaleY: 0 → 1` with ScrollTrigger scrub.
- **Card entrances**: Enhance with 3D tilt (`TiltCard` wrapper on hover).
- **Alternating slide**: Left cards slide from left, right cards from right (keep existing but smoother easing).

---

### 7.6 Projects Section (`Projects.jsx`)

#### Layout
- Background: `bg-dark-900`.
- Desktop: 3-column grid. Mobile: horizontal scroll (keep existing).

#### 3D Card Tilt
- Wrap each project card in `<TiltCard>`:
  - `perspective: 1000px`.
  - Hover: `rotateX`, `rotateY` based on mouse position.
  - Max rotation: `±10deg`.
  - Glare overlay: white gradient at 10% opacity, follows mouse.
  - Scale: `1.02` on hover.

#### Scroll-Triggered Animations
- Cards stagger in from bottom (`y: 80 → 0, opacity: 0 → 1`).
- Stagger: `0.15s` between cards.
- Trigger: `top 85%`.

#### Hover Effects
- Image: `scale-110` inside overflow-hidden container.
- Gradient overlay: `opacity-0 → opacity-20` on hover.
- Title: `text-accent-blue` transition.

#### Content Preservation
Keep all 3 projects exactly as-is:
1. Autonomous Rover (ROS, Python, SLAM)
2. AI Teaching Assistant (GPT-3, Streamlit)
3. Sign Language Tool (Mediapipe, OpenCV)

---

### 7.7 Certifications Section (`Certifications.jsx`)

#### Layout
- Background: `bg-dark-900`.
- Keep 2-column grid.

#### Styling Updates
- Cards: `bg-dark-800 border-dark-700`.
- Top color bar: keep brand colors.
- Badge: `bg-dark-700` with colored icon.
- Skill tags: colored border/text on dark bg.

#### Animations
- Cards: `ScrollReveal` with slight rotation (`rotateX: 5deg → 0`) for 3D feel.
- Stats row: counters animate in.

---

### 7.8 Contact Section (`Contact.jsx`)
**Replaces `ContactMe.jsx`**

#### Layout
- Background: `bg-dark-900` with subtle radial gradient (`from-accent-blue/5` at top center).
- Two parts: contact links grid + simple form + footer.

#### Animated Form Fields
- **New addition**: Simple contact form (Name, Email, Message).
- Each field:
  - Label floats up on focus (like Material Design).
  - Bottom border animates from center outward (`scaleX: 0 → 1`) in `accent-blue`.
  - Background: `bg-dark-800`.
  - Text: `text-dark-100`.
  - Placeholder: `text-dark-500`.
- Submit button: `<MagneticButton>`, `bg-accent-blue`, full width.

#### Social Links with Magnetic Hover
- Wrap each link in `<MagneticButton>` or `<MagneticLink>`.
- Icon container: `w-14 h-14 rounded-xl bg-gradient-to-r`.
- On hover: button moves toward cursor (max 15px offset), icon scales up.

#### Footer
- Subtle parallax: footer content moves slightly slower than scroll.
- Text: `text-dark-500`.
- Divider: `bg-gradient-to-r from-transparent via-dark-700 to-transparent`.

---

## 8. Reusable Components

### 8.1 `Canvas3D.jsx`
```jsx
// Lazy-loaded R3F Canvas
import { Suspense, lazy } from 'react';
const Canvas = lazy(() => import('@react-three/fiber').then(m => ({ default: m.Canvas })));

// Props: children (3D scene), className
// Wraps in Suspense with fallback: null or loading spinner
// canvas props: dpr={[1, 2]}, gl={{ antialias: true, alpha: true }}
```

### 8.2 `FloatingName.jsx`
```jsx
// Inside Canvas3D
import { Text, Float } from '@react-three/drei';

// Text props:
//   fontSize: 1.5 (scaled by viewport)
//   color: '#D4AF37'
//   metalness: 0.8
//   roughness: 0.2
//   font: '/fonts/Inter-Bold.woff' (or system font via drei)
// Float props: speed={2}, floatIntensity={0.5}
```

### 8.3 `MagneticButton.jsx`
```jsx
// Props: children, className, strength=0.3 (0-1)
// Uses useMagneticEffect hook
// On mousemove: translateX/Y toward cursor (max 15px)
// On mouseleave: spring back to 0,0
// Framer Motion: whileHover scale, whileTap scale
```

### 8.4 `TiltCard.jsx`
```jsx
// Props: children, className, tiltAmount=10, glare=true
// Uses useTilt hook
// CSS: transform-style: preserve-3d, perspective: 1000px
// On mousemove: rotateX, rotateY based on cursor position
// Optional glare: pseudo-element with radial gradient
```

### 8.5 `ParallaxLayer.jsx`
```jsx
// Props: children, speed=1, className
// speed < 1: moves slower (background)
// speed > 1: moves faster (foreground)
// Uses GSAP ScrollTrigger scrub
// translateY calculated from element's scroll progress
```

### 8.6 `ScrollReveal.jsx`
```jsx
// Props: children, direction='up' (up/down/left/right), delay=0, duration=0.8
// Uses Framer Motion whileInView
// Configurable: once=true, amount=0.3
```

### 8.7 `Counter.jsx`
```jsx
// Props: end, duration=2, suffix="", prefix=""
// Uses GSAP to tween a ref value from 0 to end
// Triggered by IntersectionObserver or ScrollTrigger
// Displays integer or decimal based on prop
```

### 8.8 `SplitText.jsx`
```jsx
// Props: children (string), className
// Uses split-type library to split into lines/words/chars
// Returns spans with data attributes for GSAP targeting
```

---

## 9. Animation Strategy

### 9.1 GSAP ScrollTrigger Patterns
```js
// Parallax layer
gsap.to(element, {
  y: () => (1 - speed) * 100,
  ease: 'none',
  scrollTrigger: {
    trigger: element,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
  },
});

// Staggered reveal
gsap.from(elements, {
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: container,
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
});

// Text line reveal
gsap.from(lines, {
  y: 40,
  opacity: 0,
  duration: 0.6,
  stagger: 0.05,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: textBlock,
    start: 'top 75%',
  },
});
```

### 9.2 Framer Motion Patterns
```jsx
// Entrance
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
/>

// Hover
<motion.div
  whileHover={{ scale: 1.02, y: -5 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
/>
```

### 9.3 Reduced Motion
All animations must check `useReducedMotion`:
```js
const prefersReducedMotion = useReducedMotion();

if (prefersReducedMotion) {
  // Skip GSAP animations, show final state immediately
  // Disable 3D tilt, parallax, and float
}
```

---

## 10. Performance Plan

### 10.1 Lazy Loading
- `Canvas3D.jsx`: Lazy load with `React.lazy()` + `Suspense`.
- Images: Already using `loading="lazy"` in some places; ensure all project/cert images have it.
- Fonts: Preload `Inter` and `JetBrains Mono` in `index.html`.

### 10.2 Canvas Optimization
- Particle count: 80 desktop → 40 mobile → 20 on low-power mode.
- Use `will-change: transform` sparingly, only on actively animating elements.
- Disconnect IntersectionObservers after triggering.

### 10.3 3D Optimization
- R3F Canvas: `dpr={[1, 2]}` (max DPR 2).
- Disable antialiasing on mobile if needed.
- Use simple geometries (Text geometry is expensive; consider using `<Text>` from drei which uses MSDF).
- If performance is poor, fallback to CSS 3D text.

### 10.4 Bundle
- Tree-shake unused Framer Motion features.
- Import only needed GSAP plugins (`ScrollTrigger`, `ScrollToPlugin`).
- Code-split sections if needed (though Vite handles this well).

---

## 11. Accessibility

- **Color contrast**: All text meets WCAG AA (4.5:1 for body, 3:1 for large text).
- **Focus states**: Visible focus rings on all interactive elements (`ring-2 ring-accent-blue`).
- **Semantic HTML**: Use `<section>`, `<nav>`, `<main>`, `<article>`, `<footer>`.
- **ARIA labels**: On 3D canvas (`aria-hidden="true"`), navigation (`aria-current`), form fields (`aria-required`).
- ** prefers-reduced-motion**: Disable parallax, 3D tilt, float animations, and particle motion. Show static states.
- **Keyboard navigation**: Ensure all CTAs, cards, and links are tabbable.

---

## 12. SEO Preservation

Keep existing `index.html` meta tags and enhance:
```html
<meta name="theme-color" content="#0a0a0a" />
<meta property="og:title" content="Sujan Sanjeev D | Software Engineer" />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:image" content="/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## 13. Implementation Phases

### Phase 1: Foundation
1. Update `tailwind.config.js` with dark theme tokens.
2. Rewrite `index.css` for dark theme + CSS variables.
3. Create `hooks/` and `lib/` utilities.
4. Create reusable components: `ScrollReveal`, `Counter`, `MagneticButton`, `TiltCard`, `ParallaxLayer`.

### Phase 2: Global Shell
1. Rewrite `Navbar.jsx` (dark theme).
2. Create `LoadingScreen.jsx`.
3. Update `App.jsx` layout orchestration.
4. Enhance `ParticleBackground.jsx` for dark theme.

### Phase 3: Core Sections
1. `Hero.jsx` with 3D name (`Canvas3D` + `FloatingName`).
2. `About.jsx` with parallax text + 3D tilt photo.
3. `Projects.jsx` with 3D tilt cards.

### Phase 4: Supporting Sections
1. `Skills.jsx` with floating parallax icons.
2. `Experience.jsx` dark theme + enhanced timeline.
3. `Education.jsx` dark theme.
4. `Certifications.jsx` dark theme.

### Phase 5: Contact & Polish
1. `Contact.jsx` with form + magnetic socials.
2. `Footer.jsx` with subtle parallax.
3. Responsive testing (mobile, tablet, desktop).
4. Reduced motion testing.
5. Performance audit (Lighthouse).

---

## 14. Content Preservation Checklist

| Content | Location | Action |
|---------|----------|--------|
| Name: Sujan Sanjeev D | Hero, Navbar, About, Footer | Preserve, restyle |
| Role: Software Engineer @ FISERV | Hero, About, Navbar | Preserve, restyle |
| Bio text | About | Preserve, apply split-text animation |
| Profile photo (`me.jpg`) | About | Preserve, add 3D tilt |
| Education data (SNU, MLM) | Education | Preserve, dark theme |
| Skills list (25+ techs) | Skills | Preserve, add parallax |
| Experience (FISERV, Gorilla, Tata) | Experience | Preserve, enhance animations |
| Projects (Rover, AI TA, Sign Language) | Projects | Preserve, add 3D cards |
| Certifications (Gen AI, Cybersec) | Certifications | Preserve, dark theme |
| Contact info (email, LinkedIn, GitHub) | Contact | Preserve, add magnetic hover |
| All images in `src/assets/` | Various | Keep all imports and references |

---

## 15. Risk Mitigation

| Risk | Mitigation |
|------|------------|
| 3D text performance on mobile | Lazy-load Canvas; fallback to CSS 3D text; reduce DPR |
| GSAP + Framer Motion conflicts | Use GSAP for scroll, Framer for hover/entrance. Don't animate same property. |
| Scroll jank | Use `will-change` sparingly; disable complex particles on mobile |
| Build size increase | Tree-shake Three.js; use `React.lazy` for Canvas3D |
| Accessibility failures | Test with keyboard only + screen reader; respect reduced motion |

---

*Spec Version: 1.0*
*Date: 2025-01-20*
*Author: DOT (AI Agent)*
