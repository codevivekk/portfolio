'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '@/lib/data'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-32 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.3em] uppercase block mb-6"
              style={{ color: 'var(--color-accent)' }}
            >
              01 / About
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold leading-tight mb-8"
              style={{ fontSize: 'clamp(36px,4vw,56px)', color: 'var(--color-text)' }}
            >
              Code. Ship.<br />
              <span style={{ color: 'var(--color-accent)' }}>Repeat.</span>
            </motion.h2>
            {profile.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="font-body leading-relaxed mb-4 text-[15px]"
                style={{ color: 'var(--color-mid)' }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Current role', value: 'Fullstack Tech Lead', sub: 'at Quranium' },
              { label: 'Based in', value: 'Surat, India', sub: 'Remote-first' },
              { label: 'Graduated', value: 'B.E. CS', sub: 'VIET, 2024' },
              { label: 'Status', value: 'Available', sub: 'for opportunities', accent: true },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="p-5 border"
                style={{
                  borderColor: card.accent ? 'var(--color-accent)' : 'var(--color-border)',
                  background: card.accent ? 'color-mix(in srgb, var(--color-accent) 8%, transparent)' : 'var(--color-surface)',
                }}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--color-muted)' }}>{card.label}</div>
                <div className="font-display font-bold text-base" style={{ color: card.accent ? 'var(--color-accent)' : 'var(--color-text)' }}>
                  {card.value}
                </div>
                <div className="font-mono text-xs mt-1" style={{ color: 'var(--color-muted)' }}>{card.sub}</div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="col-span-2 p-5 border"
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
            >
              <div className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--color-muted)' }}>Specialties</div>
              <div className="flex flex-wrap gap-2">
                {['React / Next.js', 'Framer Motion', 'Blockchain / Web3', 'Node.js / NestJS', 'CI/CD', 'Real-time systems'].map(s => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2 py-1 border"
                    style={{
                      color: 'var(--color-accent)',
                      background: 'color-mix(in srgb, var(--color-accent) 8%, transparent)',
                      borderColor: 'color-mix(in srgb, var(--color-accent) 25%, transparent)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
