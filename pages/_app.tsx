import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F7F7F7; /* softGray */
    color: #333333; /* charcoal */
    font-family: 'Inter', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }
  p {
    font-family: 'Inter', sans-serif;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}