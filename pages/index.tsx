import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Sebiche | Portfolio</title>
        <meta name="description" content="Sebastian's Professional Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main className="flex-grow">
        <About />
        <Experience />
      </main>

      <Footer />
    </div>
  )
}

export default Home