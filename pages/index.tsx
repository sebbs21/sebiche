import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen bg-gradient-to-br from-turquoise to-coral flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Sebastian Napuri Mendoza
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-2xl max-w-2xl mx-auto"
            >
              Crafting Digital Experiences That Drive Growth & Impact
            </motion.p>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05, backgroundColor: '#FFC107' }}
              className="mt-6 inline-block px-6 py-3 bg-turquoise text-white rounded-full"
            >
              Explore My Work
            </motion.a>
          </motion.div>
        </section>
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
