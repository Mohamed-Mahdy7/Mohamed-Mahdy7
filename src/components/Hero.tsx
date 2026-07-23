import { motion } from 'framer-motion'
import { Download, ArrowRight, Mail, ChevronDown, Camera, Eye } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const techBadges = ['Python', 'Django', 'React', 'PostgreSQL', 'RAG / AI', 'Docker']

import photo from '../assets/photo.jpg'

const PHOTO_SRC = photo

function ProfilePhoto() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Outer glow ring */}
      <div
        className="photo-ring"
        style={{
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 50%, #2DD4BF 100%)',
          padding: '3px',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        {/* Inner circle — photo goes here */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            background: 'var(--c-surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {PHOTO_SRC ? (
            /* ── Your photo renders here ── */
            <img
              src={PHOTO_SRC}
              alt="Mohamed Mahdy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
          ) : (
            /* ── Placeholder shown when no photo is set ── */
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(160deg, #1A1040 0%, #0F0F1A 100%)',
              }}
            >
              {/* Initials */}
              <span
                style={{
                  fontSize: '3.5rem',
                  fontWeight: 900,
                  letterSpacing: '-0.05em',
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #A78BFA, #2DD4BF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MM
              </span>
              {/* Upload hint */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  color: 'var(--c-text3)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                <Camera size={11} />
                Add your photo
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating badge — availability */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '0px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.3rem 0.75rem',
          borderRadius: '99px',
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border2)',
          fontSize: '0.7rem',
          fontWeight: 700,
          color: 'var(--c-text)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          letterSpacing: '0.02em',
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 6px #22c55e',
            animation: 'pulse 2s infinite',
            display: 'inline-block',
          }}
        />
        Open to Work
      </div>
    </div>
  )
}

export default function Hero({ onViewCV }: { onViewCV: () => void }) {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="top"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5rem',
        paddingBottom: '4rem',
      }}
    >
      {/* Background glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(109,40,217,0.22) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(45,212,191,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at center, rgba(167,139,250,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* ── Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '1.25rem' }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(139,92,246,0.12)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  borderRadius: '99px',
                  padding: '0.3rem 0.9rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--c-primary-light)',
                }}
              >
                Backend · Full-Stack · AI/RAG Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                marginBottom: '0.6rem',
                color: 'var(--c-text)',
              }}
            >
              Mohamed<br />Mahdy
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginBottom: '1.25rem' }}
            >
              <span
                className="gradient-text"
                style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                }}
              >
                Python · Django · React · PostgreSQL · AI/RAG
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: '1.02rem',
                lineHeight: 1.75,
                color: 'var(--c-text2)',
                maxWidth: '540px',
                marginBottom: '2rem',
              }}
            >
              I build scalable backend systems, AI-powered pipelines, and full-stack
              products end-to-end — from 47-endpoint Django APIs to RAG architectures
              on pgvector. Business Admin background means I write code that solves
              real business problems.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2.25rem',
              }}
            >
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '0.375rem',
                    background: 'var(--c-surface2)',
                    border: '1px solid var(--c-border2)',
                    color: 'var(--c-text2)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              <button
                onClick={() => scrollTo('#projects')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.5rem',
                  background: 'linear-gradient(135deg, #6D28D9, #8B5CF6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.6rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(139,92,246,0.4)',
                  fontFamily: 'inherit',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.opacity = '0.9'; b.style.transform = 'translateY(-1px)' }}
                onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.opacity = '1'; b.style.transform = 'translateY(0)' }}
              >
                View My Work <ArrowRight size={16} />
              </button>

              {/* CV button group: View + Download */}
              <div
                style={{
                  display: 'inline-flex',
                  borderRadius: '0.6rem',
                  border: '1px solid var(--c-border2)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={onViewCV}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.7rem 1.1rem',
                    background: 'var(--c-surface2)',
                    color: 'var(--c-text)',
                    border: 'none',
                    borderRight: '1px solid var(--c-border2)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.background = 'rgba(139,92,246,0.12)'
                    b.style.color = 'var(--c-primary-light)'
                  }}
                  onMouseLeave={(e) => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.background = 'var(--c-surface2)'
                    b.style.color = 'var(--c-text)'
                  }}
                >
                  <Eye size={15} /> View CV
                </button>
                <a
                  href="/cv.pdf"
                  download="Mohamed_Mahdy_CV.pdf"
                  title="Download CV"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.7rem 0.85rem',
                    background: 'var(--c-surface2)',
                    color: 'var(--c-text2)',
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement
                    a.style.background = 'rgba(139,92,246,0.12)'
                    a.style.color = 'var(--c-primary-light)'
                  }}
                  onMouseLeave={(e) => {
                    const a = e.currentTarget as HTMLAnchorElement
                    a.style.background = 'var(--c-surface2)'
                    a.style.color = 'var(--c-text2)'
                  }}
                >
                  <Download size={15} />
                </a>
              </div>

              <button
                onClick={() => scrollTo('#contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.5rem',
                  background: 'transparent',
                  color: 'var(--c-cyan)',
                  border: '1px solid rgba(45,212,191,0.4)',
                  borderRadius: '0.6rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(45,212,191,0.08)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
              >
                <Mail size={16} /> Get in Touch
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{ display: 'flex', gap: '0.6rem' }}
            >
              {[
                { href: 'https://github.com/Mohamed-Mahdy7', icon: <GithubIcon size={17} />, label: 'GitHub' },
                { href: 'https://linkedin.com/in/mohamed-mahdy257', icon: <LinkedinIcon size={17} />, label: 'LinkedIn' },
                { href: 'mailto:mohamedmahdy648@gmail.com', icon: <Mail size={17} />, label: 'Email' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: '0.5rem',
                    background: 'var(--c-surface2)',
                    border: '1px solid var(--c-border2)',
                    color: 'var(--c-text2)',
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
                    el.style.background = 'var(--c-surface2)'
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={() => scrollTo('#about')}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--c-text3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          fontSize: '0.68rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr auto !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
