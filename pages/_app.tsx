import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/nprogress.css";
import Router from "next/router";
import nProgress from "nprogress";
import { useEffect } from "react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on("routeChangeStart", nProgress.start);
    Router.events.on("routeChangeError", nProgress.done);
    Router.events.on("routeChangeComplete", nProgress.done);

    return () => {
      Router.events.on("routeChangeStart", nProgress.start);
      Router.events.on("routeChangeError", nProgress.done);
      Router.events.on("routeChangeComplete", nProgress.done);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
