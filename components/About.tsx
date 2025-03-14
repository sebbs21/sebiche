import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-gray-900"
      >
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-64 bg-teal-100 flex items-center justify-center rounded-md"
        >
          [Add your photo or avatar here]
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          <p className="text-lg text-gray-700">
            I’m a UX/UI leader with over 9 years of experience transforming
            eCommerce marketplaces and driving sustainable innovation.
          </p>
          <p className="text-lg text-gray-700">
            From boosting cross-border sales by 125% to redesigning user
            experiences that convert 78% better, I blend design, data, and
            strategy to create scalable impact.
          </p>
          <p className="italic text-teal-600">
            “Inspired by my Peruvian roots, I’m passionate about building a
            future where technology meets purpose.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
