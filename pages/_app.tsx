import type { AppProps } from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
