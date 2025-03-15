import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-light text-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}