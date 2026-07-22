import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* Logo */}

      <motion.h1
        className="text-6xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        MB
      </motion.h1>

      {/* Name */}

      <motion.h2
        className="mt-6 text-xl sm:text-2xl font-bold text-slate-800 text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Muhammad Basith K
      </motion.h2>

      {/* Subtitle */}

      <motion.p
        className="mt-2 text-sm sm:text-base text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Loading Portfolio...
      </motion.p>

      {/* Spinner */}

      <motion.div
        className="mt-8 w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />

      {/* Animated Dots */}

      <motion.div
        className="mt-6 flex gap-2"
        initial="hidden"
        animate="visible"
      >
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="w-2.5 h-2.5 rounded-full bg-blue-600"
            animate={{
              y: [0, -6, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: dot * 0.2,
            }}
          />
        ))}
      </motion.div>

    </motion.div>
  );
}

export default LoadingScreen;