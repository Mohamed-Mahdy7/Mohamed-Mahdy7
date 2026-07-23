import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Server, Globe, Database, Sparkles, Cloud, Settings, Users } from 'lucide-react'

interface Category {
  id: string
  label: string
  icon: React.ReactNode
  color: string
  skills: string[]
}

const categories: Category[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: <Terminal size={16} />,
    color: '#A78BFA',
    skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <Server size={16} />,
    color: '#8B5CF6',
    skills: ['Django', 'Django REST Framework', 'Flask', 'SQLAlchemy', 'Celery', 'JWT Auth', 'RBAC', 'WebSockets', 'REST API Design'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Globe size={16} />,
    color: '#2DD4BF',
    skills: ['React', 'TailwindCSS', 'HTML5', 'CSS3', 'Bootstrap 5', 'jQuery'],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: <Database size={16} />,
    color: '#34d399',
    skills: ['PostgreSQL', 'pgvector', 'MySQL', 'Microsoft SQL Server', 'MongoDB', 'Redis'],
  },
  {
    id: 'ai',
    label: 'AI & RAG',
    icon: <Sparkles size={16} />,
    color: '#f59e0b',
    skills: ['RAG Pipeline Design', 'pgvector', 'Gemini API', 'LLM Integration', 'OpenAI Fine-tuning', 'Prompt Engineering', 'AI Cost Control', 'Usage Logging'],
  },
  {
    id: 'devops',
    label: 'Cloud & DevOps',
    icon: <Cloud size={16} />,
    color: '#ec4899',
    skills: ['Docker', 'Railway', 'Vercel', 'Git / GitHub', 'Linux', 'Postman', 'CI/CD Basics'],
  },
  {
    id: 'erp',
    label: 'ERP',
    icon: <Settings size={16} />,
    color: '#f97316',
    skills: ['Odoo 17 Development', 'Arabic Localization', 'Financial Reporting (PFA)', 'Business Process Automation'],
  },
  {
    id: 'practices',
    label: 'Practices',
    icon: <Users size={16} />,
    color: '#a78bfa',
    skills: ['Agile / Scrum', 'Technical Leadership', 'Sprint Planning', 'ERD Design', 'API Documentation', 'Unit Testing', 'Code Review'],
  },
]

export default function Skills() {
  const [active, setActive] = useState('backend')
  const activeCategory = categories.find((c) => c.id === active)!

  return (
    <section
      id="skills"
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
          style={{ marginBottom: '3rem' }}
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
            // Technical Skills
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
            What I Work With
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                borderRadius: '0.5rem',
                border: '1px solid',
                fontSize: '0.83rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                background: active === cat.id ? `${cat.color}18` : 'var(--c-bg)',
                borderColor: active === cat.id ? cat.color : 'var(--c-border2)',
                color: active === cat.id ? cat.color : 'var(--c-text2)',
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              padding: '2rem',
              borderRadius: '1rem',
              background: 'var(--c-bg)',
              border: `1px solid ${activeCategory.color}30`,
              minHeight: '160px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '0.5rem',
                  background: `${activeCategory.color}18`,
                  color: activeCategory.color,
                }}
              >
                {activeCategory.icon}
              </div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: activeCategory.color,
                }}
              >
                {activeCategory.label}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  color: 'var(--c-text3)',
                  marginLeft: 'auto',
                }}
              >
                {activeCategory.skills.length} skills
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {activeCategory.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.4rem 0.875rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    background: 'var(--c-surface)',
                    border: `1px solid var(--c-border2)`,
                    color: 'var(--c-text)',
                    cursor: 'default',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = activeCategory.color
                    el.style.background = `${activeCategory.color}10`
                    el.style.color = activeCategory.color
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--c-border2)'
                    el.style.background = 'var(--c-surface)'
                    el.style.color = 'var(--c-text)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All skills mini grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: '2rem' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '0.5rem',
            }}
          >
            {categories.filter(c => c.id !== active).map((cat) =>
              cat.skills.slice(0, 2).map((skill) => (
                <div
                  key={`${cat.id}-${skill}`}
                  onClick={() => setActive(cat.id)}
                  style={{
                    padding: '0.4rem 0.75rem',
                    borderRadius: '0.4rem',
                    fontSize: '0.75rem',
                    color: 'var(--c-text3)',
                    background: 'var(--c-bg)',
                    border: '1px solid var(--c-border)',
                    cursor: 'pointer',
                    transition: 'color 0.2s, border-color 0.2s',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {skill}
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
