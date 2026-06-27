# MONOLITH Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Sujan Sanjeev's portfolio into a premium personal brand experience with a WebGL crystalline monolith hero, cinematic scroll animations, and refined dark aesthetic.

**Architecture:** Single-page React + Vite app with Tailwind CSS. GSAP ScrollTrigger drives scroll reveals and parallax. Framer Motion handles micro-interactions. Lenis provides smooth scrolling. A lazy-loaded React Three Fiber canvas renders the hero monolith with a CSS fallback. All sections are composable components under `src/components/`.

**Tech Stack:** React 18, Vite 6, Tailwind CSS 3, GSAP, Framer Motion, Lenis, Three.js, React Three Fiber, Drei, split-type.

---

## File Map

| File | Responsibility |
|------|----------------|
| `tailwind.config.js` | Design tokens: colors, fonts, animations |
| `src/index.css` | Global CSS variables, base styles, utility layers |
| `index.html` | Font preconnects, meta tags |
| `src/lib/animations.js` | Reusable GSAP ScrollTrigger presets |
| `src/hooks/*.js` | useReducedMotion, useMousePosition, useScrollProgress |
| `src/components/Monogram.jsx` | SVG monogram mark |
| `src/components/ScrollReveal.jsx` | Viewport-triggered fade/slide wrapper |
| `src/components/SplitText.jsx` | Text split for line/word reveals |
| `src/components/Counter.jsx` | Animated number counter |
| `src/components/MagneticButton.jsx` | Magnetic hover button/link |
| `src/components/TiltCard.jsx` | 3D perspective tilt card |
| `src/components/ParallaxLayer.jsx` | Scroll-speed parallax wrapper |
| `src/components/LoadingScreen.jsx` | Intro loader with monogram reveal |
| `src/components/Navbar.jsx` | Fixed nav with scroll spy |
| `src/components/ParticleBackground.jsx` | Subtle dark particle field |
| `src/components/MonolithFallback.jsx` | CSS crystalline shape fallback |
| `src/components/MonolithCanvas.jsx` | WebGL monolith scene |
| `src/components/Hero.jsx` | Hero section |
| `src/components/About.jsx` | About section |
| `src/components/Mindset.jsx` | Three visionary statements |
| `src/components/Experience.jsx` | Timeline |
| `src/components/Projects.jsx` | Featured + project panels |
| `src/components/Skills.jsx` | Skill clusters |
| `src/components/Education.jsx` | Education cards |
| `src/components/Certifications.jsx` | Certification cards |
| `src/components/Contact.jsx` | Contact + form |
| `src/components/Footer.jsx` | Footer brand close |
| `src/App.jsx` | Layout orchestrator, Lenis, section wiring |

---

## Phase 1: Foundation

### Task 1: Update Tailwind Config

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Replace theme extension with new tokens**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
          dim: 'rgba(0, 229, 255, 0.1)',
        },
        amber: {
          DEFAULT: '#FFB84D',
          glow: '#FFCA70',
          dim: 'rgba(255, 184, 77, 0.1)',
        },
        silver: '#C8D4E8',
        'text-primary': '#F0F2F5',
        'text-secondary': '#9CA3AF',
        'text-muted': '#6B7280',
        border: 'rgba(255, 255, 255, 0.08)',
        dark: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
          500: '#333333',
          400: '#666666',
          300: '#999999',
          200: '#cccccc',
          100: '#f5f5f5',
        },
        accent: {
          blue: '#0066FF',
          blueGlow: '#3385FF',
          gold: '#D4AF37',
          goldGlow: '#E5C158',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Source Serif 4', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Verify config**

Run:
```bash
npm run dev
```

Expected: Vite dev server starts without Tailwind errors.

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.js
git commit -m "chore: add MONOLITH design tokens to Tailwind config"
```

---

### Task 2: Global Styles and Fonts

**Files:**
- Modify: `src/index.css`
- Modify: `index.html`

- [ ] **Step 1: Add Google Fonts to index.html**

Modify `index.html` inside `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Rewrite src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --void: #030305;
  --surface-1: #08080C;
  --surface-2: #101018;
  --surface-3: #161620;
  --cyan: #00E5FF;
  --cyan-glow: #33EBFF;
  --amber: #FFB84D;
  --amber-glow: #FFCA70;
  --silver: #C8D4E8;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: auto;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--void);
  color: #F0F2F5;
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

::selection {
  background-color: rgba(0, 229, 255, 0.25);
  color: #ffffff;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--void);
}

::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #444;
}

/* Utility for gradient text */
.gradient-text {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--amber) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 3: Clear App.css**

Modify `src/App.css` to contain only necessary global overrides (mostly empty):

```css
/* App-specific global styles */
```

- [ ] **Step 4: Verify**

Run:
```bash
npm run dev
```

