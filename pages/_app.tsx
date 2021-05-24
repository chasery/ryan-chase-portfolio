import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>Ryan Chase / Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
