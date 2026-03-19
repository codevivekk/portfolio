'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/lib/data'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="experience" className="py-32 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.3em] uppercase block mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            03 / Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold leading-none"
            style={{ fontSize: 'clamp(36px,5vw,64px)', color: 'var(--color-text)' }}
          >
            Where I've<br />
            <span style={{ color: 'var(--color-accent)' }}>Worked</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 w-px hidden md:block" style={{ left: '200px', background: 'var(--color-border)' }} />
          <div className="space-y-0">
            {experience.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, index }: { exp: typeof experience[0], index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col md:flex-row gap-6 md:gap-0 pb-12 last:pb-0 group"
    >
      <div className="md:w-[200px] md:pr-10 md:text-right shrink-0">
        <span className="font-mono text-xs tracking-wide" style={{ color: 'var(--color-muted)' }}>{exp.period}</span>
        {exp.type === 'internship' && (
          <span className="block font-mono text-[10px] tracking-widest uppercase mt-1" style={{ color: 'var(--color-muted)' }}>Internship</span>
        )}
      </div>

      {/* Timeline dot */}
      <div className="hidden md:block absolute top-1 w-3 h-3 -translate-x-1/2" style={{ left: '200px' }}>
        <div
          className="w-full h-full rounded-full border transition-all duration-300"
          style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}
        />
      </div>

      <div className="md:pl-10 flex-1">
        <div className="flex flex-wrap items-baseline gap-3 mb-1">
          <h3 className="font-display font-bold text-xl transition-colors" style={{ color: 'var(--color-text)' }}>
            {exp.role}
          </h3>
          {index === 0 && (
            <span
              className="font-mono text-[10px] px-2 py-0.5 tracking-widest uppercase"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              Current
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-sm" style={{ color: 'var(--color-accent)' }}>{exp.company}</span>
          <span style={{ color: 'var(--color-border)' }}>·</span>
          <span className="font-mono text-xs" style={{ color: 'var(--color-muted)' }}>{exp.location}</span>
        </div>
        <ul className="space-y-2">
          {exp.highlights.map((h, j) => (
            <li key={j} className="flex items-start gap-3 font-body text-sm leading-relaxed" style={{ color: 'var(--color-mid)' }}>
              <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: 'var(--color-accent)' }} />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
