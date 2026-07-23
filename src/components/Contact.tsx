import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const contactInfo = [
  { icon: <Mail size={18} />, label: 'Email', value: 'mohamedmahdy648@gmail.com', href: 'mailto:mohamedmahdy648@gmail.com', color: '#A78BFA' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+20 112 854 8773', href: 'tel:+201128548773', color: '#2DD4BF' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Cairo, Egypt', href: 'https://maps.google.com/?q=Cairo,Egypt', color: '#34d399' },
  { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/mohamed-mahdy257', href: 'https://linkedin.com/in/mohamed-mahdy257', color: '#0ea5e9' },
  { icon: <GithubIcon size={18} />, label: 'GitHub', value: 'github.com/Mohamed-Mahdy7', href: 'https://github.com/Mohamed-Mahdy7', color: '#a78bfa' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate the form first
    if (!validate()) return

    setSending(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

          name: form.name,
          email: form.email,
          subject: form.subject || 'New Portfolio Contact',
          message: form.message,

          from_name: 'Portfolio Contact Form',
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Message was successfully sent
        setSent(true)

        // Clear the form
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        })

        // Clear validation errors
        setErrors({})
      } else {
        console.error('Web3Forms error:', result)
        alert('Failed to send the message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const inputStyle = (hasError?: boolean) => ({
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.6rem',
    background: 'var(--c-bg)',
    border: `1px solid ${hasError ? '#f87171' : 'var(--c-border2)'}`,
    color: 'var(--c-text)',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box' as const,
  })

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
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
            // Contact
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
            Let's Build{' '}
            <span className="gradient-text">Something Together</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--c-text2)', marginTop: '0.75rem', maxWidth: '500px' }}>
            Open to full-time roles, freelance projects, and interesting collaborations. I respond within 24 hours.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
          }}
          className="contact-grid"
        >
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--c-text)', marginBottom: '1.25rem' }}>
              Reach Out Directly
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'var(--c-surface)',
                    border: '1px solid var(--c-border)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = `${item.color}50`
                    el.style.background = `${item.color}08`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = 'var(--c-border)'
                    el.style.background = 'var(--c-surface)'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '0.5rem',
                      background: `${item.color}18`,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--c-text3)', fontWeight: 500, marginBottom: '0.1rem' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--c-text)' }}>
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '0.875rem',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(45,212,191,0.06))',
                border: '1px solid rgba(139,92,246,0.25)',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--c-text)', marginBottom: '0.35rem' }}>
                Available for
              </div>
              {['Backend Engineer Roles', 'Full-Stack Engineer Roles', 'Freelance Projects', 'Technical Consulting'].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.83rem',
                    color: 'var(--c-text2)',
                    padding: '0.25rem 0',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#22c55e',
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sent ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '3rem 2rem',
                  borderRadius: '1rem',
                  background: 'var(--c-surface)',
                  border: '1px solid rgba(52,211,153,0.3)',
                }}
              >
                <CheckCircle size={48} style={{ color: '#34d399', margin: '0 auto 1rem', display: 'block' }} />
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--c-text)', marginBottom: '0.5rem' }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--c-text2)' }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.55rem 1.25rem',
                    borderRadius: '0.5rem',
                    background: 'var(--c-surface2)',
                    border: '1px solid var(--c-border2)',
                    color: 'var(--c-text2)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: '2rem',
                  borderRadius: '1rem',
                  background: 'var(--c-surface)',
                  border: '1px solid var(--c-border)',
                  boxShadow: 'var(--card-glow)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.1rem',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--c-text2)', marginBottom: '0.4rem' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: undefined }) }}
                      style={inputStyle(!!errors.name)}
                    />
                    {errors.name && <span style={{ fontSize: '0.72rem', color: '#f87171', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--c-text2)', marginBottom: '0.4rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }) }}
                      style={inputStyle(!!errors.email)}
                    />
                    {errors.email && <span style={{ fontSize: '0.72rem', color: '#f87171', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--c-text2)', marginBottom: '0.4rem' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={inputStyle()}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--c-text2)', marginBottom: '0.4rem' }}>
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project, role, or just say hello..."
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: undefined }) }}
                    style={{ ...inputStyle(!!errors.message), resize: 'vertical', minHeight: '120px' }}
                  />
                  {errors.message && <span style={{ fontSize: '0.72rem', color: '#f87171', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.6rem',
                    background: sending ? 'var(--c-surface2)' : 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                    color: sending ? 'var(--c-text3)' : '#fff',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: sending ? 'not-allowed' : 'pointer',
                    fontFamily: 'inherit',
                    transition: 'opacity 0.2s',
                    boxShadow: sending ? 'none' : '0 4px 20px rgba(139,92,246,0.35)',
                  }}
                >
                  {sending ? (
                    <>
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: '2px solid var(--c-text3)',
                          borderTopColor: 'transparent',
                          animation: 'spin 0.6s linear infinite',
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.4fr !important;
          }
        }
      `}</style>
    </section>
  )
}
