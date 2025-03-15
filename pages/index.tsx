import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const projects = [
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

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-softGray dark:bg-gray-800`}>
      <Head>
        <title>Sebastian Napuri Mendoza | Portfolio</title>
        <meta name="description" content="Professional portfolio of Sebastian Napuri Mendoza" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-charcoal/80 dark:bg-gray-900/80 backdrop-blur-md text-white py-4 px-4 z-10"
      >
        <nav className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <a href="/" className="text-turquoise font-bold text-xl mb-2 sm:mb-0">Sebiche</a>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center">
            <a href="#about" className="hover:text-coral">About</a>
            <a href="#experience" className="hover:text-coral">Experience</a>
            <a href="#projects" className="hover:text-coral">Projects</a>
            <a href="#contact" className="hover:text-coral">Contact</a>
            <button
              onClick={toggleDarkMode}
              className="text-turquoise hover:text-coral focus:outline-none ml-4"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-turquoise to-coral dark:from-gray-800 dark:to-gray-900 text-white text-center px-4 pt-20 sm:pt-0"
      >
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">Sebastian Napuri Mendoza</h1>
          <p className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-6">
            Crafting Digital Experiences That Drive Growth & Impact
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center mx-auto">
            <a
              href="#experience"
              className="inline-block px-6 py-3 bg-white dark:bg-gray-700 text-turquoise dark:text-white font-semibold rounded-full hover:bg-coral hover:text-white transition"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white dark:hover:bg-gray-700 hover:text-coral dark:hover:text-coral transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        id="about"
        className="py-16 px-4 max-w-4xl mx-auto text-center text-charcoal dark:text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">About Me</h2>
        <div className="w-32 sm:w-48 h-32 sm:h-48 mx-auto mb-4 rounded-full overflow-hidden">
          <img src="/sebastian.jpg" alt="Sebastian Napuri" className="w-full h-full object-cover" />
        </div>
        <p className="text-base sm:text-lg mb-4">
          I’m a UX/UI leader with over 9 years of experience transforming eCommerce marketplaces and driving sustainable innovation.
        </p>
        <p className="text-base sm:text-lg mb-4">
          From boosting cross-border sales by 125% to redesigning user experiences that convert 78% better, I blend design, data, and strategy to create scalable impact.
        </p>
        <p className="text-coral italic text-base sm:text-lg">“Inspired by my Peruvian roots, I build tech with purpose.”</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        id="experience"
        className="py-16 px-4 max-w-4xl mx-auto text-charcoal dark:text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-turquoise">Marketplace BU Manager</h3>
            <p className="text-coral text-sm sm:text-base">Servicios Liverpool | 06/2022 - 07/2024</p>
            <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
              <li>Led Crossborder Marketplace project, growing to 100+ sellers.</li>
              <li>Reduced response times by 35% with automation tools.</li>
              <li>Increased seller onboarding conversion by 78% via UX redesign.</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-turquoise">Regional Hardlines Cross-Border Commercial Manager</h3>
            <p className="text-coral text-sm sm:text-base">Linio México | 01/2020 - 05/2022</p>
            <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
              <li>Boosted cross-border sales by 125% with growth strategies.</li>
              <li>Improved operational efficiency by 40% via UX optimization.</li>
              <li>Led a team of 10 across 5 countries.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        id="projects"
        className="py-16 px-4 max-w-4xl mx-auto text-charcoal dark:text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="flex-shrink-0 bg-turquoise text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-coral transition mr-4"
          >
            ←
          </button>
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex-1 max-w-lg"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-turquoise">{projects[currentProject].title}</h3>
            <p className="text-coral text-sm sm:text-base">{projects[currentProject].company} | {projects[currentProject].date}</p>
            <p className="mt-2 text-sm sm:text-base">{projects[currentProject].description}</p>
          </motion.div>
          <button
            onClick={handleNext}
            className="flex-shrink-0 bg-turquoise text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-coral transition ml-4"
          >
            →
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentProject ? 'bg-turquoise' : 'bg-gray-300 dark:bg-gray-500'}`}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        id="contact"
        className="py-16 px-4 bg-charcoal dark:bg-gray-900 text-white text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in Touch</h2>
        <form action="https://formspree.io/f/xexample" method="POST" className="max-w-md mx-auto space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 dark:bg-gray-700 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 dark:bg-gray-700 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-white/10 dark:bg-gray-700 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-turquoise text-white font-semibold rounded-full hover:bg-coral transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-charcoal dark:bg-gray-900 text-white py-4 text-center"
      >
        <p className="text-sm sm:text-base">© 2025 Sebastian Napuri Mendoza. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://www.linkedin.com/in/snapurimendoza/" target="_blank" rel="noopener noreferrer" className="text-turquoise hover:text-coral">LinkedIn</a>
          <a href="https://www.instagram.com/soysebiche" target="_blank" rel="noopener noreferrer" className="text-turquoise hover:text-coral">Instagram</a>
        </div>
      </motion.footer>
    </div>
  );
}