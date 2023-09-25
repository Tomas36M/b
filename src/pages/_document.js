import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='d-flex flex-column min-vh-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
