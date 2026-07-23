import { motion } from 'framer-motion'
import { MapPin, Briefcase, GraduationCap, Sparkles, Code2, Building2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const strengths = [
  {
    icon: <Code2 size={18} />,
    title: 'Systems Architecture',
    desc: 'Designing scalable APIs, RAG pipelines, and data models that handle real production workloads.',
  },
  {
    icon: <Sparkles size={18} />,
    title: 'AI Integration',
    desc: 'Building LLM-powered features with cost controls, caching, and responsible usage patterns.',
  },
  {
    icon: <Building2 size={18} />,
    title: 'Technical Leadership',
    desc: 'Led a 4-engineer team from kickoff to production — sprint planning, ticket scoping, architecture decisions.',
  },
]

const facts = [
  { icon: <Briefcase size={15} />, label: 'Current', value: 'Open to Work' },
  { icon: <MapPin size={15} />, label: 'Location', value: 'Cairo, Egypt' },
  { icon: <GraduationCap size={15} />, label: 'Education', value: 'B.Sc. Business Administration' },
  { icon: <Sparkles size={15} />, label: 'Focus', value: 'Backend · Full-Stack · AI/RAG' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <motion.div custom={0} variants={fadeUp}>
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
              // About Me
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUp}
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--c-text)',
              lineHeight: 1.15,
            }}
          >
            Bridging Business Logic
            <br />
            <span className="gradient-text">& Scalable Engineering</span>
          </motion.h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
          }}
          className="about-grid"
        >
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--c-text2)',
                marginBottom: '1.5rem',
              }}
            >
              I'm a Full-Stack Developer who brings both technical depth and business awareness to
              every system I build. My unconventional path — Business Administration at Tanta
              University, then an intensive 6-month Full-Stack + Generative AI track at ITI —
              means I approach engineering problems with both product thinking and code discipline.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'var(--c-text2)',
                marginBottom: '2rem',
              }}
            >
              At Trust Grp, I built and maintained production Flask APIs and Odoo 17 ERP
              customizations for real business clients. At ITI, I tech-led a 4-engineer team to
              ship AcademiQ — a Django/DRF + React SaaS platform with a full RAG/AI layer I
              personally architected (pgvector, Gemini API, Celery automation).
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {strengths.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1rem 1.25rem',
                    borderRadius: '0.75rem',
                    background: 'var(--c-surface)',
                    border: '1px solid var(--c-border)',
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: '36px',
                      height: '36px',
                      borderRadius: '0.5rem',
                      background: 'rgba(139,92,246,0.12)',
                      color: 'var(--c-primary-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'var(--c-text)',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {s.title}
                    </div>
                    <div style={{ fontSize: '0.83rem', color: 'var(--c-text2)', lineHeight: 1.6 }}>
                      {s.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: facts card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              style={{
                padding: '2rem',
                borderRadius: '1rem',
                background: 'var(--c-surface)',
                border: '1px solid var(--c-border2)',
                boxShadow: 'var(--card-glow)',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem',
                  color: 'var(--c-text3)',
                  marginBottom: '1.25rem',
                  letterSpacing: '0.05em',
                }}
              >
                const developer = {'{'}
              </div>
              {facts.map((f) => (
                <div
                  key={f.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.65rem 0',
                    borderBottom: '1px solid var(--c-border)',
                  }}
                >
                  <div style={{ color: 'var(--c-text3)', flexShrink: 0 }}>{f.icon}</div>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--c-text3)',
                      minWidth: '80px',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {f.label}:
                  </span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--c-text)' }}>
                    {f.value}
                  </span>
                </div>
              ))}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.78rem',
                  color: 'var(--c-text3)',
                  marginTop: '1.25rem',
                  letterSpacing: '0.05em',
                }}
              >
                {'}'}
              </div>
            </div>

            <div
              style={{
                padding: '1.5rem',
                borderRadius: '0.875rem',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(45,212,191,0.08))',
                border: '1px solid rgba(139,92,246,0.25)',
              }}
            >
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: 'var(--c-text2)',
                  margin: 0,
                  fontStyle: 'italic',
                }}
              >
                "I target backend and full-stack roles where I can own systems end-to-end —
                from ERD design and API contracts to deployment and monitoring. My Business Admin
                background isn't a detour; it's my edge in stakeholder communication and
                product-aware engineering."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 3fr 2fr !important;
          }
        }
      `}</style>
    </section>
  )
}
