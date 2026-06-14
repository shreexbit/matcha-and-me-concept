import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const coffees = {
  vietnamese: {
    title: "Vietnamese Iced Coffee",
    subtitle: "Bold. Sweet. Unforgettable.",
    description:
      "Rich Vietnamese coffee layered with sweetness and ice for a powerful caffeine experience.",
    image: "/assets/vietnamese-coffee.png",
    bg: "#f7efe5",
    accent: "#7a4b2c",
    word: "COFFEE",
  },

  caramel: {
    title: "Salted Caramel Cold Brew",
    subtitle: "Smooth. Creamy. Addictive.",
    description:
      "Slow brewed coffee finished with sweet caramel notes and a silky finish.",
    image: "/assets/caramel-coldbrew.png",
    bg: "#f6ead9",
    accent: "#c78a3a",
    word: "CARAMEL",
  },

  tiramisu: {
    title: "Tiramisu Coffee Latte",
    subtitle: "Dessert In A Cup.",
    description:
      "A coffee experience inspired by the classic Italian dessert.",
    image: "/assets/tiramisu-latte.png",
    bg: "#efe5dd",
    accent: "#8b5a3c",
    word: "TIRAMISU",
  },
};

export default function CoffeeJourney() {
  const [active, setActive] = useState("vietnamese");

  const current = coffees[active];

  return (
    <section
      className="coffee"
      style={{
        backgroundColor: current.bg,
      }}
    >
      <motion.div
        className="coffee-blob"
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

      <div className="coffee-header">
        <p>NOT READY FOR MATCHA?</p>

        <h2>
          Still A
          <br />
          Coffee Person?
        </h2>

        <span>
          No worries. We've got you.
        </span>
      </div>

      <div className="coffee-tabs">
        {Object.keys(coffees).map((coffee) => (
          <button
            key={coffee}
            onClick={() => setActive(coffee)}
            className={
              active === coffee ? "active" : ""
            }
          >
            {coffees[coffee].title}
          </button>
        ))}
      </div>

      <div className="coffee-bg-word">
        {current.word}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="coffee-content"
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
        >
          <motion.img
            src={current.image}
            alt={current.title}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <div className="coffee-card">
            <h3>{current.title}</h3>

            <h4>{current.subtitle}</h4>

            <p>{current.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}