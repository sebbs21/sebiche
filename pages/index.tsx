import { motion } from 'framer-motion';
import styled from 'styled-components';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Hero = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #00C4B4, #FF6F61);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: #FFFFFF;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  max-width: 32rem;
  margin: 1rem auto;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: #00C4B4;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 9999px;
  transition: background 0.3s ease;
  &:hover {
    background: #FFC107;
  }
`;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <HeroContent>
              <Title>Sebiche/Title>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <Subtitle>
                  Crafting Digital Experiences That Drive Growth & Impact
                </Subtitle>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button href="#experience">Explore My Work</Button>
              </motion.div>
            </HeroContent>
          </motion.div>
        </Hero>
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}