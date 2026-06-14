import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menu = {
  MATCHA: {
    image: "/assets/classic_latte.png",
    color: "#e7f0df",
    description:
      "Smooth, ceremonial-grade matcha crafted for first-timers and enthusiasts alike.",
    items: [
      "Ceremonial Matcha",
      "Classic Matcha Latte",
      "Mango Matcha",
      "Strawberry Matcha",
      "Blueberry Matcha",
      "Coconut Matcha",
    ],
  },

  COFFEE: {
    image: "/assets/vietnamese-coffee.png",
    color: "#f2e4d5",
    description:
      "Bold coffee creations ranging from cold brews to dessert-inspired lattes.",
    items: [
      "Vietnamese Iced Coffee",
      "Salted Caramel Cold Brew",
      "Tiramisu Latte",
      "Cold Brew",
      "Americano",
      "Cappuccino",
    ],
  },

  DESSERTS: {
    image: "/assets/cookie.png",
    color: "#fde4ec",
    description:
      "Freshly baked desserts designed to pair perfectly with your drink.",
    items: [
      "Basque Cheesecake",
      "Tiramisu",
      "Matcha Cookies",
      "Brownie",
      "Croissant",
    ],
  },
};

export default function MenuSection() {
  const [active, setActive] = useState("MATCHA");

  return (
    <section
      id="menu"
      className="editorial-menu"
      style={{
        background: menu[active].color,
      }}
    >
      <div className="menu-title">
        <p>THE MENU</p>

        <h2>
          Pick Your
          <br />
          Experience
        </h2>
      </div>

      <div className="menu-layout">
        <div className="menu-categories">
          {Object.keys(menu).map((category) => (
            <motion.h3
              key={category}
              onMouseEnter={() => setActive(category)}
              className={
                active === category
                  ? "active"
                  : ""
              }
              whileHover={{
                x: 15,
              }}
            >
              {category}
            </motion.h3>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="menu-preview"
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -50,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <img
              src={menu[active].image}
              alt={active}
            />

            <p className="menu-description">
              {menu[active].description}
            </p>

            <div className="menu-items">
              {menu[active].items.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}