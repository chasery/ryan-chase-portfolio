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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='The portfolio website of Ryan Chase a Full Stack Web Developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
