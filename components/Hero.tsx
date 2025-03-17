import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-turquoise to-coral text-white text-center px-4 pt-20 sm:pt-0"
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
        >
          Sebastian Napuri Mendoza
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-4"
        >
          Turning Peruvian Passion into Digital Innovation
        </motion.p>
        <p className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-6">
          Crafting Digital Experiences That Drive Growth & Impact
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mx-auto">
          <a
            href="#experience"
            className="inline-block px-6 py-3 bg-white text-turquoise font-semibold rounded-full hover:bg-coral hover:text-white transition"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-coral transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.section>
  );
}