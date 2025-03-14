import { motion } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333333; /* charcoal */
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 16rem;
  background: rgba(0, 196, 180, 0.2); /* turquoise/20 */
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
`;

const Quote = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  color: #FF6F61; /* coral */
`;

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>About Me</Title>
      </motion.div>
      <Grid>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ImagePlaceholder>[Add your photo or avatar here]</ImagePlaceholder>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextWrapper>
            <Paragraph>
              I’m a UX/UI leader with over 9 years of experience transforming
              eCommerce marketplaces and driving sustainable innovation.
            </Paragraph>
            <Paragraph>
              From boosting cross-border sales by 125% to redesigning user
              experiences that convert 78% better, I blend design, data, and
              strategy to create scalable impact.
            </Paragraph>
            <Quote>
              “Inspired by my Peruvian roots, I’m passionate about building a
              future where technology meets purpose.”
            </Quote>
          </TextWrapper>
        </motion.div>
      </Grid>
    </Section>
  );
}