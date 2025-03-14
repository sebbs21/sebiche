import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section bg-light">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre Mí
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg mb-4">
              Soy un profesional apasionado con experiencia en UX/UI, e-commerce y desarrollo web, 
              enfocado en crear experiencias digitales intuitivas y atractivas.
            </p>
            
            <p className="text-lg mb-4">
              Mi objetivo es combinar diseño y tecnología para resolver problemas reales y 
              mejorar la interacción de los usuarios con productos digitales.
            </p>
            
            <div className="mt-6">
              <h3 className="font-bold text-xl mb-3">Habilidades principales</h3>
              <div className="flex flex-wrap gap-2">
                {["UX/UI", "E-commerce", "React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                  <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About