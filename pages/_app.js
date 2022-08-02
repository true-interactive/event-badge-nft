import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"
import Head from 'next/head'
import Script from 'next/script'

import Header from "/components/Header";


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>True Interactive</title>
      </Head>
      <Script src="https://kit.fontawesome.com/af27494762.js" crossOrigin="anonymous"></Script>
      <MoralisProvider initializeOnMount={false}>
        <Header></Header>
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  )
}