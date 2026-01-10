import { css, Global, Theme, useTheme } from '@emotion/react';
import normalize from './normalize';
import '@fontsource/antonio/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

export function GlobalStyles() {
  const theme: Theme = useTheme();

  return (
    <Global
      styles={css`
        ${normalize}
        html {
          height: -webkit-fill-available;
        }
        body {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 100vw;
          min-height: 100vh;
          background-color: ${theme.colors.athensGrey};
          color: ${theme.colors.thunder};
          font-family: 'Roboto';
          font-weight: 400;

          @media (max-width: 48rem) {
            min-height: fill-available;
          }
        }
        body > div#__next {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
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