Expected: Page renders with dark background (#030305).

- [ ] **Step 5: Commit**

```bash
git add src/index.css src/App.css index.html
git commit -m "chore: add global styles, fonts, and CSS variables"
```

---

### Task 3: Animation Presets Library

**Files:**
- Create: `src/lib/animations.js`

- [ ] **Step 1: Create presets file**

```js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (element, options = {}) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      ...options,
    }
  );
};

export const staggerFadeUp = (elements, container, options = {}) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        ...options.scrollTrigger,
      },
      ...options,
    }
  );
};

export const revealTextLines = (lines, container) => {
  return gsap.fromTo(
    lines,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

export const parallaxY = (element, speed = 0.5) => {
  return gsap.to(element, {
    y: () => (1 - speed) * 200,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

export const drawLine = (element, trigger) => {
  return gsap.fromTo(
    element,
    { scaleY: 0 },
    {
      scaleY: 1,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: trigger,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    }
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/animations.js
git commit -m "chore: add GSAP animation presets library"
```

---

### Task 4: Custom Hooks

**Files:**
- Create: `src/hooks/useReducedMotion.js`
- Create: `src/hooks/useMousePosition.js`
- Create: `src/hooks/useScrollProgress.js`
- Modify: `src/hooks/useTilt.js` (if needed)
- Modify: `src/hooks/useMagneticEffect.js` (if needed)

- [ ] **Step 1: Create useReducedMotion.js**

```js
import { useState, useEffect } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

export default useReducedMotion;
```

- [ ] **Step 2: Create useMousePosition.js**

```js
import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

export default useMousePosition;
```

- [ ] **Step 3: Create useScrollProgress.js**

```js
import { useState, useEffect } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

export default useScrollProgress;
```

- [ ] **Step 4: Review existing hooks**

Check `src/hooks/useTilt.js` and `src/hooks/useMagneticEffect.js` to ensure they work with the new design. Keep them if functional; adjust if needed.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useReducedMotion.js src/hooks/useMousePosition.js src/hooks/useScrollProgress.js
git commit -m "chore: add reduced-motion, mouse-position, and scroll-progress hooks"
```

---

## Phase 2: Reusable Components

### Task 5: Monogram Component

**Files:**
- Create: `src/components/Monogram.jsx`

- [ ] **Step 1: Create SVG monogram**

```jsx
const Monogram = ({ className = 'w-8 h-8', stroke = '#00E5FF', accent = '#FFB84D' }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 8L20 32L32 8"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20H28"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Monogram;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Monogram.jsx
git commit -m "feat: add faceted S monogram component"
```

---

### Task 6: ScrollReveal Component

**Files:**
- Create: `src/components/ScrollReveal.jsx`

- [ ] **Step 1: Implement with Framer Motion**

```jsx
import { motion } from 'framer-motion';
import useReducedMotion from '../hooks/useReducedMotion';

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ScrollReveal.jsx
git commit -m "feat: add ScrollReveal component"
```

---

### Task 7: SplitText Component

**Files:**
- Create: `src/components/SplitText.jsx`

- [ ] **Step 1: Implement using split-type**

```jsx
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useReducedMotion from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const split = new SplitType(ref.current, { types: 'lines,words' });

    gsap.fromTo(
      split.words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.03,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill();
      });
    };
  }, [prefersReducedMotion, delay]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
};

export default SplitText;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/SplitText.jsx
git commit -m "feat: add SplitText component for scroll reveals"
```

---

### Task 8: Counter Component

**Files:**
- Create: `src/components/Counter.jsx`

- [ ] **Step 1: Implement animated counter**

```jsx
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ end, duration = 2, suffix = '', prefix = '', decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default Counter;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Counter.jsx
git commit -m "feat: add animated Counter component"
```

---

### Task 9: MagneticButton Component

**Files:**
- Create: `src/components/MagneticButton.jsx`

- [ ] **Step 1: Implement magnetic hover**

```jsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useReducedMotion from '../hooks/useReducedMotion';

const MagneticButton = ({ children, className = '', strength = 0.3, onClick, href }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) * strength;
    const y = (e.clientY - centerY) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

export default MagneticButton;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/MagneticButton.jsx
git commit -m "feat: add MagneticButton component"
```

---

### Task 10: TiltCard Component

**Files:**
- Create: `src/components/TiltCard.jsx`

- [ ] **Step 1: Implement 3D tilt**

```jsx
import { useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

const TiltCard = ({ children, className = '', tiltAmount = 10, glare = true }) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -tiltAmount;
    const rotateY = ((x - centerX) / centerX) * tiltAmount;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setGlarePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)');
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-transform duration-200 ease-out"
        style={{ transform: transform }}
      >
        {children}
        {glare && !prefersReducedMotion && (
          <div
            className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-inherit"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
              borderRadius: 'inherit',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TiltCard;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/TiltCard.jsx
git commit -m "feat: add TiltCard component with glare"
```

---

### Task 11: ParallaxLayer Component

**Files:**
- Create: `src/components/ParallaxLayer.jsx`

- [ ] **Step 1: Implement parallax wrapper**

```jsx
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useReducedMotion from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const ParallaxLayer = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    const animation = gsap.to(ref.current, {
      y: () => (1 - speed) * 150,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === ref.current) st.kill();
      });
    };
  }, [prefersReducedMotion, speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ParallaxLayer;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ParallaxLayer.jsx
git commit -m "feat: add ParallaxLayer component"
```

---

## Phase 3: Global Shell

### Task 12: Loading Screen

**Files:**
- Create: `src/components/LoadingScreen.jsx`

- [ ] **Step 1: Implement loader**

```jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Monogram from './Monogram';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Monogram className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="mt-8 h-0.5 w-32 bg-surface-2 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan to-amber"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/LoadingScreen.jsx
git commit -m "feat: add LoadingScreen with monogram reveal"
```

---

### Task 13: Navbar

**Files:**
- Create: `src/components/Navbar.jsx`

- [ ] **Step 1: Implement fixed navbar**

```jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Monogram from './Monogram';

const Navbar = ({ handleScroll }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Work', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id) => {
    handleScroll(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-surface-1/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group"
          >
            <Monogram className="w-7 h-7 group-hover:scale-110 transition-transform" />
            <span className="font-display font-semibold text-text-primary tracking-tight hidden sm:block">
              Sujan Sanjeev
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>
      </motion.nav>

      {mobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-3xl font-display font-semibold text-text-primary hover:text-cyan transition-colors"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "feat: add fixed Navbar with monogram and mobile menu"
```

---

### Task 14: Footer

**Files:**
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Implement footer**

```jsx
import { motion } from 'framer-motion';
import Monogram from './Monogram';

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 bg-void relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Monogram className="w-10 h-10 mb-6" />
          <p className="text-lg md:text-xl font-display text-text-primary mb-2">
            Built by Sujan Sanjeev.
          </p>
          <p className="text-text-muted text-sm md:text-base mb-8">
            Systems, curiosity, discipline.
          </p>
          <p className="text-text-muted/60 text-xs">
            © {new Date().getFullYear()} Sujan Sanjeev D. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: add Footer with monogram close"
```

---

### Task 15: Particle Background

**Files:**
- Modify: `src/components/ParticleBackground.jsx`

- [ ] **Step 1: Refine existing component for dark theme**

Keep the existing canvas particle implementation but adapt colors to cyan/amber, reduce count on mobile, and lower opacity. Ensure it doesn't conflict with the WebGL hero.

```jsx
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 70;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 229, 255, 0.35)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.06 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ParticleBackground.jsx
git commit -m "feat: refine ParticleBackground for MONOLITH palette"
```

---

## Phase 4: WebGL Hero

### Task 16: Monolith Fallback

**Files:**
- Create: `src/components/MonolithFallback.jsx`

- [ ] **Step 1: Create CSS crystalline shape**

```jsx
const MonolithFallback = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-transparent to-amber/20 blur-3xl" />
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="w-48 h-64 md:w-64 md:h-80 bg-gradient-to-br from-surface-2 via-surface-3 to-surface-2 opacity-90"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            boxShadow: 'inset 0 0 60px rgba(0, 229, 255, 0.15), 0 0 80px rgba(0, 229, 255, 0.2)',
          }}
        />
        <div
          className="absolute w-40 h-56 md:w-52 md:h-72 bg-gradient-to-tr from-cyan/10 to-amber/10"
          style={{
            clipPath: 'polygon(50% 5%, 95% 28%, 95% 72%, 50% 95%, 5% 72%, 5% 28%)',
          }}
        />
      </div>
    </div>
  );
};

