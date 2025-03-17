import { motion } from 'framer-motion';
import Particles from 'tsparticles';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-turquoise to-coral text-white text-center px-4 pt-24 sm:pt-0 relative overflow-hidden"
    >
      <Particles
        id="particles"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#FFFFFF" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute inset-0 z-0"
      />
      <div className="space-y-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-['Montserrat'] font-bold tracking-tight"
          style={{ fontVariationSettings: "'wght' 700" }}
        >
          Sebastian Napuri Mendoza
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg sm:text-xl md:text-2xl font-['Inter'] max-w-2xl mx-auto"
          style={{ fontVariationSettings: "'wght' 400" }}
        >
          Architecting the Future of eCommerce, Peruvian-Style
        </motion.p>
        <p className="text-base sm:text-lg md:text-xl font-['Inter'] max-w-2xl mx-auto">
          Crafting Digital Experiences That Drive Growth & Impact
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center mx-auto pt-4">
          <a
            href="#experience"
            className="inline-block px-8 py-3 bg-white text-turquoise font-semibold rounded-full hover:bg-coral hover:text-white transition"
            aria-label="Explore Sebastian's work experience"
            role="button"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-coral transition"
            aria-label="Contact Sebastian"
            role="button"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.section>
  );
}