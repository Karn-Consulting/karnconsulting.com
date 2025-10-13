# Karn Consulting Design Guidelines

## Design Approach: Reference-Based + Tech Industry Leaders
Drawing inspiration from Linear (typography/precision), Stripe (gradient sophistication), and Vercel (minimalist tech aesthetic), creating a unique identity that embodies AI/ML innovation.

## Core Design Principles
- **Technological Sophistication**: Precise, geometric, data-driven aesthetics
- **Gradient Mastery**: Strategic use of navy-to-blue gradients as primary visual language
- **Intelligence & Clarity**: Clean information hierarchy with smart micro-interactions

---

## Color Palette

### Primary Gradients (Dark Mode Default)
- **Hero Gradient**: 220 75% 12% → 215 85% 55% (deep navy to vibrant blue, 135deg diagonal)
- **Card Gradients**: 220 70% 15% → 215 75% 45% (subtle depth)
- **Accent Gradient**: 200 90% 50% → 215 85% 60% (CTAs and highlights)

### Supporting Colors
- **Background**: 220 50% 8% (deep navy base)
- **Surface**: 220 45% 12% (card backgrounds)
- **Text Primary**: 210 20% 98%
- **Text Secondary**: 215 15% 70%
- **Border/Divider**: 220 40% 20% with 30% opacity

### Gradient Application Rules
- Hero: Full diagonal gradient background with animated mesh overlay
- Cards: Subtle gradient borders (2px) with hover intensity increase
- Buttons: Primary uses accent gradient, outline buttons have gradient text
- Section dividers: Horizontal gradient lines at 20% opacity

---

## Typography

### Font System (Google Fonts)
- **Headings**: 'Inter' (700-900 weights) - precision and modernity
- **Body**: 'Inter' (400, 500) - consistency and readability
- **Accent/Code**: 'JetBrains Mono' (500) - technical credibility

### Scale & Hierarchy
- **Hero H1**: text-6xl md:text-7xl lg:text-8xl, font-black, gradient text effect
- **Section H2**: text-4xl md:text-5xl, font-bold
- **Card H3**: text-xl md:text-2xl, font-semibold
- **Body**: text-base md:text-lg, leading-relaxed

---

## Layout System

### Spacing Primitives
Consistent use of: **4, 8, 12, 16, 20, 24, 32** (Tailwind units)
- Component padding: p-8 to p-12
- Section spacing: py-20 md:py-32
- Card gaps: gap-8 md:gap-12

### Grid Structure
- **Hero**: Single column, centered, max-w-6xl
- **Services**: 2-column md:3-column grid
- **Technology Stack**: 4-column grid with icons
- **Case Studies**: Asymmetric 2-column layout (60/40 split)

---

## Component Library

### Hero Section
- Full-viewport (min-h-screen) with animated gradient background
- Geometric pattern overlay (subtle angular shapes inspired by logo)
- Centered content: gradient headline + subheading + dual CTAs
- Floating geometric elements with parallax (3-5 shapes, varying opacity)
- Hero image: Abstract AI/neural network visualization (right side, 40% width on desktop)

### Service Cards
- Glass-morphism effect: backdrop-blur-xl with subtle gradient borders
- Hover: Border gradient intensifies, slight scale (1.02), glow effect
- Icon: Gradient-filled geometric shapes (64x64px)
- Layout: Icon top, title, description, subtle arrow indicator

### Technology Visualization
- Animated icon grid showcasing: TensorFlow, PyTorch, AWS, Azure logos
- Icons float/pulse on hover with gradient glow
- Connecting lines between icons (animated paths, gradient strokes)

### Case Studies Section
- Large feature card: gradient overlay on background image
- Staggered layout: alternate left/right image placement
- Metrics display: Large numbers with gradient text, small labels
- Animated counter on scroll-into-view

### Contact Form
- Gradient border inputs with focus glow effect
- Floating labels with smooth transition
- Glass-morphism container with backdrop blur
- Submit button: Full accent gradient with hover lift effect

### Navigation
- Fixed header with backdrop blur on scroll
- Logo left, menu right, gradient underline on active state
- Mobile: Slide-in menu with gradient background overlay

---

## Animations & Interactions

### Hero Animations
- Gradient mesh: Slow rotation/shift (20s loop, subtle)
- Floating shapes: Independent parallax on scroll (0.1-0.3 speed multipliers)
- Text: Fade-up on load with stagger (100ms delay between elements)

### Scroll Animations
- Cards: Fade-up + slight scale on intersection (0.95 → 1)
- Technology icons: Stagger reveal with pop effect
- Section dividers: Width expand from center (0 → 100%)

### Micro-interactions
- Button hover: Gradient shift + lift (translateY -2px)
- Card hover: Glow effect around border, scale 1.02
- Input focus: Border gradient pulse, label float
- Link hover: Gradient underline expand from left

---

## Images

### Hero Section
**Neural Network Visualization**: Abstract 3D render of interconnected nodes/neural pathways with blue gradient glow, positioned right side (40% width on desktop, full-width on mobile behind content). Conveys AI/ML technology visually.

### Case Study Cards (3-4 sections)
**AI Dashboard Interface**: Modern UI screenshot showing data analytics/ML models
**Automation Workflow**: Diagram/visual of intelligent systems in action
**Technology Infrastructure**: Abstract server/cloud visualization with gradient overlays

All images have gradient overlays (navy to transparent, 60% opacity) for text legibility and brand consistency.

---

## Accessibility & Responsiveness

- Dark mode optimized with 4.5:1 contrast ratios minimum
- Gradient text ensures WCAG AA compliance (fallback solid color in CSS)
- Animations respect `prefers-reduced-motion`
- Mobile-first: Stack all multi-column layouts to single column below md breakpoint
- Touch targets: Minimum 44x44px for all interactive elements
- Focus indicators: Gradient ring with 3px offset

---

## Brand Integration

- Logo placement: Top-left, maintains gradient integrity, 160px width desktop
- Geometric motifs from logo repeated as decorative elements throughout
- Angular shapes in section dividers and card corners echo logo design
- Gradient direction consistency: 135deg diagonal matches logo flow