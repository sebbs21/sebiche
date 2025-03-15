import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sebiche | Portfolio</title>
        <meta name="description" content="Professional portfolio of Sebastian Napuri Mendoza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section con degradado */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-turquoise to-coral text-white text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sebastian Napuri Mendoza</h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6">
            Crafting Digital Experiences That Drive Growth & Impact
          </p>
          <a
            href="#experience"
            className="inline-block px-6 py-3 bg-white text-turquoise font-semibold rounded-full hover:bg-coral hover:text-white transition"
          >
            Explore My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          I’m a UX/UI leader with over 9 years of experience transforming eCommerce marketplaces and driving sustainable innovation.
        </p>
        <p className="text-lg">
          From boosting cross-border sales by 125% to redesigning user experiences that convert 78% better, I blend design, data, and strategy to create scalable impact.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-turquoise">Marketplace BU Manager</h3>
            <p className="text-coral">Servicios Liverpool | 06/2022 - 07/2024</p>
            <ul className="list-disc list-inside mt-2">
              <li>Led Crossborder Marketplace project, growing to 100+ sellers.</li>
              <li>Reduced response times by 35% with automation tools.</li>
              <li>Increased seller onboarding conversion by 78% via UX redesign.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-turquoise">Regional Hardlines Cross-Border Commercial Manager</h3>
            <p className="text-coral">Linio México | 01/2020 - 05/2022</p>
            <ul className="list-disc list-inside mt-2">
              <li>Boosted cross-border sales by 125% with growth strategies.</li>
              <li>Improved operational efficiency by 40% via UX optimization.</li>
              <li>Led a team of 10 across 5 countries.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-charcoal text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Email: sebas.napuri@gmail.com</p>
        <p className="text-lg mb-4">Phone: +1 (469) 435-4914</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-turquoise hover:text-coral">LinkedIn</a>
          <a href="#" className="text-turquoise hover:text-coral">GitHub</a>
        </div>
      </section>
    </div>
  );
}