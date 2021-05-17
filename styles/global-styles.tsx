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
        html, body {
          min-width: 100vw;
          min-height: 100vh;
        }
        body {
          display: flex;
          justify-content: center;
          background-color: ${theme.colors.athensGrey};
          color: ${theme.colors.thunder};
          font-family: 'Roboto';
          font-weight: 400;
        }
        body > div#__next {
          display: grid;
          grid-template-columns: repeat(3, 33.333%);
          grid-template-rows: auto 1fr;
          grid-template-areas:
            'header header header'
            'main main main'
            'footer footer footer';
          width: 100%;

          @media (min-width: 48rem) {
            width: 44rem;
          }
          @media (min-width: 62rem) {
            width: 58rem;
          }
          @media (min-width: 75rem) {
            width: 71rem;
          }
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
        h2,
        h3 {
          font-weight: 300;
          text-transform: uppercase;
        }
        p {
          margin: 0;
        }
      `}
    />
  );
}
