import { motion } from "framer-motion";

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 40,
  className = "",
}) {
  const variants = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...(variants[direction] || variants.up),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;