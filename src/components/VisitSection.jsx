import { motion } from "framer-motion";

export default function VisitSection() {
  return (
    <section id="visit" className="visit">
      <div className="visit-glow"></div>

      <motion.div
        className="visit-content"
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >
        <p className="visit-label">
          KOLKATA'S FIRST MATCHA CAFE
        </p>

        <h2>
          Your Next
          <br />
          Matcha Run.
        </h2>

        <div className="visit-card">
          <h3>Matcha & Me</h3>

          <p>
            10/3 Elgin Road,
            <br />
            Sreepally,
            <br />
            Bhowanipore,
            <br />
            Kolkata 700020
          </p>

          <div className="visit-details">
            <span>🍵 Matcha</span>
            <span>☕ Coffee</span>
            <span>🍰 Desserts</span>
          </div>

          <a
            href="https://maps.google.com/?q=Matcha+and+Me+Kolkata"
            target="_blank"
            rel="noreferrer"
            className="visit-button"
          >
            Open In Maps →
          </a>
        </div>
      </motion.div>
    </section>
  );
}