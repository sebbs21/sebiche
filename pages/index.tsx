import { motion } from "framer-motion";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-red-400 text-white text-center p-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Sebiche</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto"
          >
            Crafting Digital Experiences That Drive Growth & Impact
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#experience"
            className="inline-block mt-6 px-6 py-3 bg-teal-500 text-white rounded-full transition-colors hover:bg-yellow-400"
          >
            Explore My Work
          </motion.a>
        </motion.section>
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
