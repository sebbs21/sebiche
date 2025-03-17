import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const projects = [
  {
    title: 'Crossborder Marketplace',
    company: 'Servicios Liverpool',
    date: '2022-2024',
    description: 'Led the development of a cross-border eCommerce platform.',
    details: 'Grew to over 100 sellers and boosted sales by 125%. Designed UX flows that increased onboarding conversion by 78%.',
    stack: 'Next.js, GraphQL, Tailwind CSS',
  },
  {
    title: 'Regional UX Optimization',
    company: 'Linio México',
    date: '2020-2022',
    description: 'Optimized UX for a regional marketplace.',
    details: 'Improved operational efficiency by 40% and led a team of 10 across 5 countries.',
    stack: 'React, Redux, Figma',
  },
  {
    title: 'Sebiche Portfolio',
    company: 'Personal Project',
    date: '2025',
    description: 'Built a modern portfolio to showcase my journey.',
    details: 'Used Next.js and Framer Motion for a dynamic, responsive experience.',
    stack: 'Next.js, Tailwind CSS, Framer Motion',
  },
  {
    title: 'Seller Dashboard Redesign',
    company: 'Fictional Project',
    date: '2023',
    description: 'Redesigned a seller dashboard for efficiency.',
    details: 'Reduced task completion time by 30% with a streamlined interface.',
    stack: 'Vue.js, TypeScript, Chart.js',
  },
];

export default function Carousel() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        id="projects"
        className="py-16 px-4 max-w-4xl mx-auto text-charcoal"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Projects</h2>
        <div {...handlers} className="relative flex items-center justify-center overflow-hidden">
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
            onClick={openModal}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex-1 max-w-lg cursor-pointer"
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

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white p-6 rounded-lg max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-turquoise">{projects[currentProject].title}</h3>
            <p className="text-coral text-base">{projects[currentProject].company} | {projects[currentProject].date}</p>
            <p className="mt-2 text-base">{projects[currentProject].details}</p>
            <p className="mt-2 text-sm text-gray-600">Stack: {projects[currentProject].stack}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-turquoise text-white rounded-full hover:bg-coral transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}