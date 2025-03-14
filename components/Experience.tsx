import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Marketplace BU Manager",
      company: "Servicios Liverpool",
      dates: "06/2022 - 07/2024",
      points: [
        "Led Crossborder Marketplace project, growing to 100+ sellers.",
        "Reduced response times by 35% with automation tools.",
        "Increased seller onboarding conversion by 78% via UX redesign.",
      ],
    },
    {
      title: "Regional Hardlines Cross-Border Commercial Manager",
      company: "Linio México",
      dates: "01/2020 - 05/2022",
      points: [
        "Boosted cross-border sales by 125% with growth strategies.",
        "Improved operational efficiency by 40% via UX optimization.",
        "Led a team of 10 across 5 countries.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-gray-900"
      >
        Experience
      </motion.h2>
      <div className="flex flex-col gap-8 mt-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-teal-600">{exp.title}</h3>
            <p className="text-lg text-red-500">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.dates}</p>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
