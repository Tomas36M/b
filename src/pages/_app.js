import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapScript from '../bootsrap.js';
import Layout from '@/components/layout.js';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
      <BootstrapScript />
      <Component {...pageProps} />
      </Layout>
    </>
  )
}
