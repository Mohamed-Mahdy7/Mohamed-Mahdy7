import { motion } from 'framer-motion'
import { Quote, Star, MessageSquarePlus, Users } from 'lucide-react'

// ── Add real testimonials here when you collect them ──────────────────
// Each entry will render as a card exactly matching the design below.
// Required fields: text, name, role, initials, color (any hex)
export interface Testimonial {
  text: string
  name: string
  role: string
  initials: string
  color: string
  avatar?: string   // optional photo URL
  stars?: number    // defaults to 5
}

const testimonials: Testimonial[] = [
  // Example — uncomment and fill in when you have real testimonials:
  // {
  //   text: "Mohamed architected our entire AI layer from scratch...",
  //   name: "Jane Smith",
  //   role: "Tech Lead · Acme Corp",
  //   initials: "JS",
  //   color: "#A78BFA",
  // },
]

function TestimonialCard({ t, i }: { t: Testimonial; i: number }) {
  const stars = t.stars ?? 5
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      style={{
        padding: '1.75rem',
        borderRadius: '1rem',
        background: 'var(--c-bg)',
        border: '1px solid var(--c-border2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
      }}
    >
      <Quote size={24} style={{ color: t.color, marginBottom: '0.875rem', opacity: 0.75 }} />

      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.75rem' }}>
        {[...Array(5)].map((_, si) => (
          <Star
            key={si}
            size={13}
            style={{ color: si < stars ? '#fbbf24' : 'var(--c-border2)', fill: si < stars ? '#fbbf24' : 'none' }}
          />
        ))}
      </div>

      <p
        style={{
          fontSize: '0.9rem',
          lineHeight: 1.75,
          color: 'var(--c-text2)',
          marginBottom: '1.5rem',
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        "{t.text}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {t.avatar ? (
          <img
            src={t.avatar}
            alt={t.name}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: `2px solid ${t.color}40`,
            }}
          />
        ) : (
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: `${t.color}20`,
              border: `1px solid ${t.color}40`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: t.color,
              fontFamily: "'JetBrains Mono', monospace",
              flexShrink: 0,
            }}
          >
            {t.initials}
          </div>
        )}
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--c-text)' }}>{t.name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--c-text3)' }}>{t.role}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0

  return (
    <section
      style={{
        padding: '6rem 0',
        background: 'var(--c-surface)',
        borderTop: '1px solid var(--c-border)',
        borderBottom: '1px solid var(--c-border)',
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: hasTestimonials ? '3.5rem' : '2.5rem' }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--c-cyan)',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            // Testimonials
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--c-text)',
              lineHeight: 1.15,
            }}
          >
            What People{' '}
            <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        {/* Real testimonials grid — renders when array is populated */}
        {hasTestimonials && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} i={i} />
            ))}
          </div>
        )}

        {/* Empty state — shown until real testimonials are added */}
        {!hasTestimonials && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '4rem 2rem',
              borderRadius: '1.25rem',
              background: 'var(--c-bg)',
              border: '1px solid var(--c-border2)',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(139,92,246,0.1)',
                border: '1px solid rgba(139,92,246,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                color: 'var(--c-primary-light)',
              }}
            >
              <Users size={28} />
            </div>
            <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--c-text)', marginBottom: '0.5rem' }}>
              No testimonials yet
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--c-text3)', maxWidth: '360px', lineHeight: 1.6 }}>
              This section will display reviews from colleagues, clients, and collaborators.
              Be the first to leave one.
            </p>
          </motion.div>
        )}

        {/* Always-visible invite CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '1rem',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(45,212,191,0.05))',
            border: '1px dashed rgba(139,92,246,0.28)',
          }}
        >
          <MessageSquarePlus
            size={26}
            style={{ color: 'var(--c-primary-light)', margin: '0 auto 0.65rem', display: 'block' }}
          />
          <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--c-text)', marginBottom: '0.3rem' }}>
            Worked with me? I'd love to hear from you.
          </h3>
          <p style={{ fontSize: '0.83rem', color: 'var(--c-text2)', marginBottom: '1rem', maxWidth: '400px', margin: '0 auto 1rem' }}>
            Testimonials from colleagues, clients, and collaborators help others understand how I work.
          </p>
          <a
            href="mailto:mohamedmahdy648@gmail.com?subject=Testimonial for Mohamed Mahdy"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.55rem 1.25rem',
              borderRadius: '0.5rem',
              background: 'rgba(139,92,246,0.14)',
              border: '1px solid rgba(139,92,246,0.32)',
              color: 'var(--c-primary-light)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,0.22)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,0.14)' }}
          >
            <MessageSquarePlus size={14} /> Leave a Testimonial
          </a>
        </motion.div>
      </div>
    </section>
  )
}
