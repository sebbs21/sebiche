import { motion } from 'framer-motion';

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
};

export default function Section({ id, title, children, delay = 0.2 }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      id={id}
      className="py-16 px-4 max-w-4xl mx-auto text-center text-charcoal"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{title}</h2>
      {children}
    </motion.section>
  );
}