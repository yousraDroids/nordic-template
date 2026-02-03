import { useInView } from "../hooks/useInView";

function Contact() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section className="section contact" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-up ${isVisible ? "visible" : ""}`}>
          Contact
        </h2>
        <div
          className={`fade-up ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.15s" }}
        >
          <p className="contact-name">Ahmad Sirwan Ahmad</p>
          <p className="contact-role">Founder, Nordic Global Partners</p>
          <p className="contact-location">Copenhagen / Dubai</p>
          <a
            href="mailto:ahmad@nordicglobalpartners.com"
            className="contact-email"
          >
            ahmad@nordicglobalpartners.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
