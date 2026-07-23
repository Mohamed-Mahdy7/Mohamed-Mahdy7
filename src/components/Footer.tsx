import { motion } from 'framer-motion'
import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const socials = [
  { icon: <GithubIcon size={18} />, href: 'https://github.com/Mohamed-Mahdy7', label: 'GitHub' },
  { icon: <LinkedinIcon size={18} />, href: 'https://linkedin.com/in/mohamed-mahdy257', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:mohamedmahdy648@gmail.com', label: 'Email' },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const navClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        background: 'var(--c-bg)',
        borderTop: '1px solid var(--c-border)',
        padding: '3rem 0 2rem',
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: '1.1rem',
                marginBottom: '0.75rem',
                color: 'var(--c-text)',
              }}
            >
              <span style={{ color: 'var(--c-primary-light)' }}>{'<'}</span>
              Mohamed Mahdy
              <span style={{ color: 'var(--c-primary-light)' }}>{'/'}</span>
              <span style={{ color: 'var(--c-cyan)' }}>{'>'}</span>
            </div>
            <p style={{ fontSize: '0.83rem', color: 'var(--c-text3)', lineHeight: 1.6 }}>
              Full-Stack Developer · Python · Django · React · AI/RAG
              <br />
              Cairo, Egypt · Open to Work
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--c-text3)',
                marginBottom: '0.75rem',
              }}
            >
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--c-text3)',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    textAlign: 'left',
                    padding: '0.1rem 0',
                    fontFamily: 'inherit',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--c-primary-light)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--c-text3)' }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--c-text3)',
                marginBottom: '0.75rem',
              }}
            >
              Connect
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '0.5rem',
                    background: 'var(--c-surface)',
                    border: '1px solid var(--c-border2)',
                    color: 'var(--c-text2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = 'var(--c-primary-light)'
                    el.style.borderColor = 'rgba(139,92,246,0.5)'
                    el.style.background = 'rgba(139,92,246,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = 'var(--c-text2)'
                    el.style.borderColor = 'var(--c-border2)'
                    el.style.background = 'var(--c-surface)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--c-border)',
          }}
        >
          <p style={{ fontSize: '0.78rem', color: 'var(--c-text3)', margin: 0 }}>
            © {new Date().getFullYear()} Mohamed Mahdy. Built with React + Framer Motion.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.875rem',
              borderRadius: '0.5rem',
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border2)',
              color: 'var(--c-text3)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'color 0.2s',
            }}
          >
            <ArrowUp size={13} /> Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
