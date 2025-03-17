import { motion } from 'framer-motion';
import { useState } from 'react';

type Project = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const projects: Project[] = [
  {
    title: 'Crossborder Marketplace',
    company: 'Servicios Liverpool',
    date: '2022-2024',
    description: 'Led the development of a cross-border eCommerce platform, growing to over 100 sellers and boosting sales by 125%.',
  },
  {
    title: 'Sebiche Portfolio',
    company: 'Personal Project',
    date: '2025',
    description: 'Built a modern portfolio using Next.js and Tailwind CSS to showcase my professional journey.',
  },
];

export default function Carousel() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      id="projects"
      className="py-16 px-4 max-w-4xl mx-auto text-charcoal"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="relative flex items-center justify-center overflow-hidden">
        <button
          onClick={handlePrev}
          className="flex-shrink-0 bg-turquoise text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-coral transition mr-4 z-10"
        >
          ←
        </button>
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex-1 max-w-lg"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-turquoise">{projects[currentProject].title}</h3>
          <p className="text-coral text-sm sm:text-base">{projects[currentProject].company} | {projects[currentProject].date}</p>
          <p className="mt-2 text-sm sm:text-base">{projects[currentProject].description}</p>
        </motion.div>
        <button
          onClick={handleNext}
          className="flex-shrink-0 bg-turquoise text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-coral transition ml-4 z-10"
        >
          →
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentProject ? 'bg-turquoise' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </motion.section>
  );
}