import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, CheckCircle } from 'lucide-react'
import { GithubIcon } from './Icons'

interface Project {
  title: string
  tagline: string
  description: string
  longDescription: string
  tech: string[]
  color: string
  gradient: string
  github: string
  demo?: string
  highlights: string[]
  challenge: string
  solution: string
  category: string
}

const projects: Project[] = [
  {
    title: 'AcademiQ',
    tagline: 'Full-Stack SaaS + RAG/AI Platform',
    description: 'A production-grade Django/DRF + React SaaS platform with an AI layer powering automated report-card generation, dropout-risk detection, and real-time student insights.',
    longDescription: 'AcademiQ is an educational management SaaS I tech-led as the sole architect on a 4-engineer team. The platform combines a robust Django REST backend with a React frontend and a proprietary RAG/AI infrastructure I built from scratch.',
    tech: ['Django', 'DRF', 'React', 'PostgreSQL', 'pgvector', 'Gemini API', 'Celery', 'Redis', 'Railway', 'Vercel'],
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    github: 'https://github.com/Mohamed-Mahdy7/AcademyQ',
    highlights: [
      '47 documented REST API endpoints with RBAC',
      'RAG pipeline on pgvector + Gemini API',
      'Celery dropout-risk detection (15% admin time saved)',
      'AI cost-control layer with response caching',
      'Zero-downtime deployment on Railway + Vercel',
      '4-engineer team delivered in 4 weeks',
    ],
    challenge: 'Building an AI pipeline that teammates could consume without knowing model internals, while keeping LLM costs predictable.',
    solution: 'Defined a single interface contract (get_student_context()) and built a response-caching + usage-logging layer on top of the Gemini client. Zero integration bugs from DB access.',
    category: 'SaaS · AI',
  },
  {
    title: 'PDFs Chat',
    tagline: 'RAG Platform with Real-Time Chat',
    description: 'A Django-based RAG platform enabling authenticated users to upload PDFs and chat with their content in real time via WebSockets.',
    longDescription: 'PDFs Chat is a document intelligence platform built on the RAG (Retrieval Augmented Generation) pattern. Users authenticate, upload PDF documents, which are chunked and vectorized, then ask questions via a WebSocket-driven chat interface.',
    tech: ['Django', 'DRF', 'pgvector', 'WebSockets', 'JWT Auth', 'RBAC', 'PostgreSQL'],
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    github: 'https://github.com/Mohamed-Mahdy7/PDFs-Chat',
    highlights: [
      'Full RAG pipeline with PDF chunking and vectorization',
      'WebSocket-driven real-time chat responses',
      'JWT authentication with role-based access control',
      'PostgreSQL + pgvector for semantic search',
    ],
    challenge: 'Delivering low-latency responses from an LLM-backed system while handling concurrent users.',
    solution: 'Used Django Channels with WebSockets for streaming, and pgvector for fast approximate nearest-neighbor search over document embeddings.',
    category: 'AI · RAG',
  },
  {
    title: 'Spaxet',
    tagline: 'POS & Session Management API',
    description: 'A production Flask backend on Microsoft SQL Server exposing RESTful APIs for point-of-sale transactions, session management, and third-party integrations.',
    longDescription: 'Spaxet is a backend-first POS system API built for Trust Grp\'s internal use. Designed to be integration-friendly, it powers session tracking, inventory, and sales workflows.',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'pyodbc', 'SQL Server', 'JWT Auth', 'REST API', 'Postman'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    highlights: [
      'RESTful APIs for POS and session management',
      'Third-party integration support with documented Postman collections',
      'JWT-secured endpoints across all protected routes',
      'SQL Server schema design and query optimization',
    ],
    challenge: 'Ensuring third-party integrators could onboard quickly without direct developer involvement.',
    solution: 'Built comprehensive Postman collections and Swagger-style API documentation alongside the API, reducing partner integration time significantly.',
    category: 'Backend · API',
  },
  {
    title: 'Vegist',
    tagline: 'Multi-Actor E-Commerce Web App',
    description: 'A fully client-side multi-actor e-commerce application with product catalog, cart, checkout, and order management — all persisted in LocalStorage.',
    longDescription: 'Vegist is a feature-rich e-commerce frontend built with vanilla JS and Bootstrap 5. It supports multiple user roles (customer, admin, vendor) and implements a complete shopping flow without a backend.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'jQuery', 'LocalStorage API'],
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
    github: 'https://github.com/Mohamed-Mahdy7/VegistProject',
    highlights: [
      'Multi-actor role system (customer, admin, vendor)',
      'Full shopping flow: browse, cart, checkout, orders',
      'LocalStorage-based data persistence',
      'Responsive design with Bootstrap 5',
    ],
    challenge: 'Implementing multi-actor authorization and data persistence without a backend.',
    solution: 'Designed a LocalStorage schema with role-based data separation, simulating real multi-tenant behavior in a pure frontend environment.',
    category: 'Frontend',
  },
  {
    title: 'SGMS',
    tagline: 'Student Grade Management CLI',
    description: 'A Bash CLI grade-management tool with flat-file storage, full CRUD, GPA calculations, and a 240-case automated test suite achieving 99% coverage.',
    longDescription: 'The Student Grade Management System is a fully featured Bash CLI application demonstrating systems thinking and test discipline in a scripting environment.',
    tech: ['Bash', 'Shell Scripting', 'Flat-file Storage', 'Automated Testing', 'CRUD'],
    color: '#a78bfa',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
    github: 'https://github.com/Mohamed-Mahdy7/Student-Grade-Managment-System',
    highlights: [
      '240-case automated test suite (238/240 passing, 99% coverage)',
      'Full CRUD for students, grades, and courses',
      'GPA calculation engine',
      'Flat-file storage with consistent data integrity',
    ],
    challenge: 'Achieving reliable data integrity and test coverage in a Bash environment with no framework support.',
    solution: 'Hand-built a test harness using Bash functions, capturing stdout and validating against expected outputs across 240 edge cases.',
    category: 'CLI · Tools',
  },
  {
    title: 'Finvo',
    tagline: 'Client & Invoice Management System',
    description: 'A Flask + SQL Server application for managing clients and invoices, with SQLAlchemy ORM, relationship modeling, and a clean REST API.',
    longDescription: 'Finvo is an internal business tool built at Trust Grp to streamline client management and invoice tracking. It replaces a spreadsheet-based workflow with a proper relational system.',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'pyodbc', 'SQL Server', 'REST API'],
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #db2777 0%, #ec4899 100%)',
    github: 'https://github.com/Mohamed-Mahdy7/Finvo',
    highlights: [
      'Client and invoice CRUD with relational integrity',
      'SQLAlchemy ORM with pyodbc SQL Server connection',
      'RESTful API consumed by internal frontend',
      'Replaced manual spreadsheet workflow',
    ],
    challenge: 'Replacing an unreliable spreadsheet workflow that caused data inconsistencies across the team.',
    solution: 'Built a proper relational schema with foreign key constraints and exposed a clean REST API, making data consistent and auditable.',
    category: 'Backend · API',
  },
]

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        borderRadius: '1rem',
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--card-glow)',
        transition: 'box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--card-hover-glow)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--card-glow)'
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: '160px',
          background: project.gradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)',
          }}
        />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '2rem',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.9)',
            letterSpacing: '-0.04em',
            zIndex: 1,
          }}
        >
          {project.title}
        </span>
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            padding: '0.2rem 0.6rem',
            borderRadius: '99px',
            background: 'rgba(0,0,0,0.3)',
            fontSize: '0.68rem',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {project.category}
        </div>
      </div>

      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '0.35rem' }}>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              color: project.color,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {project.tagline}
          </span>
        </div>
        <p
          style={{
            fontSize: '0.85rem',
            lineHeight: 1.6,
            color: 'var(--c-text2)',
            marginBottom: '1.25rem',
            flex: 1,
          }}
        >
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                fontWeight: 500,
                padding: '0.2rem 0.5rem',
                borderRadius: '0.3rem',
                background: `${project.color}12`,
                border: `1px solid ${project.color}25`,
                color: project.color,
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span
              style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '0.3rem',
                background: 'var(--c-surface2)',
                border: '1px solid var(--c-border)',
                color: 'var(--c-text3)',
              }}
            >
              +{project.tech.length - 5} more
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.875rem',
              borderRadius: '0.5rem',
              background: 'var(--c-surface2)',
              border: '1px solid var(--c-border2)',
              color: 'var(--c-text2)',
              fontSize: '0.78rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
          >
            <GithubIcon size={13} /> GitHub
          </a>
          <button
            onClick={(e) => { e.stopPropagation(); onClick() }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.875rem',
              borderRadius: '0.5rem',
              background: `${project.color}18`,
              border: `1px solid ${project.color}30`,
              color: project.color,
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'background 0.2s',
            }}
          >
            <ExternalLink size={13} /> Case Study
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '720px',
          borderRadius: '1.25rem',
          background: 'var(--c-surface)',
          border: '1px solid var(--c-border2)',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            height: '200px',
            background: project.gradient,
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '1.5rem',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 20% 60%, rgba(255,255,255,0.1) 0%, transparent 60%)',
            }}
          />
          <div style={{ zIndex: 1 }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.2rem 0.6rem',
                borderRadius: '99px',
                background: 'rgba(0,0,0,0.3)',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: '0.5rem',
              }}
            >
              {project.category}
            </span>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', margin: '0.25rem 0 0' }}>
              {project.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(0,0,0,0.3)',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.4rem',
              cursor: 'pointer',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              backdropFilter: 'blur(4px)',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: 'var(--c-text2)',
              marginBottom: '2rem',
            }}
          >
            {project.longDescription}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '0.75rem',
                background: 'var(--c-surface2)',
                border: '1px solid var(--c-border)',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#f87171',
                  marginBottom: '0.5rem',
                }}
              >
                The Challenge
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--c-text2)', lineHeight: 1.6, margin: 0 }}>
                {project.challenge}
              </p>
            </div>
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '0.75rem',
                background: 'var(--c-surface2)',
                border: '1px solid var(--c-border)',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#34d399',
                  marginBottom: '0.5rem',
                }}
              >
                The Solution
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--c-text2)', lineHeight: 1.6, margin: 0 }}>
                {project.solution}
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--c-text3)',
                marginBottom: '0.75rem',
              }}
            >
              Key Highlights
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.highlights.map((h) => (
                <div
                  key={h}
                  style={{
                    display: 'flex',
                    gap: '0.6rem',
                    alignItems: 'flex-start',
                    fontSize: '0.88rem',
                    color: 'var(--c-text2)',
                  }}
                >
                  <CheckCircle size={15} style={{ color: project.color, flexShrink: 0, marginTop: '2px' }} />
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--c-text3)',
                marginBottom: '0.75rem',
              }}
            >
              Tech Stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    padding: '0.3rem 0.65rem',
                    borderRadius: '0.4rem',
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}30`,
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.6rem 1.25rem',
                borderRadius: '0.6rem',
                background: 'var(--c-surface2)',
                border: '1px solid var(--c-border2)',
                color: 'var(--c-text)',
                fontSize: '0.88rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <GithubIcon size={15} /> View on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section
      id="projects"
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
            // Projects
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
            Things I've{' '}
            <span className="gradient-text">Built & Shipped</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--c-text2)', marginTop: '0.75rem' }}>
            Click any card to read the full case study.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
