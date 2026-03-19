'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-32 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative overflow-hidden border p-10 md:p-20" style={{ borderColor: 'var(--color-border)' }}>
          {/* BG grid */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          <div className="absolute top-0 right-0 w-72 h-72 blur-[100px] pointer-events-none opacity-5" style={{ background: 'var(--color-accent)' }} />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-mono text-xs tracking-[0.3em] uppercase block mb-6"
              style={{ color: 'var(--color-accent)' }}
            >
              05 / Let's Talk
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold leading-none mb-6"
              style={{ fontSize: 'clamp(40px,7vw,96px)', color: 'var(--color-text)' }}
            >
              Got a project<br />
              in mind<span style={{ color: 'var(--color-accent)' }}>?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-body text-lg max-w-lg mb-12 leading-relaxed"
              style={{ color: 'var(--color-mid)' }}
            >
              I'm open to new opportunities — full-time roles, freelance projects, or just a good conversation about tech.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <a
                href="mailto:codevivekk@gmail.com"
                className="group inline-flex items-center gap-3 font-display font-bold text-base px-8 py-4 transition-colors duration-200"
                style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-accent-dim)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-accent)')}
              >
                <Mail size={18} />
                codevivekk@gmail.com
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t pt-8 mt-0 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="font-display font-bold text-lg" style={{ color: 'var(--color-text)' }}>
            VK<span style={{ color: 'var(--color-accent)' }}>.</span>
          </div>
          <div className="flex items-center gap-6">
            {[
              { href: 'https://github.com/codevivekk', Icon: Github },
              { href: 'https://linkedin.com/in/codevivekk', Icon: Linkedin },
              { href: 'mailto:codevivekk@gmail.com', Icon: Mail },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-muted)')}
                className="transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <div className="font-mono text-xs" style={{ color: 'var(--color-muted)' }}>
            © 2025 Vivek Kushwaha. Built with Next.js + Framer Motion.
          </div>
        </div>
      </div>
    </section>
  )
}
