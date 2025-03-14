import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-montserrat font-bold text-charcoal text-center mb-8"
      >
        About Me
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-64 bg-turquoise/20 rounded-lg flex items-center justify-center">
            <p className="text-charcoal font-inter">
              [Add your photo or avatar here]
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg font-inter">
            I’m a UX/UI leader with over 9 years of experience transforming
            eCommerce marketplaces and driving sustainable innovation.
          </p>
          <p className="text-lg font-inter">
            From boosting cross-border sales by 125% to redesigning user
            experiences that convert 78% better, I blend design, data, and
            strategy to create scalable impact.
          </p>
          <p className="text-sm font-playfair italic text-coral">
            “Inspired by my Peruvian roots, I’m passionate about building a
            future where technology meets purpose.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}