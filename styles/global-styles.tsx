import { css, Global } from '@emotion/react';
import normalize from './normalize';

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${normalize}
      `}
    />
  );
}
