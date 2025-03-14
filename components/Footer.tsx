import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #333333; /* charcoal */
  color: #F7F7F7; /* softGray */
  padding: 2rem 1rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    text-align: left;
  }
`;

const Left = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: bold;
    color: #00C4B4; /* turquoise */
  }
  p {
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Right = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: right;
  }
  p {
    font-size: 0.875rem;
  }
`;

const Link = styled.a`
  color: #F7F7F7;
  text-decoration: none;
  &:hover {
    color: #FF6F61; /* coral */
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Left>
          <h3>Sebiche</h3>
          <p>Email: soysebiche.com</p>
          
        </Left>
        <Center>
          <Link href="#">LinkedIn</Link>
          <Link href="#">GitHub</Link>
        </Center>
        <Right>
          <p>© 2025 | Built with Next.js & Passion</p>
        </Right>
      </Container>
    </FooterWrapper>
  );
}