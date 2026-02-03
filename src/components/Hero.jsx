import { useInView } from '../hooks/useInView'

function Hero() {
  const [ref, isVisible] = useInView({ threshold: 0.1 })

  return (
    <section className="hero" ref={ref}>
      <div className="container">
        <h1
          className={`hero-title fade-up ${isVisible ? 'visible' : ''}`}
        >
          Nordic Global Partners
        </h1>
        <p
          className={`hero-tagline fade-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.15s' }}
        >
          International market development for Scandinavian design brands.
        </p>
        <p
          className={`hero-description fade-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          We support Scandinavian premium design brands entering the Dubai and GCC
          market through a structured, project-based approach.
        </p>
      </div>
    </section>
  )
}

export default Hero
