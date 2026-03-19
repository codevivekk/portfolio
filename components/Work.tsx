'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative block border transition-all duration-300 overflow-hidden"
      style={{
        background: 'var(--color-surface)',
        borderColor: hovered ? 'color-mix(in srgb, var(--color-accent) 40%, transparent)' : 'var(--color-border)',
      }}
    >
      {/* Hover glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 5%, transparent), transparent)' }}
      />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase border px-2 py-0.5 mb-2"
              style={{ color: 'var(--color-accent)', borderColor: 'color-mix(in srgb, var(--color-accent) 30%, transparent)', background: 'color-mix(in srgb, var(--color-accent) 6%, transparent)' }}
            >
              {project.category}
            </span>
            <div className="font-mono text-xs" style={{ color: 'var(--color-muted)' }}>{project.company}</div>
          </div>
          <motion.div animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0.4 }} transition={{ duration: 0.2 }}>
            <ArrowUpRight size={18} style={{ color: 'var(--color-accent)' }} />
          </motion.div>
        </div>

        <h3 className="font-display font-bold text-xl mb-3 transition-colors" style={{ color: hovered ? 'var(--color-accent)' : 'var(--color-text)' }}>
          {project.title}
        </h3>

        <p className="font-body text-sm leading-relaxed mb-5" style={{ color: 'var(--color-mid)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-[10px] border px-2 py-0.5 tracking-wide"
              style={{ color: 'var(--color-muted)', background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
            >
              {t}
            </span>
          ))}
        </div>

        {project.metric && (
          <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
            <span className="font-mono text-xs" style={{ color: 'var(--color-accent)' }}>{project.metric}</span>
          </div>
        )}
      </div>
    </motion.a>
  )
}

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="work" className="py-32 max-w-7xl mx-auto px-6">
      <div ref={ref} className="flex items-end justify-between mb-16">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.3em] uppercase block mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            02 / Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold leading-none"
            style={{ fontSize: 'clamp(36px,5vw,64px)', color: 'var(--color-text)' }}
          >
            Things I've<br />
            <span style={{ color: 'var(--color-accent)' }}>Built</span>
          </motion.h2>
        </div>
        <motion.a
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          href="https://github.com/codevivekk"
          target="_blank"
          className="hidden md:flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors"
          style={{ color: 'var(--color-mid)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-mid)')}
        >
          GitHub <ArrowUpRight size={14} />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {featured.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>

      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rest.map((p, i) => <ProjectCard key={p.id} project={p} index={i + featured.length} />)}
        </div>
      )}
    </section>
  )
}
