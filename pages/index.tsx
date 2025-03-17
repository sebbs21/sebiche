import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });
const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false });

interface JourneyItem {
  year: string;
  title: string;
  details: string;
}

export default function Home({ title, description }: { title: string; description: string }) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [surprise, setSurprise] = useState<string | null>(null);

  const journey: JourneyItem[] = [
    { year: '2015', title: 'Started as an Intern at Linio Peru', details: 'Began my career...' },
    { year: '2018', title: 'Graduated with a BBA from Universidad del Pacífico', details: 'Earned my degree...' },
    { year: '2020', title: 'Started as Manager at Linio Mexico', details: 'Led regional teams...' },
    { year: '2022', title: 'Started as Manager at Liverpool', details: 'Grew the marketplace...' },
    { year: '2024', title: 'Began the MADI program at SMU', details: 'Pursuing advanced...' },
  ];

  const surprises: string[] = [
    'I once redesigned a checkout flow in 48 hours!',
    'I’m obsessed with ceviche—hence the name Sebiche.',
    'I’ve led teams across 5 countries!',
    'I boosted sales by 125% with a single UX tweak.',
  ];

  const toggleDetails = (year: string) => setSelectedYear(selectedYear === year ? null : year);
  const showSurprise = () => {
    const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
    setSurprise(randomSurprise);
    window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => setSurprise(null), 3000);
  };
  const getLineHeight = () => {
    if (!selectedYear) return '0%';
    const index = journey.findIndex((item) => item.year === selectedYear);
    return `${(index + 1) * 20}%`;
  };

  return (
    <div className="min-h-screen bg-softGray">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Sebastian Napuri, UX, UI, eCommerce, portfolio, Peru" />
        <meta name="author" content="Sebastian Napuri Mendoza" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/sebastian.jpg" />
        <meta property="og:url" content="https://sebiche.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@700&display=swap&subset=latin-ext"
          rel="stylesheet"
          media="print"
          onLoad={() => "this.media='all'"}
        />
      </Head>
      <Header />
      <Hero />
      <Section id="about" title="About Me">
        <div className="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src="/sebastian.jpg"
            alt="Sebastian Napuri Mendoza, UX/UI Leader"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            loading="lazy"
            sizes="(max-width: 640px) 224px, 224px"
          />
        </div>
        <p className="text-base sm:text-lg mb-4">
          From a curious intern in Lima to a global eCommerce leader, my journey blends Peruvian grit with cutting-edge tech.
        </p>
        {/* Resto igual */}
      </Section>
      <Section id="experience" title="Experience" delay={0.4}>
        {/* Sin cambios */}
      </Section>
      <Carousel />
      <ContactForm />
      <Footer />
      <Script
        src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Sebastian Napuri Mendoza | UX/UI Portfolio",
      description: "Explore the portfolio of Sebastian Napuri Mendoza...",
    },
  };
}