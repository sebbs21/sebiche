import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Marketplace BU Manager',
      company: 'Servicios Liverpool',
      dates: '06/2022 - 07/2024',
      points: [
        'Led Crossborder Marketplace project, growing to 100+ sellers.',
        'Reduced response times by 35% with automation tools.',
        'Increased seller onboarding conversion by 78% via UX redesign.',
      ],
    },
    {
      title: 'Regional Hardlines Cross-Border Commercial Manager',
      company: 'Linio México',
      dates: '01/2020 - 05/2022',
      points: [
        'Boosted cross-border sales by 125% with growth strategies.',
        'Improved operational efficiency by 40% via UX optimization.',
        'Led a team of 10 across 5 countries.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-montserrat font-bold text-charcoal text-center mb-8"
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-montserrat font-bold text-turquoise">
              {exp.title}
            </h3>
            <p className="text-lg font-inter text-coral">{exp.company}</p>
            <p className="text-sm font-inter text-charcoal/70">{exp.dates}</p>
            <ul className="mt-4 space-y-2">
              {exp.points.map((point, i) => (
                <li key={i} className="text-base font-inter">
                  • {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}