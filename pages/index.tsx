import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Carousel from '../components/Carousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
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
        <div className="w-32 sm:w-48 h-32 sm:h-48 mx-auto mb-4 rounded-full overflow-hidden">
          <Image src="/sebastian.jpg" alt="Sebastian Napuri" width={192} height={192} className="object-cover" />
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
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold text-turquoise mb-4">My Journey</h3>
          <div className="relative border-l-2 border-turquoise pl-6">
            <div className="mb-6">
              <div className="absolute w-4 h-4 bg-turquoise rounded-full -left-2 top-1"></div>
              <p className="text-sm sm:text-base text-coral">2016</p>
              <p className="text-base sm:text-lg">Started my UX career, designing my first eCommerce flow.</p>
            </div>
            <div className="mb-6">
              <div className="absolute w-4 h-4 bg-turquoise rounded-full -left-2 top-1"></div>
              <p className="text-sm sm:text-base text-coral">2022</p>
              <p className="text-base sm:text-lg">Led cross-border sales growth by 125% at Servicios Liverpool.</p>
            </div>
            <div>
              <div className="absolute w-4 h-4 bg-turquoise rounded-full -left-2 top-1"></div>
              <p className="text-sm sm:text-base text-coral">2025</p>
              <p className="text-base sm:text-lg">Building this portfolio to showcase my expertise.</p>
            </div>
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