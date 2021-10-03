import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css'
import '../../public/css/homestyle.css'

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Appwrite NextJs</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />

          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            as="font"
          />
           <link rel="stylesheet" href="/css/homestyle.css"></link>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
