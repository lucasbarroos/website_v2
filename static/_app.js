import React from 'react';
import { AnimatePresence } from 'framer-motion'
import App from 'next/app';
import Head from 'next/head'
import '../styles/Global.module.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    
    return (
      <>
        <Head>
          <title>Lucas Barros</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"></link>
        </Head>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;