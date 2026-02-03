import { useInView } from '../hooks/useInView'

function FocusAreas() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })

  const areas = [
    'Outdoor living & terrace solutions',
    'Architectural and decorative lighting',
    'Premium interior products and design-led materials',
  ]

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <h2
          className={`section-title fade-up ${isVisible ? 'visible' : ''}`}
        >
          Focus areas
        </h2>
        <ul className="section-list">
          {areas.map((area, i) => (
            <li
              key={i}
              className={`fade-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FocusAreas
