@AGENTS.md

## Components
- `components/site-header.tsx` (Client) — sticky header, sign icon crossfade + HTML wordmark, mobile menu with body scroll lock and Esc-to-close
- `components/hero-video.tsx` (Server) — hero section: video background + gradient overlays
- `components/hero-content.tsx` (Client) — animated hero copy (eyebrow, h1, subtitle, CTA, trail) with staggered fade-in
- `components/feature-cards.tsx` (Server) — секция «Принципы»: eyebrow + h2
- `components/feature-cards-grid.tsx` (Client) — 4 карточки с иконками Lucide и whileInView staggered animations
- `components/site-footer.tsx` (Server) — футер: 5-колоночный grid + копирайт + БАД-дисклеймер

## Conventions
- Next.js 16 + Tailwind v4 (`@theme` directive in `app/globals.css`, no `tailwind.config.ts`)
- Server Components by default; `'use client'` only for state, effects, framer-motion
- `next/image` for all logos; `loading="eager"` for above-fold logos; `priority` on at most one image
- All framer-motion animations respect `useReducedMotion` (zero duration, no axis shift when reduced)
- Hover effects on touch-sensitive elements via CSS (`hover:scale-* active:scale-*`), not `whileHover` (which sticks after tap on touch screens)
- z-index contract: header `z-50`, mobile menu overlay `z-[60]`, hero content `z-10`
- All user-facing strings in Russian; English only for technical identifiers (className, id, data-attributes, file names)

## Brand Assets
- `/public/brand/logo-geberich.png` — full mark for light backgrounds (reference / future use)
- `/public/brand/logo-geberich-white.png` — full mark for dark backgrounds (footer)
- `/public/brand/logo-geberich-sign.png` — sign-only icon for light backgrounds (sticky header after scroll)
- `/public/brand/logo-geberich-sign-white.png` — sign-only icon for dark backgrounds (sticky header over hero)
