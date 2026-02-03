import { useInView } from '../hooks/useInView'

function WhatWeDo() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <h2
          className={`section-title fade-up ${isVisible ? 'visible' : ''}`}
        >
          What we do
        </h2>
        <p
          className={`section-text fade-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          Nordic Global Partners works with Scandinavian design brands to develop
          market presence in Dubai and the wider GCC. We focus on qualified B2B
          opportunities and long-term partnerships within premium residential,
          hospitality and lifestyle projects.
        </p>
      </div>
    </section>
  )
}

export default WhatWeDo
