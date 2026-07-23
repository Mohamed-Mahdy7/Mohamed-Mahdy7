import { motion } from 'framer-motion'
import { GraduationCap, Award, ExternalLink, BadgeCheck } from 'lucide-react'

const education = [
  {
    type: 'degree',
    title: "Bachelor's Degree in Business Administration",
    institution: 'Faculty of Commerce, Tanta University',
    period: '2022',
    icon: <GraduationCap size={22} />,
    color: '#A78BFA',
    description:
      'Gained deep understanding of business operations, stakeholder management, financial analysis, and organizational strategy — skills that sharpen technical product decisions and stakeholder communication.',
    highlights: ['Business Strategy', 'Financial Analysis', 'Stakeholder Communication', 'Project Management'],
    link: null,
    linkLabel: null,
  },
  {
    type: 'training',
    title: 'Full-Stack Web & Generative AI Development',
    institution: 'Information Technology Institute (ITI)',
    period: 'Jan 2026 – Jun 2026',
    icon: <Award size={22} />,
    color: '#2DD4BF',
    description:
      '6-month, full-time intensive track covering the complete Python full-stack ecosystem, from frontend to backend to applied Generative AI and RAG engineering. Capstone: AcademiQ SaaS platform.',
    highlights: ['Django / DRF', 'React', 'PostgreSQL', 'LLM / RAG Integration', 'Generative AI'],
    link: 'https://iti.gov.eg',
    linkLabel: 'ITI Website',
  },
]

const certifications = [
  {
    title: 'McKinsey Forward Program',
    issuer: 'McKinsey & Company',
    date: 'Dec 2025',
    color: '#f59e0b',
    // ── Replace with your actual certificate verification URL ──
    verifyUrl: 'https://www.mckinsey.com/forward/overview',
    verifyLabel: 'View Certificate',
    description:
      "A rigorous leadership and problem-solving program by McKinsey covering structured thinking, adaptability frameworks, and professional communication — delivered to top talent globally.",
  },
  {
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University (via edX)',
    date: 'Dec 2025',
    color: '#A78BFA',
    // ── Replace with your actual CS50 certificate URL from certificates.cs50.io ──
    verifyUrl: 'https://certificates.cs50.io',
    verifyLabel: 'View Certificate',
    description:
      "Harvard's world-renowned CS introduction covering algorithms, data structures, memory management, C, Python, SQL, and web development fundamentals. Verified via edX / CS50 certificate system.",
  },
]

const languages = [
  { name: 'Arabic', level: 'Native', pct: 100, color: '#A78BFA' },
  { name: 'English', level: 'Professional Working', pct: 80, color: '#2DD4BF' },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '6rem 0' }}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
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
            // Education & Credentials
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
            Learning &{' '}
            <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        {/* Education cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '1.75rem',
                borderRadius: '1rem',
                background: 'var(--c-surface)',
                border: '1px solid var(--c-border)',
                boxShadow: 'var(--card-glow)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                }}
              />
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '48px',
                  height: '48px',
                  borderRadius: '0.75rem',
                  background: `${edu.color}18`,
                  color: edu.color,
                  marginBottom: '1rem',
                }}
              >
                {edu.icon}
              </div>
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--c-text)',
                  marginBottom: '0.3rem',
                  lineHeight: 1.3,
                }}
              >
                {edu.title}
              </h3>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: edu.color, marginBottom: '0.15rem' }}>
                {edu.institution}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: 'var(--c-text3)',
                  marginBottom: '1rem',
                }}
              >
                {edu.period}
              </div>
              <p
                style={{
                  fontSize: '0.85rem',
                  lineHeight: 1.65,
                  color: 'var(--c-text2)',
                  marginBottom: '1rem',
                  flex: 1,
                }}
              >
                {edu.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: edu.link ? '1rem' : '0' }}>
                {edu.highlights.map((h) => (
                  <span
                    key={h}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.55rem',
                      borderRadius: '0.3rem',
                      background: `${edu.color}12`,
                      border: `1px solid ${edu.color}25`,
                      color: edu.color,
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
              {edu.link && (
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: edu.color,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
                >
                  <ExternalLink size={12} /> {edu.linkLabel}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <h3
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: 'var(--c-text)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <BadgeCheck size={18} style={{ color: 'var(--c-primary-light)' }} />
            Certifications
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0.875rem',
                  background: 'var(--c-surface)',
                  border: '1px solid var(--c-border)',
                  display: 'flex',
                  gap: '1.1rem',
                  alignItems: 'flex-start',
                  transition: 'box-shadow 0.3s, border-color 0.3s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = 'var(--card-hover-glow)'
                  el.style.borderColor = `${cert.color}35`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.boxShadow = 'none'
                  el.style.borderColor = 'var(--c-border)'
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '44px',
                    height: '44px',
                    borderRadius: '0.625rem',
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}30`,
                    color: cert.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Award size={20} />
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.15rem',
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--c-text)' }}>
                      {cert.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem',
                        color: 'var(--c-text3)',
                        flexShrink: 0,
                      }}
                    >
                      {cert.date}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.82rem', fontWeight: 600, color: cert.color, marginBottom: '0.5rem' }}>
                    {cert.issuer}
                  </div>

                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--c-text2)',
                      lineHeight: 1.6,
                      margin: '0 0 0.75rem',
                    }}
                  >
                    {cert.description}
                  </p>

                  {/* Certificate link */}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.32rem 0.75rem',
                      borderRadius: '0.4rem',
                      background: `${cert.color}14`,
                      border: `1px solid ${cert.color}30`,
                      color: cert.color,
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${cert.color}25`
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = `${cert.color}14`
                    }}
                  >
                    <ExternalLink size={11} />
                    {cert.verifyLabel}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: 'var(--c-text)',
              marginBottom: '1rem',
            }}
          >
            Languages
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {languages.map((lang) => (
              <div
                key={lang.name}
                style={{
                  flex: '1',
                  minWidth: '180px',
                  padding: '1.25rem',
                  borderRadius: '0.75rem',
                  background: 'var(--c-surface)',
                  border: '1px solid var(--c-border)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--c-text)' }}>
                    {lang.name}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--c-text3)' }}>{lang.level}</span>
                </div>
                <div
                  style={{
                    height: '4px',
                    borderRadius: '2px',
                    background: 'var(--c-border2)',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${lang.color}, #2DD4BF)`,
                      borderRadius: '2px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
