import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

interface NavProps {
  isDark: boolean
  toggleTheme: () => void
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ isDark, toggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          background: scrolled
            ? isDark
              ? 'rgba(2, 6, 23, 0.85)'
              : 'rgba(248, 250, 252, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid var(--c-border)` : '1px solid transparent',
        }}
      >
        <div className="section-container flex items-center justify-between h-16">
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ textDecoration: 'none' }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                fontSize: '1.1rem',
                letterSpacing: '-0.02em',
                color: 'var(--c-text)',
              }}
            >
              <span style={{ color: 'var(--c-primary-light)' }}>{'<'}</span>
              MM
              <span style={{ color: 'var(--c-primary-light)' }}>{'/'}</span>
              <span style={{ color: 'var(--c-cyan)' }}>{'>'}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => navClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--c-text2)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.5rem',
                  transition: 'color 0.2s, background 0.2s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--c-text)'
                  ;(e.currentTarget as HTMLButtonElement).style.background = 'var(--c-surface2)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--c-text2)'
                  ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              style={{
                background: 'var(--c-surface2)',
                border: '1px solid var(--c-border2)',
                borderRadius: '0.5rem',
                padding: '0.4rem',
                cursor: 'pointer',
                color: 'var(--c-text2)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.2s, background 0.2s',
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
              style={{
                background: 'var(--c-surface2)',
                border: '1px solid var(--c-border2)',
                borderRadius: '0.5rem',
                padding: '0.4rem',
                cursor: 'pointer',
                color: 'var(--c-text2)',
                display: 'flex',
                alignItems: 'center',
              }}
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '4rem',
              left: 0,
              right: 0,
              zIndex: 49,
              background: 'var(--c-surface)',
              borderBottom: '1px solid var(--c-border)',
              padding: '1rem 1.5rem',
            }}
          >
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => navClick(link.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--c-text2)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  padding: '0.65rem 0',
                  borderBottom: '1px solid var(--c-border)',
                  fontFamily: 'inherit',
                }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
