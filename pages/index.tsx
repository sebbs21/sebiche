import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio de Sebiche</title>
        <meta name="description" content="Portfolio profesional de Sebiche en UX/UI y tecnología." />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <About />
          <Experience />
        </main>
        <Footer />
      </div>
    </>
  );
}

