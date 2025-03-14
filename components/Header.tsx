import { motion } from 'framer-motion';

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md py-4"
    >
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h2 className="text-xl font-montserrat font-bold text-turquoise">
          Sebiche
        </h2>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-softGray hover:text-coral transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-coral transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}