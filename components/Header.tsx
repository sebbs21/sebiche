import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(51, 51, 51, 0.8); /* charcoal/80 */
  backdrop-filter: blur(4px);
  padding: 1rem 0;
`;

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #00C4B4; /* turquoise */
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

const NavItem = styled.a`
  color: #F7F7F7; /* softGray */
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  &:hover {
    color: #FF6F61; /* coral */
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: #FF6F61;
    transition: width 0.3s ease;
  }
  &:hover:after {
    width: 100%;
  }
`;

export default function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderWrapper>
        <Nav>
          <Logo>Sebiche</Logo>
          <NavList>
            {navItems.map((item) => (
              <li key={item.name}>
                <NavItem href={item.href}>{item.name}</NavItem>
              </li>
            ))}
          </NavList>
        </Nav>
      </HeaderWrapper>
    </motion.div>
  );
}