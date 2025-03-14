import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';

const Section = styled.section`
  padding: 4rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333333;
  text-align: center;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: #FFFFFF;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #00C4B4;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Tech = styled.p`
  font-size: 0.875rem;
  color: #FF6F61;
  margin-top: 0.5rem;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#FF6F61' : 'rgba(51, 51, 51, 0.3)')};
  border: none;
  cursor: pointer;
`;

export default function Projects() {
  const projects = [
    {
      title: 'Conga Mining Project',
      desc: 'Analyzed ESG data for Peruvian mining firms, driving sustainable insights.',
      tech: 'SQL, Excel, ESG Reporting',
    },
    {
      title: 'Sebiche Portfolio',
      desc: 'Built a modern portfolio with Next.js and Styled-Components to showcase my work.',
      tech: 'Next.js, TypeScript, Styled-Components',
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Projects</Title>
      </motion.div>
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardTitle>{projects[current].title}</CardTitle>
          <Description>{projects[current].desc}</Description>
          <Tech>Tech: {projects[current].tech}</Tech>
        </Card>
      </motion.div>
      <Dots>
        {projects.map((_, index) => (
          <Dot
            key={index}
            active={current === index}
            onClick={() => setCurrent(index)}
          />
        ))}
      </Dots>
    </Section>
  );
}