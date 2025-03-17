import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Carousel from '../components/Carousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [surprise, setSurprise] = useState<string | null>(null);

  const journey = [
    {
      year: '2015',
      title: 'Started as an Intern at Linio Peru',
      details: 'Began my career in eCommerce, learning the ropes of UX and marketplace dynamics.',
    },
    {
      year: '2018',
      title: 'Graduated with a BBA from Universidad del Pacífico',
      details: 'Earned my degree with a focus on business administration, fueling my passion for strategy.',
    },
    {
      year: '2020',
      title: 'Started as Manager at Linio Mexico',
      details: 'Led regional teams to boost cross-border sales by 125% through UX optimization.',
    },
    {
      year: '2022',
      title: 'Started as Manager at Liverpool',
      details: 'Grew the marketplace to 100+ sellers with a 78% increase in onboarding conversion.',
    },
    {
      year: '2024',
      title: 'Began the MADI program at SMU',
      details: 'Pursuing advanced design and innovation skills to elevate my craft.',
    },
  ];

  const surprises = [
    'I once redesigned a checkout flow in 48 hours!',
    'I’m obsessed with ceviche—hence the name Sebiche.',
    'I’ve led teams across 5 countries!',
    'I boosted sales by 125% with a single UX tweak.',
  ];

  const toggleDetails = (year: string) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  const showSurprise = () => {
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    setSurprise(randomSurprise);
    setTimeout(() => setSurprise(null), 3000);
  };

  const getLineHeight = () => {
    if (!selectedYear) return '0%';
    const index = journey.findIndex((item) => item.year === selectedYear);
    return `${(index + 1) * 20}%`; // 20% por hito, ajustable
  };

  return (
    <div className="min-h-screen bg-softGray">
      <Head>
        <title>Sebastian Napuri Mendoza | Portfolio</title>
        <meta name="description" content="Professional portfolio of Sebastian Napuri Mendoza" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Hero />
      <Section id="about" title="About Me">
        <div className="w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-4 rounded-full overflow-hidden">
          <Image src="/sebastian.jpg" alt="Sebastian Napuri" width={224} height={224} className="object-cover w-full h-full" />
        </div>
        <p className="text-base sm:text-lg mb-4">
          I’m a UX/UI leader with over 9 years of experience transforming eCommerce marketplaces and driving sustainable innovation.
        </p>
        <p className="text-base sm:text-lg mb-4">
          My Peruvian heritage taught me to blend creativity and precision—skills I bring to every UX challenge.
        </p>
        <p className="text-base sm:text-lg mb-6">
          From boosting cross-border sales by 125% to redesigning user experiences that convert 78% better, I blend design, data, and strategy to create scalable impact.
        </p>
        <p className="text-coral italic text-base sm:text-lg mb-6">“Inspired by my Peruvian roots, I build tech with purpose.”</p>
        <button
          onClick={showSurprise}
          className="mx-auto block px-6 py-2 bg-turquoise text-white rounded-full hover:bg-coral transition mb-6"
        >
          Surprise Me!
        </button>
        {surprise && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-base sm:text-lg text-turquoise mb-6"
          >
            {surprise}
          </motion.p>
        )}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold text-turquoise mb-4">My Journey</h3>
          <div className="relative pl-6">
            <motion.div
              className="absolute left-0 top-0 w-0.5 bg-turquoise"
              initial={{ height: '0%' }}
              animate={{ height: getLineHeight() }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
            {journey.map((item) => (
              <div key={item.year} className="mb-6 cursor-pointer" onClick={() => toggleDetails(item.year)}>
                <motion.div
                  className="absolute w-4 h-4 bg-turquoise rounded-full -left-2 top-1"
                  animate={{ scale: selectedYear === item.year ? 1.5 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-sm sm:text-base text-coral">{item.year}</p>
                <p className="text-base sm:text-lg">{item.title}</p>
                {selectedYear === item.year && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm sm:text-base text-gray-600 mt-2"
                  >
                    {item.details}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section id="experience" title="Experience" delay={0.4}>
        <div className="space-y-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-turquoise">Marketplace BU Manager</h3>
            <p className="text-coral text-sm sm:text-base">Servicios Liverpool | 06/2022 - 07/2024</p>
            <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
              <li>Led Crossborder Marketplace project, growing to 100+ sellers.</li>
              <li>Reduced response times by 35% with automation tools.</li>
              <li>Increased seller onboarding conversion by 78% via UX redesign.</li>
            </ul>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold text-turquoise">Regional Hardlines Cross-Border Commercial Manager</h3>
            <p className="text-coral text-sm sm:text-base">Linio México | 01/2020 - 05/2022</p>
            <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
              <li>Boosted cross-border sales by 125% with growth strategies.</li>
              <li>Improved operational efficiency by 40% via UX optimization.</li>
              <li>Led a team of 10 across 5 countries.</li>
            </ul>
          </div>
        </div>
      </Section>
      <Carousel />
      <ContactForm />
      <Footer />
    </div>
  );
}