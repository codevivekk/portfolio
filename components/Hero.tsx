'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'

const words = ['React', 'Next.js', 'Framer', 'Node.js', 'Web3', 'NestJS', 'TypeScript', 'Blockchain']

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
  }
  const item = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-5 blur-[120px] pointer-events-none" style={{ background: 'var(--color-accent)' }} />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Status badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 mb-10">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-accent)' }} />
            <span className="font-mono text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-accent)' }}>
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={item} className="mb-2">
            <h1 className="font-display font-bold leading-none text-[clamp(52px,9vw,120px)]" style={{ color: 'var(--color-text)' }}>
              Vivek
            </h1>
          </motion.div>
          <motion.div variants={item} className="mb-8">
            <h1 className="font-display font-bold leading-none text-[clamp(52px,9vw,120px)]" style={{ color: 'var(--color-accent)' }}>
              Kushwaha
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-10">
            <span className="w-1 h-1 rounded-full" style={{ background: 'var(--color-border)' }} />
            <span className="font-display text-[clamp(18px,2.5vw,28px)] font-medium" style={{ color: 'var(--color-mid)' }}>
              Full Stack Engineer
            </span>
            <span className="flex items-center gap-1.5 text-sm font-mono" style={{ color: 'var(--color-muted)' }}>
              📍 Surat, India
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={item} className="font-body text-lg max-w-xl leading-relaxed mb-12" style={{ color: 'var(--color-mid)' }}>
            I build fast, scalable, and beautiful web products used by{' '}
            <span className="font-medium" style={{ color: 'var(--color-text)' }}>100,000+ users</span>.
            Currently leading at{' '}
            <span style={{ color: 'var(--color-accent)' }}>Quranium</span> — a quantum-proof blockchain platform.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-20">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 font-mono font-medium text-sm px-6 py-3 tracking-widest uppercase transition-colors duration-200"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-accent-dim)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-accent)')}
            >
              View Work
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="mailto:codevivekk@gmail.com"
              className="font-mono text-sm px-6 py-3 tracking-widest uppercase border transition-all duration-200"
              style={{ color: 'var(--color-mid)', borderColor: 'var(--color-border)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--color-accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.color = 'var(--color-mid)' }}
            >
              Get in touch
            </a>
          </motion.div>

          {/* Scrolling tech strip */}
          <motion.div variants={item} className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, var(--color-bg), transparent)` }} />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, var(--color-bg), transparent)` }} />
            <div className="flex gap-8 w-max" style={{ animation: 'scroll 20s linear infinite' }}>
              {[...words, ...words].map((w, i) => (
                <span key={i} className="font-mono text-xs tracking-[0.2em] uppercase whitespace-nowrap flex items-center gap-8" style={{ color: 'var(--color-muted)' }}>
                  {w}
                  <span style={{ color: 'var(--color-accent)' }}>·</span>
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 divide-x" style={{ '--tw-divide-opacity': 1 } as any}>
          {[
            { val: '4+', label: 'Years exp.' },
            { val: '100K+', label: 'Monthly users' },
            { val: '30K+', label: 'Daily wallet users' },
            { val: '7+', label: 'Engineers mentored' },
          ].map((s) => (
            <div key={s.label} className="px-6 first:pl-0 last:pr-0 py-2" style={{ borderColor: 'var(--color-border)' }}>
              <div className="font-display font-bold text-2xl" style={{ color: 'var(--color-accent)' }}>{s.val}</div>
              <div className="font-mono text-xs uppercase tracking-widest mt-0.5" style={{ color: 'var(--color-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
