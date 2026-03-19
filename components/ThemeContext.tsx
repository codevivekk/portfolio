'use client'
import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: (originX?: number, originY?: number) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const rippleRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef(false)

  // On mount, read saved preference
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
    const initial = saved ?? preferred
    setTheme(initial)
    document.documentElement.classList.toggle('light', initial === 'light')
  }, [])

  const toggleTheme = useCallback((originX?: number, originY?: number) => {
    if (isAnimating.current) return
    isAnimating.current = true

    const next: Theme = theme === 'dark' ? 'light' : 'dark'

    // Calculate ripple size — needs to cover full screen from click origin
    const x = originX ?? window.innerWidth / 2
    const y = originY ?? window.innerHeight / 2
    const maxDist = Math.max(
      Math.hypot(x, y),
      Math.hypot(window.innerWidth - x, y),
      Math.hypot(x, window.innerHeight - y),
      Math.hypot(window.innerWidth - x, window.innerHeight - y),
    )
    const diameter = maxDist * 2.2

    const ripple = rippleRef.current
    if (!ripple) { applyTheme(next); isAnimating.current = false; return }

    // Position and size the ripple
    ripple.style.left   = `${x}px`
    ripple.style.top    = `${y}px`
    ripple.style.width  = `${diameter}px`
    ripple.style.height = `${diameter}px`
    // Ripple color = destination theme background
    ripple.style.background = next === 'light' ? '#f5f5f0' : '#080808'
    ripple.style.opacity = '1'

    // Trigger animation
    ripple.classList.remove('animate')
    void ripple.offsetWidth // force reflow
    ripple.classList.add('animate')

    // Halfway through animation, flip the theme
    const half = 300
    setTimeout(() => {
      applyTheme(next)
    }, half)

    // After animation done, hide ripple
    setTimeout(() => {
      ripple.style.opacity = '0'
      ripple.classList.remove('animate')
      isAnimating.current = false
    }, 650)

    function applyTheme(t: Theme) {
      setTheme(t)
      document.documentElement.classList.toggle('light', t === 'light')
      localStorage.setItem('theme', t)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Ripple overlay element */}
      <div
        ref={rippleRef}
        className="theme-ripple"
        style={{ opacity: 0 }}
        aria-hidden="true"
      />
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
