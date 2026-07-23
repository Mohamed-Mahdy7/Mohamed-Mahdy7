import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, FileText } from 'lucide-react'

interface CVModalProps {
  open: boolean
  onClose: () => void
}

const CV_URL = '/cv.pdf'

export default function CVModal({ open, onClose }: CVModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(0,0,0,0.75)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '860px',
              height: '90vh',
              borderRadius: '1.25rem',
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border2)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.875rem 1.25rem',
                borderBottom: '1px solid var(--c-border)',
                flexShrink: 0,
                background: 'var(--c-bg)',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '0.5rem',
                  background: 'rgba(139,92,246,0.15)',
                  color: 'var(--c-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FileText size={16} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--c-text)', lineHeight: 1.2 }}>
                  Mohamed Mahdy — CV
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--c-text3)',
                    fontFamily: "'JetBrains Mono', monospace",
                    marginTop: '0.1rem',
                  }}
                >
                  Full-Stack Developer · Python · Django · React · AI/RAG
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '0.5rem',
                    background: 'var(--c-surface2)',
                    border: '1px solid var(--c-border2)',
                    color: 'var(--c-text2)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = 'var(--c-primary-light)'
                    el.style.borderColor = 'rgba(139,92,246,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.color = 'var(--c-text2)'
                    el.style.borderColor = 'var(--c-border2)'
                  }}
                >
                  <ExternalLink size={13} />
                  <span className="hide-xs">New tab</span>
                </a>

                <a
                  href={CV_URL}
                  download="Mohamed_Mahdy_CV.pdf"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '0.5rem',
                    background: 'linear-gradient(135deg, #6D28D9, #8B5CF6)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    boxShadow: '0 2px 10px rgba(139,92,246,0.35)',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.88' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
                >
                  <Download size={13} /> Download
                </a>

                <button
                  onClick={onClose}
                  aria-label="Close CV viewer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    borderRadius: '0.5rem',
                    background: 'var(--c-surface2)',
                    border: '1px solid var(--c-border2)',
                    color: 'var(--c-text2)',
                    cursor: 'pointer',
                    transition: 'color 0.2s, background 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.color = 'var(--c-text)'
                    el.style.background = 'var(--c-surface3)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement
                    el.style.color = 'var(--c-text2)'
                    el.style.background = 'var(--c-surface2)'
                  }}
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div style={{ flex: 1, overflow: 'hidden', background: '#404040', position: 'relative' }}>
              <iframe
                src={`${CV_URL}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Mohamed Mahdy CV"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }}
              />
              {/* Fallback for browsers that block PDF in iframes */}
              <noscript>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    background: 'var(--c-surface)',
                    color: 'var(--c-text2)',
                    fontSize: '0.9rem',
                  }}
                >
                  <p>Your browser doesn't support inline PDF viewing.</p>
                  <a
                    href={CV_URL}
                    download
                    style={{ color: 'var(--c-primary-light)', textDecoration: 'underline' }}
                  >
                    Download the CV instead
                  </a>
                </div>
              </noscript>
            </div>
          </motion.div>

          <style>{`
            @media (max-width: 480px) { .hide-xs { display: none; } }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
