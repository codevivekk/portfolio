'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/lib/data'

const categories = [
  { key: 'core',      label: 'Core Frontend',     hue: 'var(--color-accent)' },
  { key: 'animation', label: 'Animation & 3D',    hue: '#a78bfa' },
  { key: 'backend',   label: 'Backend',            hue: '#60a5fa' },
  { key: 'web3',      label: 'Web3 / Blockchain',  hue: '#fb923c' },
  { key: 'infra',     label: 'Cloud & DevOps',     hue: '#34d399' },
  { key: 'db',        label: 'Databases',          hue: '#f87171' },
  { key: 'other',     label: 'Other',              hue: 'var(--color-mid)' },
] as const

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="skills" className="py-32 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.3em] uppercase block mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            04 / Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold leading-none"
            style={{ fontSize: 'clamp(36px,5vw,64px)', color: 'var(--color-text)' }}
          >
            What I<br />
            <span style={{ color: 'var(--color-accent)' }}>Work With</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {categories.map((cat, ci) => {
            const skillList = skills[cat.key as keyof typeof skills]
            return (
              <SkillRow key={cat.key} label={cat.label} items={skillList} hue={cat.hue} index={ci} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SkillRow({ label, items, hue, index }: { label: string; items: readonly string[]; hue: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="flex flex-col md:flex-row md:items-center gap-4"
    >
      <div className="md:w-44 shrink-0">
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-muted)' }}>{label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.07 + i * 0.04 }}
            className="font-mono text-xs px-3 py-1.5 border tracking-wide"
            style={{
              color: hue,
              background: `color-mix(in srgb, ${hue} 8%, transparent)`,
              borderColor: `color-mix(in srgb, ${hue} 25%, transparent)`,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
