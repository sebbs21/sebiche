import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="bg-charcoal text-white py-4 text-center"
    >
      <p className="text-sm sm:text-base">© 2025 Sebastian Napuri Mendoza. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://www.linkedin.com/in/snapurimendoza/" target="_blank" rel="noopener noreferrer" className="text-turquoise hover:text-coral">LinkedIn</a>
        <a href="https://www.instagram.com/soysebiche" target="_blank" rel="noopener noreferrer" className="text-turquoise hover:text-coral">Instagram</a>
      </div