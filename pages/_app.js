import React from "react";
import { AnimatePresence } from 'framer-motion'
import App from "next/app";
import Head from 'next/head'
import "../styles.scss";
import "../styles/Global.module.scss";
import "../styles/Index.module.scss";
import "../styles/Navigation.module.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
     <>
      <Head>
          <title> Lucas Barros </title>
      </Head>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;
