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
        body {
          background-color: ${theme.colors.athensGrey};
          color: ${theme.colors.thunder};
          font-family: 'Roboto';
          font-weight: 400;
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
