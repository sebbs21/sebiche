import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      id="contact"
      className="py-16 px-4 bg-charcoal text-white text-center"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get in Touch</h2>
      <form action="https://formspree.io/f/xexample" method="POST" className="max-w-md mx-auto space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-turquoise"
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
  );
}