export default MonolithFallback;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/MonolithFallback.jsx
git commit -m "feat: add CSS MonolithFallback for mobile/reduced-motion"
```

---

### Task 17: Monolith Canvas (WebGL)

**Files:**
- Create: `src/components/MonolithCanvas.jsx`

- [ ] **Step 1: Implement WebGL monolith**

```jsx
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import useMousePosition from '../hooks/useMousePosition';
import useReducedMotion from '../hooks/useReducedMotion';

const MonolithMesh = () => {
  const meshRef = useRef();
  const mouse = useMousePosition();
  const reducedMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (!meshRef.current || reducedMotion) return;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouse.y * 0.15,
      0.05
    );
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      mouse.x * 0.1,
      0.05
    );
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 2}
      rotationIntensity={reducedMotion ? 0 : 0.3}
      floatIntensity={reducedMotion ? 0 : 0.5}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 0]} />
        <meshPhysicalMaterial
          color="#00E5FF"
          metalness={0.9}
          roughness={0.15}
          transmission={0.2}
          thickness={1.5}
          emissive="#001F3F"
          emissiveIntensity={0.4}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      <mesh scale={1.02}>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial color="#FFB84D" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
};

const MonolithCanvas = ({ className = '' }) => {
  return (
    <div className={`${className}`} aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#00E5FF" />
        <pointLight position={[-5, -5, 3]} intensity={0.8} color="#FFB84D" />
        <Suspense fallback={null}>
          <MonolithMesh />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MonolithCanvas;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/MonolithCanvas.jsx
git commit -m "feat: add WebGL MonolithCanvas with R3F"
```

---

### Task 18: Hero Section

**Files:**
- Create: `src/components/Hero.jsx`

- [ ] **Step 1: Build hero with monolith, content, and animations**

```jsx
import { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import Monogram from './Monogram';

const MonolithCanvas = lazy(() => import('./MonolithCanvas'));
const MonolithFallback = lazy(() => import('./MonolithFallback'));

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Gen AI Enthusiast',
  'Tech Explorer',
];

const Hero = ({ isLoading }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setLoaded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!showRole) return;
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [showRole]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const statBadges = [
    { label: 'Years', value: '1.5+' },
    { label: 'Projects', value: '5+' },
    { label: 'Tech', value: '20+' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 md:pt-0"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 70% 50%, rgba(0, 229, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 30% 60%, rgba(255, 184, 77, 0.08) 0%, transparent 40%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <motion.p
              className="text-xs md:text-sm uppercase tracking-[0.2em] text-text-muted mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Software Engineer · Systems Thinker · Builder
            </motion.p>

            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tight leading-[0.95] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => setShowRole(true)}
            >
              Sujan
              <br />
              <span className="gradient-text">Sanjeev</span>
            </motion.h1>

            <motion.div
              className="h-8 md:h-10 mb-6"
              initial={{ opacity: 0 }}
              animate={showRole ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  className="inline-block text-lg md:text-xl font-medium gradient-text"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="text-text-secondary text-base md:text-lg max-w-md mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={showRole ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Building enterprise systems at FISERV India. Exploring AI, open-source software, and the future of technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={showRole ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <MagneticButton
                onClick={() => scrollTo('contact')}
                className="px-8 py-3.5 bg-cyan text-void font-semibold rounded-full hover:bg-cyan-glow transition-colors text-center"
              >
                Let&apos;s Connect
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollTo('projects')}
                className="px-8 py-3.5 border border-border text-text-primary rounded-full hover:border-cyan hover:text-cyan transition-colors text-center"
              >
                Explore Work
              </MagneticButton>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={showRole ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {statBadges.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl md:text-2xl font-display font-bold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Monolith */}
          <motion.div
            className="order-1 md:order-2 h-[300px] md:h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Suspense fallback={<MonolithFallback className="w-full h-full" />}>
              <MonolithCanvas className="w-full h-full" />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={showRole ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
          Scroll
        </span>
        <div className="w-5 h-8 border border-border rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-1.5 bg-cyan rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: add Hero section with monolith and entrance animations"
```

---

## Phase 5: Content Sections

### Task 19: About Section

**Files:**
- Create: `src/components/About.jsx`

- [ ] **Step 1: Implement About with tilt portrait and manifesto**

```jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import Counter from './Counter';
import SplitText from './SplitText';
import profileImage from '../assets/me.jpg';

const About = () => {
  const tags = [
    'Software Engineering',
    'Full Stack Development',
    'AI / ML',
    'IoT',
    'Cloud',
    'Linux',
    'Mainframe',
    'Financial Tech',
  ];

  const stats = [
    { value: 1.5, suffix: '+', label: 'Years' },
    { value: 5, suffix: '+', label: 'Projects' },
    { value: 20, suffix: '+', label: 'Technologies' },
    { value: 3, suffix: '+', label: 'Certifications' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-void relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan mb-3">Identity</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Who I Am
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal direction="left">
            <TiltCard className="max-w-md mx-auto md:mx-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 to-amber/20 rounded-3xl blur-2xl opacity-60" />
                <img
                  src={profileImage}
                  alt="Sujan Sanjeev"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-surface-2 border border-border rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-text-muted">Currently at</p>
                      <p className="text-sm font-semibold text-text-primary">FISERV India</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-6">
              <p className="font-display text-2xl md:text-3xl font-medium text-text-primary leading-tight">
                Engineer by training. Builder by instinct. Explorer by choice.
              </p>

              <div className="space-y-4 text-text-secondary leading-relaxed">
                <SplitText>
                  I&apos;m Sujan Sanjeev, a software engineer based in Chennai, currently building enterprise systems at FISERV India.
                </SplitText>
                <SplitText delay={0.1}>
                  My work sits at the intersection of systems thinking and practical execution — whether that&apos;s mainframe infrastructure, full-stack applications, or experiments with AI and open-source tools.
                </SplitText>
                <SplitText delay={0.2}>
                  Outside code, I&apos;m drawn to Linux customization, local LLMs, fitness, music, and understanding how complex systems work.
                </SplitText>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1.5 text-xs md:text-sm font-medium bg-surface-2 border border-border rounded-full text-text-secondary hover:border-cyan hover:text-cyan transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-surface-2 border border-border rounded-2xl p-4 text-center"
                  >
                    <p className="text-2xl md:text-3xl font-display font-bold gradient-text">
                      <Counter end={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                    </p>
                    <p className="text-xs text-text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About.jsx
git commit -m "feat: add About section with tilt portrait and manifesto"
```

---

### Task 20: Mindset Section

**Files:**
- Create: `src/components/Mindset.jsx`

- [ ] **Step 1: Implement three visionary statements**

```jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SplitText from './SplitText';
import useReducedMotion from '../hooks/useReducedMotion';
import Monogram from './Monogram';

const statements = [
  { label: 'Approach', text: 'I think in systems.' },
  { label: 'Method', text: 'I build with curiosity.' },
  { label: 'Habit', text: 'I move with discipline.' },
];

const Mindset = () => {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-32 md:py-48 lg:py-64 bg-void relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none"
        style={reducedMotion ? {} : { y }}
      >
        <Monogram className="w-96 h-96" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {statements.map((item, index) => (
          <div key={item.label} className="py-12 md:py-20 border-b border-border last:border-0">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan mb-4">{item.label}</p>
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              <SplitText delay={index * 0.1}>{item.text}</SplitText>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mindset;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Mindset.jsx
git commit -m "feat: add Mindset section with visionary statements"
```

---

### Task 21: Experience Section

**Files:**
- Create: `src/components/Experience.jsx`

- [ ] **Step 1: Implement timeline**

```jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import gorillaLogo from '../assets/gorilla.png';
import tataLogo from '../assets/tata.png';
import fiservLogo from '../assets/fiserv.png';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: 'FISERV India',
    position: 'Software Engineer',
    duration: 'June 2025 - Present',
    location: 'Chennai, India',
    description: 'Enterprise financial applications & mainframe development for Integrated Disputes System.',
    skills: ['Mainframe', 'COBOL', 'JCL', 'DB2', 'CICS'],
    isCurrent: true,
    color: '#10b981',
    logo: fiservLogo,
  },
  {
    company: 'Gorilla Technology',
    position: 'SWE Intern',
    duration: 'May 2024 - July 2024',
    location: 'Taiwan (Remote)',
    description: 'Network automation & SD-WAN dashboard development.',
    skills: ['Python', 'Ansible', 'React', 'NETBOX'],
    isCurrent: false,
    color: '#3b82f6',
    logo: gorillaLogo,
  },
  {
    company: 'Tata Communications',
    position: 'Full Stack Intern',
    duration: 'June 2023 - July 2023',
    location: 'Chennai, India',
    description: 'E-commerce platform with Angular & Flask.',
    skills: ['Angular', 'Flask', 'Python', 'SQL'],
    isCurrent: false,
    color: '#8b5cf6',
    logo: tataLogo,
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      gsap.utils.toArray('.exp-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 md:py-32 lg:py-40 bg-void relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan mb-3">Career</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            The Journey
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-amber to-cyan origin-top hidden md:block"
          />

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`exp-card relative md:grid md:grid-cols-2 md:gap-8 ${
                  index !== experiences.length - 1 ? 'md:pb-16' : ''
                }`}
              >
                <div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-void z-10"
                  style={{ backgroundColor: exp.color, top: '24px' }}
                >
                  {exp.isCurrent && (
                    <span
                      className="absolute inset-0 rounded-full animate-ping opacity-75"
                      style={{ backgroundColor: exp.color }}
                    />
                  )}
                </div>

                <div
                  className={`pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                  }`}
                >
                  <TiltCard tiltAmount={5} glare={false}>
                    <div className="bg-surface-2 border border-border rounded-2xl p-6 hover:border-cyan/30 transition-colors">
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-surface-3 border border-border flex items-center justify-center flex-shrink-0">
                          <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" />
                        </div>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-lg font-bold text-text-primary">{exp.position}</h3>
                          <p className="text-cyan text-sm font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <div
                        className={`flex flex-wrap gap-2 text-xs text-text-muted mb-3 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}
                      >
                        <span className="px-2 py-1 bg-surface-3 border border-border rounded-full">
                          {exp.duration}
                        </span>
                        <span className="px-2 py-1 bg-surface-3 border border-border rounded-full">
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-surface-3 border border-border rounded-full text-text-secondary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>

                {index % 2 === 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Experience.jsx
git commit -m "feat: add Experience timeline section"
```

---

### Task 22: Projects Section

**Files:**
- Create: `src/components/Projects.jsx`

- [ ] **Step 1: Implement asymmetric project showcase**

```jsx
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';
import fiservLogo from '../assets/fiserv.png';
import sign from '../assets/sign.jpg';
import gpt from '../assets/gpt.jpg';
import rover from '../assets/rover.jpg';

const Projects = () => {
  const orgProject = {
    name: 'Integrated Disputes System',
    company: 'FISERV India',
    division: 'Merchant Solutions Tech',
    description:
      'Working on the Integrated Disputes System within Merchant Solutions Technology at FISERV. Building enterprise-grade dispute resolution workflows, case management systems, and financial transaction dispute handling solutions.',
    duration: 'June 2025 - Present',
    technologies: ['Mainframe', 'COBOL', 'JCL', 'DB2', 'CICS', 'VSAM'],
    logo: fiservLogo,
    color: '#10b981',
  };

  const projects = [
    {
      name: 'Autonomous Rover',
      description:
        'Developed an autonomous rover using LiDAR and OpenCV for real-time terrain mapping and geo-location navigation. Implemented SLAM algorithms for simultaneous mapping and localization.',
      duration: 'Sept 2023 - April 2024',
      technologies: ['ROS', 'Python', 'SLAM', 'ML', 'MQTT'],
      image: rover,
      color: '#00E5FF',
    },
    {
      name: 'AI Teaching Assistant',
      description:
        'Created a web application using GPT-3 API to answer user queries based on YouTube video content. Implemented using Python, Streamlit, and GPT-3 API.',
      duration: 'Mar - Apr 2023',
      technologies: ['Python', 'Streamlit', 'GPT-3', 'NLP'],
      image: gpt,
      color: '#FFB84D',
    },
    {
      name: 'Sign Language Tool',
      description:
        'Developed a web application for bidirectional conversion between sign language and speech. Utilized Python, Mediapipe, Streamlit, and OpenCV.',
      duration: 'Jan - Mar 2023',
      technologies: ['Python', 'Mediapipe', 'OpenCV', 'Streamlit'],
      image: sign,
      color: '#8b5cf6',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40 bg-void relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan mb-3">Selected Work</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Projects
          </h2>
        </ScrollReveal>

        {/* Featured */}
        <ScrollReveal className="mb-16">
          <TiltCard tiltAmount={3} glare={false}>
            <div className="bg-surface-2 border border-border rounded-3xl overflow-hidden hover:border-cyan/30 transition-colors">
              <div className="h-1.5 w-full" style={{ backgroundColor: orgProject.color }} />
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-surface-3 border border-border flex items-center justify-center flex-shrink-0 p-4">
                    <img src={orgProject.logo} alt={orgProject.company} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: orgProject.color }}
                      >
                        {orgProject.duration}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        Current
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-4xl font-bold text-text-primary mb-2">
                      {orgProject.name}
                    </h3>
                    <p className="text-cyan font-medium mb-4">
                      {orgProject.company} — {orgProject.division}
                    </p>
                    <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
                      {orgProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {orgProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-surface-3 border border-border rounded-full text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* University projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.15}>
              <TiltCard tiltAmount={5} glare={false} className="h-full">
                <div className="h-full bg-surface-2 border border-border rounded-2xl overflow-hidden hover:border-cyan/30 transition-colors group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ background: `linear-gradient(to top right, ${project.color}, transparent)` }}
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium text-white mb-3"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.duration}
                    </span>
                    <h4 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-cyan transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] bg-surface-3 border border-border rounded text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects.jsx
git commit -m "feat: add Projects section with featured panel and cinematic cards"
```

---

### Task 23: Skills Section

**Files:**
- Create: `src/components/Skills.jsx`

- [ ] **Step 1: Implement skill clusters with icons**

```jsx
import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiAngular,
  SiNodedotjs, SiFlask, SiHtml5, SiDocker, SiGit, SiLinux,
  SiNeovim, SiLangchain, SiHuggingface, SiOllama,
} from 'react-icons/si';
import { DiJava, DiDatabase, DiAws, DiMysql } from 'react-icons/di';
import { FaServer, FaDesktop, FaSave, FaTerminal, FaCode, FaWindowMaximize } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import ScrollReveal from './ScrollReveal';
import Counter from './Counter';

const iconMap = {
  Python: SiPython, JavaScript: SiJavascript, TypeScript: SiTypescript, Java: DiJava,
  COBOL: FaDesktop, SQL: DiMysql, React: SiReact, Angular: SiAngular,
  'Node.js': SiNodedotjs, Flask: SiFlask, 'HTML/CSS': SiHtml5, AWS: DiAws,
  Azure: VscAzure, Docker: SiDocker, Git: SiGit, Linux: SiLinux,
  'Agent Zero': FaTerminal, OpenCode: FaCode, Hyprland: FaWindowMaximize,
  Neovim: SiNeovim, Mainframe: FaServer, DB2: DiDatabase, JCL: FaDesktop,
  CICS: FaDesktop, VSAM: FaSave, LangChain: SiLangchain, 'Hugging Face': SiHuggingface,
  Ollama: SiOllama,
};

const colorMap = {
  Python: '#3776ab', JavaScript: '#f7df1e', TypeScript: '#3178c6', Java: '#ed8b00',
  COBOL: '#005ca5', SQL: '#e38c00', React: '#61dafb', Angular: '#dd0031',
  'Node.js': '#339933', Flask: '#aaaaaa', 'HTML/CSS': '#e34f26', AWS: '#ff9900',
  Azure: '#0078d4', Docker: '#2496ed', Git: '#f05032', Linux: '#fcc624',
  'Agent Zero': '#ff6b35', OpenCode: '#00d4aa', Hyprland: '#00aaff', Neovim: '#57a64a',
  Mainframe: '#9b59b6', DB2: '#0530ad', JCL: '#6b5b95', CICS: '#ff6600',
  VSAM: '#2e8b57', LangChain: '#3b82f6', 'Hugging Face': '#ffd21e', Ollama: '#f2f2f2',
};

const categories = [
  { topic: 'Languages', skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'COBOL', 'SQL'] },
  { topic: 'Mainframe', skills: ['Mainframe', 'DB2', 'JCL', 'CICS', 'VSAM'] },
  { topic: 'Web Dev', skills: ['React', 'Angular', 'Node.js', 'Flask', 'HTML/CSS'] },
  { topic: 'AI / ML & Cloud', skills: ['AWS', 'Azure', 'Docker', 'LangChain', 'Hugging Face', 'Ollama'] },
  { topic: 'Tools', skills: ['Git', 'Linux', 'Agent Zero', 'OpenCode', 'Hyprland', 'Neovim'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 bg-void relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan mb-3">Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Tools & <span className="gradient-text">Systems</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {[
            { value: 1.5, suffix: '+', label: 'Years Experience' },
            { value: 20, suffix: '+', label: 'Technologies' },
            { value: 3, suffix: '+', label: 'Certifications' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-text-primary">
                <Counter end={stat.value} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
              </p>
              <p className="text-xs text-text-muted uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </ScrollReveal>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <ScrollReveal key={category.topic} delay={catIndex * 0.1}>
              <div>
                <h3 className="text-lg md:text-xl font-display font-semibold text-text-secondary mb-5 text-center md:text-left">
                  {category.topic}
                </h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = iconMap[skill];
                    const color = colorMap[skill] || '#6B7280';
                    return (
                      <motion.div
                        key={skill}
                        className="group flex items-center gap-2 px-4 py-3 bg-surface-2 border border-border rounded-xl hover:border-cyan/50 transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.03 }}
                        whileHover={{ y: -3 }}
                      >
                        {Icon && <Icon size={22} color={color} className="group-hover:scale-110 transition-transform" />}
                        <span className="text-sm font-medium text-text-secondary group-hover:text-cyan transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Skills.jsx
git commit -m "feat: add Skills section with categorized clusters"
```

---

### Task 24: Education Section

**Files:**
- Create: `src/components/Education.jsx`

- [ ] **Step 1: Implement compact education cards**

```jsx
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import snu from '../assets/snu.png';
import mlm from '../assets/mlm.jpg';

const educationData = [
  {
    institution: 'Shiv Nadar University, Chennai',
    degree: 'B.Tech. CSE (IoT)',
    fullDegree: 'B.Tech. in Computer Science and Engineering',
    specialization: 'Internet of Things',
    duration: '2021 - 2025',
    score: 'CGPA: 8.0/10.0',
    logo: snu,
    isCurrent: true,
    courses: ['IoT Systems', 'Machine Learning', 'Cloud Computing', 'Data Structures'],
  },
  {
    institution: 'M.L.M HSS',
    degree: 'Higher Secondary',
    specialization: 'Computer Science',
    duration: '2019 - 2021',
    score: '92%',
    logo: mlm,
    isCurrent: false,
  },
  {
    institution: 'M.L.M HSS',
    degree: 'Secondary',
    specialization: 'General Studies',
    duration: '2017 - 2019',
    score: '90%',
    logo: mlm,
    isCurrent: false,
  },
];

const Education = () => {
  const featured = educationData[0];
  const others = educationData.slice(1);

  return (
    <section id="education" className="py-24 md:py-32 lg:py-40 bg-void relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan mb-3">Background</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Academic Path
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mb-8">
          <div className="relative p-px rounded-3xl bg-gradient-to-r from-cyan via-amber to-cyan">
            <div className="bg-surface-2 rounded-3xl p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-surface-3 border border-border flex items-center justify-center flex-shrink-0 p-3">
                  <img src={featured.logo} alt={featured.institution} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                    {featured.isCurrent && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        Current
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface-3 border border-border text-text-secondary">
                      {featured.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-2">
                    {featured.institution}
                  </h3>
                  <p className="text-lg text-text-secondary mb-1">{featured.fullDegree}</p>
                  <p className="text-amber font-medium mb-4">{featured.specialization}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm bg-gradient-to-r from-cyan to-amber text-void">
                    {featured.score}
                  </div>
                  {featured.courses && (
                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-wider text-text-muted mb-2">Key Courses</p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {featured.courses.map((course) => (
                          <span key={course} className="px-3 py-1 text-xs bg-surface-3 border border-border rounded-full text-text-secondary">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {others.map((edu, index) => (
            <ScrollReveal key={`${edu.institution}-${edu.degree}`} delay={index * 0.1}>
              <motion.div
                className="h-full bg-surface-2 border border-border rounded-2xl p-6 hover:border-cyan/30 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-surface-3 border border-border flex items-center justify-center flex-shrink-0 p-2">
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-text-primary mb-1">{edu.institution}</h4>
                    <p className="text-sm text-text-secondary mb-1">{edu.degree}</p>
                    <p className="text-xs text-text-muted mb-3">{edu.specialization}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-0.5 text-xs bg-surface-3 border border-border rounded-full text-text-muted">
                        {edu.duration}
                      </span>
                      <span className="px-2 py-0.5 text-xs bg-surface-3 border border-border rounded-full text-text-secondary font-medium">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Education.jsx
git commit -m "feat: add Education section with featured degree"
```

---

### Task 25: Certifications Section

**Files:**
- Create: `src/components/Certifications.jsx`

- [ ] **Step 1: Implement certification cards**

```jsx
import { Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import Counter from './Counter';
import gen from '../assets/gen.jpg';
import cyber from '../assets/cyber.jpg';

const certifications = [
  {
    title: 'Generative AI',
    subtitle: 'Foundations',
    issuer: 'DeepLearning.AI & AWS',
    completionDate: 'Dec 2024',
    thumbnail: gen,
    color: '#6366f1',
    skills: ['LLMs', 'Transformers', 'Fine-tuning', 'RLHF'],
  },
  {
    title: 'Cybersecurity',
    subtitle: 'Professional Certificate',
    issuer: 'Google',
    completionDate: 'Aug 2024',
    thumbnail: cyber,
    color: '#10b981',
    skills: ['Network Security', 'SIEM', 'Threat Detection', 'Linux'],
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 lg:py-40 bg-void relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan mb-3">Achievements</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            Credentials
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.15}>
              <TiltCard tiltAmount={4} glare={false} className="h-full">
                <div className="h-full bg-surface-2 border border-border rounded-2xl overflow-hidden hover:border-cyan/30 transition-colors">
                  <div className="h-1.5 w-full" style={{ backgroundColor: cert.color }} />
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row gap-5">
                      <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border border-border">
                          <img src={cert.thumbnail} alt={cert.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div
                          className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: cert.color }}
                        >
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-text-secondary text-sm mb-3">{cert.subtitle}</p>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
                          <span
                            className="px-2.5 py-0.5 rounded-full text-xs font-medium text-white"
                            style={{ backgroundColor: cert.color }}
                          >
                            {cert.issuer}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-xs bg-surface-3 border border-border text-text-muted">
                            {cert.completionDate}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 text-[10px] md:text-xs rounded-full border"
                              style={{
                                borderColor: `${cert.color}40`,
                                color: cert.color,
                                backgroundColor: `${cert.color}10`,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: 2, label: 'Certifications' },
            { value: 100, suffix: '+', label: 'Hours Learned' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-text-primary">
                <Counter end={stat.value} suffix={stat.suffix || ''} />
              </p>
              <p className="text-xs text-text-muted uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-display font-bold text-text-primary">Google & AWS</p>
            <p className="text-xs text-text-muted uppercase tracking-wider mt-1">Top Providers</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Certifications;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Certifications.jsx
git commit -m "feat: add Certifications section"
```

---

### Task 26: Contact Section

**Files:**
- Create: `src/components/Contact.jsx`

- [ ] **Step 1: Implement premium contact section**

```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);

  const contactMethods = [
    {
      title: 'Email',
      value: 'sujan21110114@snuchennai.edu.in',
      icon: Mail,
      href: 'mailto:sujan21110114@snuchennai.edu.in',
      gradient: 'from-cyan to-cyan-glow',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/sujansanjeev',
      icon: Linkedin,
      href: 'https://linkedin.com/in/sujansanjeev',
      gradient: 'from-blue-600 to-blue-500',
    },
    {
      title: 'GitHub',
      value: 'github.com/sujansanjeev',
      icon: Github,
      href: 'https://github.com/sujansanjeev',
      gradient: 'from-surface-3 to-text-muted',
    },
    {
      title: 'Location',
      value: 'Chennai, India',
      icon: MapPin,
      href: null,
      gradient: 'from-amber to-amber-glow',
    },
  ];

  const inputClasses = (field) =>
    `w-full bg-surface-2 border rounded-xl px-4 py-3.5 text-text-primary placeholder-text-muted/50 outline-none transition-all duration-200 ${
      focusedField === field ? 'border-cyan shadow-[0_0_0_2px_rgba(0,229,255,0.1)]' : 'border-border'
    }`;

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-void relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 229, 255, 0.05) 0%, transparent 50%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            Let&apos;s Build <span className="gradient-text">Something.</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <div className="flex items-center gap-4 p-5 bg-surface-2 border border-border rounded-2xl hover:border-cyan/30 transition-colors w-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                      <Icon size={22} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider">{method.title}</h3>
                      <p className="text-text-primary font-medium">{method.value}</p>
                    </div>
                  </div>
                );

                return method.href ? (
                  <MagneticButton key={method.title} href={method.href} className="w-full" strength={0.15}>
                    {content}
                  </MagneticButton>
                ) : (
                  <div key={method.title}>{content}</div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {[
                { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={field.placeholder}
                    className={inputClasses(field.name)}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs uppercase tracking-wider text-text-muted mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`${inputClasses('message')} resize-none`}
                />
              </div>
              <MagneticButton className="w-full" strength={0.1}>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-cyan text-void font-semibold rounded-xl hover:bg-cyan-glow transition-colors"
                >
                  Send Message
                </button>
              </MagneticButton>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Contact.jsx
git commit -m "feat: add premium Contact section with form and magnetic links"
```

---

## Phase 6: Integration & Polish

### Task 27: App.jsx Integration

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Wire all sections together**

```jsx
import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Mindset from './components/Mindset';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollProgress from './hooks/useScrollProgress';
import './App.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showArrow, setShowArrow] = useState(false);
  const lenisRef = useRef(null);
  const progress = useScrollProgress();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, { offset: 0, duration: 1.5 });
    }
  };

  useEffect(() => {
    const homeSection = document.getElementById('home');
    const handleScrollEvent = () => {
      setShowArrow(window.scrollY > (homeSection?.clientHeight || 600) / 2);
    };
    window.addEventListener('scroll', handleScrollEvent, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}

      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-cyan z-[60] origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />

      <ParticleBackground />

      <div className="relative z-10">
        <Navbar handleScroll={handleScroll} />

        <Hero isLoading={isLoading} />
        <About />
        <Mindset />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </div>

      <button
        onClick={() => handleScroll('home')}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-cyan text-void shadow-lg shadow-cyan/25 z-50 transition-all duration-300 hover:scale-110 ${
          showArrow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </>
  );
};

export default App;
```

- [ ] **Step 2: Commit**

```bash
git add src/App.jsx
git commit -m "feat: wire all sections in App with Lenis and scroll progress"
```

---

### Task 28: Build & Verify

**Files:**
- All modified files

- [ ] **Step 1: Run dev server**

```bash
npm run dev
```

Expected: No errors. Site loads with loader, then hero appears.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: Build succeeds with no TypeScript/eslint errors.

- [ ] **Step 3: Fix any build errors**

Address any lint or build errors that appear. Common issues:
- Unused imports.
- Missing dependency arrays.
- Tailwind class typos.

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: integrate full MONOLITH portfolio and verify build"
```

---

### Task 29: Responsive Pass

**Files:**
- Various component files

- [ ] **Step 1: Test mobile layout**

Use browser dev tools to test at 375px, 768px, 1024px, 1440px.

Check:
- Hero text doesn't overflow.
- Monolith scales down or falls back on mobile.
- Timeline is single-column on mobile.
- Project cards stack.
- Skills wrap properly.
- Navbar mobile menu works.
- Contact form is usable.

- [ ] **Step 2: Apply mobile fixes**

Adjust Tailwind classes as needed in affected components.

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "fix: responsive adjustments across all sections"
```

---

### Task 30: Reduced Motion & Accessibility

**Files:**
- Various component files

- [ ] **Step 1: Test reduced motion**

Enable `prefers-reduced-motion` in OS/browser and verify:
- No parallax.
- No 3D tilt.
- No float animation.
- Content is visible without animation.

- [ ] **Step 2: Test keyboard navigation**

Tab through all interactive elements. Verify focus rings are visible.

- [ ] **Step 3: Check contrast**

Use browser dev tools to verify text contrast meets WCAG AA.

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "fix: ensure reduced-motion and accessibility compliance"
```

---

### Task 31: Final Polish

**Files:**
- Various component files

- [ ] **Step 1: Review all sections visually**

Check:
- Consistent spacing.
- No broken images.
- Smooth scroll works.
- Animations feel cinematic, not jarring.
- Copy reads well.

- [ ] **Step 2: Run final build**

```bash
npm run build
```

Expected: Clean build.

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "polish: final visual and performance pass"
```

---

## Plan Self-Review

**Spec coverage:**
- Visual identity → Tasks 1-2 (Tailwind, CSS, fonts).
- Monogram → Task 5.
- WebGL monolith → Tasks 16-18.
- Loader → Task 12.
- Navbar → Task 13.
- Hero → Task 18.
- About → Task 19.
- Mindset → Task 20.
- Experience → Task 21.
- Projects → Task 22.
- Skills → Task 23.
- Education → Task 24.
- Certifications → Task 25.
- Contact → Task 26.
- Footer → Task 14.
- Animation strategy → Tasks 3-4, 6-11, 27.
- Reduced motion → Tasks 4, 30.
- Responsive → Task 29.
- Performance → Tasks 17, 28.

**Placeholder scan:** No TBDs or placeholders. All steps include actual code or exact commands.

**Type consistency:** All components use consistent prop names and hook signatures.

**Gaps:** None identified.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-06-27-monolith-portfolio-implementation.md`.

**Two execution options:**

1. **Subagent-Driven (recommended)** — Dispatch a fresh subagent per task, review between tasks, fast iteration.
2. **Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints.

Which approach do you want?
