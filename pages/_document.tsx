import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1'
          />
          <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
          <meta
            name='description'
            content='The portfolio website of Ryan Chase a Full Stack Web Developer'
          />
          <meta property='og:title' content='Ryan Chase / Portfolio' />
          <meta
            property='og:description'
            content='The portfolio website of Ryan Chase a Full Stack Web Developer'
          />
          <meta property='og:url' content='http://chasery.com' />
          <meta property='og:site_name' content='Ryan Chase' />
          <meta
            property='og:image'
            content='https://chasery.com/thumbnail.jpg'
          />

          <link rel='icon' href='/favicon.png' />
          <link rel='apple-touch-icon' href='/icon192.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
