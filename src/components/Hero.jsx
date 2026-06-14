import { motion } from "framer-motion";

const drinkImage = "/assets/classic_latte.png";

export default function Hero() {
  return (
    <section id="story" className="hero">
      <div className="hero-glow"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="eyebrow">
          Kolkata's First Matcha Café
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Never Tried
          <br />
          Matcha?
        </motion.h1>

        <p className="subtitle">
          Sweet. Creamy. Beginner-friendly.
          <br />
          Discover matcha without the bitterness.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Explore Matcha →
        </motion.button>
      </motion.div>

      <motion.div
        className="drink"
        animate={{
          y: [0, -20, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={drinkImage} alt="Matcha Drink" />
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}