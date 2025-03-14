import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Conga Mining Project",
      desc: "Analyzed ESG data for Peruvian mining firms, driving sustainable insights.",
      tech: "SQL, Excel, ESG Reporting",
    },
    {
      title: "Sebiche Portfolio",
      desc: "Built a modern portfolio with Next.js and Tailwind CSS to showcase my work.",
      tech: "Next.js, TypeScript, Tailwind CSS",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section id="projects" className="py-16 max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-gray-900"
      >
        Projects
      </motion.h2>
      <div className="mt-8 flex flex-col items-center">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2"
        >
          <h3 className="text-xl font-bold text-teal-600">{projects[current].title}</h3>
          <p className="text-gray-700 mt-2">{projects[current].desc}</p>
          <p className="text-sm text-red-500 mt-1">Tech: {projects[current].tech}</p>
        </motion.div>
        <div className="flex gap-3 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-red-500" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
