import type { AppProps } from "next/app"
import Head from "next/head"
import { Provider } from "react-redux"
import Layout from "../components/Layout"
import { wrapper } from "../redux/store"
import "../styles/globals.css"

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <Provider store={store}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
