import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="contact" className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>
          <p className="max-w-md mx-auto">
            ¿Interesado en trabajar juntos? Contáctame a través de cualquiera de estos canales.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://github.com/sebiche" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/sebiche" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a 
            href="mailto:contacto@sebiche.com" 
            className="text-white hover:text-primary transition-colors"
            aria-label="Email"
          >
            <FiMail size={24} />
          </a>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Sebiche. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer