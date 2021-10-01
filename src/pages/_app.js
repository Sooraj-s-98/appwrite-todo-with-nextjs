import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';
import { ThemeProvider as MaterialUiProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../themes/dark';

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
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
            as="font"
          />
        </Head>
        <StyledComponentProvider theme={theme}>
          <MaterialUiProvider theme={theme}>
            <StylesProvider injectFirst>
              <CssBaseline />
              <Component {...pageProps} />
            </StylesProvider>
          </MaterialUiProvider>
        </StyledComponentProvider>
      </>
    );
  }
}
