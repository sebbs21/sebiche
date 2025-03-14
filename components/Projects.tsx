import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Conga Mining Project',
      desc: 'Analyzed ESG data for Peruvian mining firms, driving sustainable insights.',
      tech: 'SQL, Excel, ESG Reporting',
    },
    {
      title: 'Sebiche Portfolio',
      desc: 'Built a modern portfolio with Next.js and Tailwind to showcase my work.',
      tech: 'Next.js, TypeScript, Tailwind CSS',
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section id="projects" className="py-16 max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-montserrat font-bold text-charcoal text-center mb-8"
      >
        Projects
      </motion.h2>
      <div className="relative">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-montserrat font-bold text-turquoise">
            {projects[current].title}
          </h3>
          <p className="text-base font-inter mt-2">{projects[current].desc}</p>
          <p className="text-sm font-inter text-coral mt-2">
            Tech: {projects[current].tech}
          </p>
        </motion.div>
        <div className="flex justify-center mt-4 space-x-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? 'bg-coral' : 'bg-charcoal/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}