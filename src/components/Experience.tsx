import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

interface Job {
  title: string
  company: string
  period: string
  type: string
  color: string
  achievements: string[]
  tech: string[]
}

const jobs: Job[] = [
  {
    title: 'Tech Lead & Full-Stack / AI Developer',
    company: 'AcademiQ — ITI Graduation Project',
    period: 'Feb 2026 – Jun 2026',
    type: 'Contract · Cairo, Egypt',
    color: '#818cf8',
    achievements: [
      'Tech-led a 4-engineer team as sole architect — owned all technical decisions, ran sprint planning, and broke scope into 58 tickets across 6 sprints, shipping a production-ready SaaS platform in 4 weeks.',
      'Architected the platform\'s RAG pipeline from scratch (pgvector + Gemini API), powering automated report-card generation for students.',
      'Engineered a Celery-based dropout-risk detection engine that scans student activity on a schedule and auto-flags at-risk students, cutting admin follow-up time by 15%.',
      'Built an AI cost-control layer (response caching + usage logging) that reduced redundant LLM calls and kept costs predictable.',
      'Delivered 47 documented REST API endpoints with RBAC and multilingual support; defined a single interface contract so 3 teammates could consume AI features without touching model internals — eliminating integration bugs.',
      'Deployed backend to Railway and frontend to Vercel with 2 zero-downtime releases.',
    ],
    tech: ['Django', 'DRF', 'React', 'PostgreSQL', 'pgvector', 'Gemini API', 'Celery', 'Redis', 'Railway', 'Vercel'],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Trust Grp',
    period: 'Nov 2024 – Dec 2025',
    type: 'Full-time · Cairo, Egypt',
    color: '#06b6d4',
    achievements: [
      'Built and shipped Python/Flask backend services powering core business workflows, integrating with frontend to deliver end-to-end features.',
      'Designed and documented RESTful APIs for third-party integrations, reducing partner onboarding friction with clear Postman collections.',
      'Implemented JWT-based authentication and authorization across 3 services, closing every protected endpoint against unauthorized access.',
      'Tuned SQL Server queries, indexes, and schema design for improved query performance across high-frequency business operations.',
      'Owned production deployments and database migrations across 2 releases with zero data-loss incidents.',
    ],
    tech: ['Python', 'Flask', 'SQLAlchemy', 'SQL Server', 'JWT Auth', 'REST API', 'Postman', 'Git'],
  },
  {
    title: 'Odoo Developer',
    company: 'Trust Grp',
    period: 'Jul 2024 – Oct 2024',
    type: 'Full-time · Cairo, Egypt',
    color: '#f59e0b',
    achievements: [
      'Customized Python-based Odoo 17 modules covering 4 business processes, including Arabic-localized financial reporting used by end users in production.',
      'Optimized PostgreSQL queries powering ERP workflows, improving report generation speed.',
      'Automated recurring backend processes via scheduled Python jobs, reducing manual overhead for finance team.',
    ],
    tech: ['Python', 'Odoo 17', 'PostgreSQL', 'Arabic Localization', 'Financial Reporting'],
  },
  {
    title: 'Trainee — Full-Stack & Generative AI',
    company: 'Information Technology Institute (ITI)',
    period: 'Jan 2026 – Jun 2026',
    type: '6-Month Intensive Track · Cairo, Egypt',
    color: '#a78bfa',
    achievements: [
      'Completed a 6-month, full-time Full-Stack Web & Generative AI Development track (Python stack).',
      'Covered frontend (HTML/CSS/JS/React), backend (Django/DRF/Flask), databases (PostgreSQL/MySQL), and applied LLM/RAG integration.',
      'Capstone project: AcademiQ — architected and shipped as Tech Lead (see above).',
    ],
    tech: ['Python', 'Django', 'React', 'PostgreSQL', 'RAG', 'LLM Integration'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0' }}>
      <div className="section-container">
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
            // Work Experience
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
            Career{' '}
            <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '22px',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, var(--c-border2) 10%, var(--c-border2) 90%, transparent)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {jobs.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  paddingLeft: '0',
                  paddingBottom: i < jobs.length - 1 ? '2.5rem' : '0',
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '44px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: `${job.color}18`,
                      border: `2px solid ${job.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: job.color,
                      flexShrink: 0,
                      zIndex: 1,
                      position: 'relative',
                    }}
                  >
                    <Briefcase size={16} />
                  </div>
                </div>

                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    padding: '1.75rem',
                    borderRadius: '1rem',
                    background: 'var(--c-surface)',
                    border: '1px solid var(--c-border)',
                    boxShadow: 'var(--card-glow)',
                    marginBottom: '0',
                    transition: 'box-shadow 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--card-hover-glow)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--card-glow)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          color: 'var(--c-text)',
                          marginBottom: '0.2rem',
                          lineHeight: 1.3,
                        }}
                      >
                        {job.title}
                      </h3>
                      <div
                        style={{
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          color: job.color,
                          marginBottom: '0.15rem',
                        }}
                      >
                        {job.company}
                      </div>
                      <div
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--c-text3)',
                        }}
                      >
                        {job.type}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '99px',
                        background: 'var(--c-surface2)',
                        border: '1px solid var(--c-border2)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: 'var(--c-text2)',
                        whiteSpace: 'nowrap',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      <Calendar size={12} />
                      {job.period}
                    </div>
                  </div>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '1rem 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                    }}
                  >
                    {job.achievements.map((ach) => (
                      <li
                        key={ach.slice(0, 40)}
                        style={{
                          display: 'flex',
                          gap: '0.6rem',
                          fontSize: '0.875rem',
                          color: 'var(--c-text2)',
                          lineHeight: 1.6,
                          alignItems: 'flex-start',
                        }}
                      >
                        <span
                          style={{
                            marginTop: '0.45rem',
                            flexShrink: 0,
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: job.color,
                            display: 'inline-block',
                          }}
                        />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '0.3rem',
                          background: `${job.color}12`,
                          border: `1px solid ${job.color}30`,
                          color: job.color,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
