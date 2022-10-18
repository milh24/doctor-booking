import Layout from "components/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { makeStore } from "redux/store";
import "styles/globals.css";

function MyApp({ Component, ...pageProps }: AppProps) {
  return (
    <Provider store={makeStore()}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
