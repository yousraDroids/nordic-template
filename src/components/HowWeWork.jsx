import { useInView } from '../hooks/useInView'

function HowWeWork() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })

  const methods = [
    'Project-based market development',
    'Low-risk entry model (no fixed investments in the initial phase)',
    'Collaboration with architects, interior designers, developers and hospitality groups',
    'Focus on long-term relationships and qualified opportunities',
  ]

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <h2
          className={`section-title fade-up ${isVisible ? 'visible' : ''}`}
        >
          How we work
        </h2>
        <ul className="section-list">
          {methods.map((method, i) => (
            <li
              key={i}
              className={`fade-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              {method}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HowWeWork
