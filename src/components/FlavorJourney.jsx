import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const drinks = {
  classic: {
    title: "Classic",
    subtitle: "Pure. Clean. Balanced.",
    description:
      "A smooth introduction to matcha. Creamy, refreshing and perfect for your first sip.",
    image: "/assets/classic_latte.png",
    bg: "#f5f1e8",
    accent: "#4c6a48",
    word: "CLASSIC",
  },

  mango: {
    title: "Mango",
    subtitle: "Sweet. Tropical. Bright.",
    description:
      "A beginner favourite. Juicy mango meets ceremonial matcha for a tropical experience.",
    image: "/assets/mango.png",
    bg: "#fff2cc",
    accent: "#f4b400",
    word: "MANGO",
  },

  strawberry: {
    title: "Strawberry",
    subtitle: "Playful. Fruity. Refreshing.",
    description:
      "Fresh strawberries blended with matcha to create a vibrant and indulgent drink.",
    image: "/assets/strawberry-matcha.png",
    bg: "#ffe5ec",
    accent: "#ff5c7c",
    word: "STRAWBERRY",
  },
};

export default function FlavorJourney() {
  const [active, setActive] = useState("classic");

  const current = drinks[active];

  return (
    <section
      className="journey"
      style={{
        backgroundColor: current.bg,
      }}
    >
      <motion.div
        className="journey-blob"
        style={{
          background: current.accent,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="journey-bg-word">
        {current.word}
      </div>

      <div className="journey-tabs">
        {Object.keys(drinks).map((drink) => (
          <button
            key={drink}
            onClick={() => setActive(drink)}
            className={
              active === drink ? "active" : ""
            }
          >
            {drinks[drink].title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="journey-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -40,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="journey-left">
            <motion.img
              src={current.image}
              alt={current.title}
              animate={{
                y: [0, -15, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
          </div>

          <div className="journey-right">
            <p className="journey-tag">
              FLAVOR JOURNEY
            </p>

            <h2>{current.title}</h2>

            <h3>{current.subtitle}</h3>

            <p className="journey-description">
              {current.description}
            </p>

            <button className="journey-button">
              Explore Flavor →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

