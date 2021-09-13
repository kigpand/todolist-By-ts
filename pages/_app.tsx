import '../styles/globals.css'
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>Todolist</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
    )
}

export default MyApp;
