import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Code2, Server, Cpu, Users } from 'lucide-react'

interface Stat {
  icon: React.ReactNode
  value: number
  suffix: string
  label: string
  description: string
  color: string
}

const stats: Stat[] = [
  {
    icon: <Server size={22} />,
    value: 47,
    suffix: '+',
    label: 'API Endpoints Shipped',
    description: 'Documented REST endpoints across production systems',
    color: 'var(--c-primary-light)',
  },
  {
    icon: <Code2 size={22} />,
    value: 2,
    suffix: '+',
    label: 'Years Experience',
    description: 'Production backend and full-stack development',
    color: 'var(--c-cyan)',
  },
  {
    icon: <Cpu size={22} />,
    value: 30,
    suffix: '+',
    label: 'Technologies',
    description: 'Languages, frameworks, tools, and platforms mastered',
    color: '#a78bfa',
  },
  {
    icon: <Users size={22} />,
    value: 6,
    suffix: '',
    label: 'Projects Delivered',
    description: 'Production-grade projects built end to end',
    color: '#34d399',
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return controls.stop
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section
      style={{
        padding: '5rem 0',
        borderTop: '1px solid var(--c-border)',
        borderBottom: '1px solid var(--c-border)',
        background: 'var(--c-surface)',
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '1.75rem',
                borderRadius: '1rem',
                background: 'var(--c-bg)',
                border: '1px solid var(--c-border2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                }}
              />
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '0.75rem',
                  background: `${stat.color}18`,
                  color: stat.color,
                  marginBottom: '1rem',
                }}
              >
                {stat.icon}
              </div>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: '0.35rem',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--c-text)',
                  marginBottom: '0.25rem',
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--c-text3)', lineHeight: 1.5 }}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
