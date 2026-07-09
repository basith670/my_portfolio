import { motion } from "framer-motion";

function FadeIn({ children, delay = 0, direction = "up" }) {
  const variants = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...variants[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;