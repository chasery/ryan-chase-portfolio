import { css, Global, useTheme } from '@emotion/react';
import normalize from './normalize';
import '@fontsource/antonio/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

export function GlobalStyles() {
  const theme: any = useTheme();

  return (
    <Global
      styles={css`
        ${normalize}
        html, body, div#__next {
          width: 100vw;
          height: 100vh;
        }
        body {
          background-color: ${theme.colors.athensGrey};
          color: ${theme.colors.thunder};
          font-family: 'Roboto';
          font-weight: 400;
        }
        body > div#__next {
          display: grid;
          grid-template-columns: repeat(3, 33.333vw);
          grid-template-rows: auto 1fr;
          grid-template-areas:
            'header header header'
            'body body body'
            'footer footer footer';
        }
        h1,
        h2,
        h3,
        h4 {
          margin: 0;
        }
        h1 {
          font-family: 'Antonio';
          font-weight: 700;
          text-transform: uppercase;
        }
        h2 {
          font-weight: 300;
          text-transform: uppercase;
        }
      `}
    />
  );
}
