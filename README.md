# Vivek Kushwaha — Portfolio

Built with **Next.js 14**, **Framer Motion**, and **TailwindCSS**.

## Features

- 🌗 **Animated dark/light mode** — circular ripple wipe animation from the toggle button, smooth CSS variable transitions across all elements
- 🖱️ **Custom cursor** with magnetic follower
- ✨ **Framer Motion** animations — staggered reveals, scroll-triggered sections, hover effects
- 📱 Fully **responsive** — mobile menu, fluid typography
- ⚡ **Next.js App Router** with SSR-ready structure
- 🎨 **CSS variable theming** — every color token auto-switches on theme change

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Theme System

Theme is managed via `components/ThemeContext.tsx`:

- Reads `localStorage` + `prefers-color-scheme` on first load
- Applies `html.light` class to trigger CSS variable swap
- On toggle: plays a **circular ripple wipe** from the click coordinates
- All colors are CSS variables in `globals.css` — zero hardcoded hex in components

### Dark (default)
| Token | Value |
|---|---|
| `--color-bg` | `#080808` |
| `--color-accent` | `#C8FF00` (lime) |
| `--color-text` | `#f4f4f4` |

### Light
| Token | Value |
|---|---|
| `--color-bg` | `#f5f5f0` |
| `--color-accent` | `#5a8a00` (olive) |
| `--color-text` | `#0a0a0a` |

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Project Structure

```
app/
  layout.tsx      — ThemeProvider wraps everything
  page.tsx        — Assembles all sections
  globals.css     — CSS variables for both themes

components/
  ThemeContext.tsx — Theme state + ripple logic
  ThemeToggle.tsx  — Sun/moon toggle button
  Navbar.tsx       — Nav with toggle
  Hero.tsx
  About.tsx
  Work.tsx
  Experience.tsx
  Skills.tsx
  Contact.tsx
  Cursor.tsx

lib/
  data.ts         — All content (projects, experience, skills)
```

## Updating Content

All content lives in `lib/data.ts` — edit `profile`, `experience`, `projects`, and `skills` there.
