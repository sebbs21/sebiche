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
  color: #333333;
  text-align: center;
  margin-bottom: 2rem;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Card = styled.div`
  background: #FFFFFF; /* white */
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #00C4B4; /* turquoise */
`;

const Company = styled.p`
  font-size: 1.125rem;
  color: #FF6F61; /* coral */
`;

const Dates = styled.p`
  font-size: 0.875rem;
  color: rgba(51, 51, 51, 0.7);
`;

const List = styled.ul`
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ListItem = styled.li`
  font-size: 1rem;
`;

export default function Experience() {
  const experiences = [
    {
      title: 'Marketplace BU Manager',
      company: 'Servicios Liverpool',
      dates: '06/2022 - 07/2024',
      points: [
        'Led Crossborder Marketplace project, growing to 100+ sellers.',
        'Reduced response times by 35% with automation tools.',
        'Increased seller onboarding conversion by 78% via UX redesign.',
      ],
    },
    {
      title: 'Regional Hardlines Cross-Border Commercial Manager',
      company: 'Linio México',
      dates: '01/2020 - 05/2022',
      points: [
        'Boosted cross-border sales by 125% with growth strategies.',
        'Improved operational efficiency by 40% via UX optimization.',
        'Led a team of 10 across 5 countries.',
      ],
    },
  ];

  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Experience</Title>
      </motion.div>
      <CardList>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card>
              <CardTitle>{exp.title}</CardTitle>
              <Company>{exp.company}</Company>
              <Dates>{exp.dates}</Dates>
              <List>
                {exp.points.map((point, i) => (
                  <ListItem key={i}>• {point}</ListItem>
                ))}
              </List>
            </Card>
          </motion.div>
        ))}
      </CardList>
    </Section>
  );
}