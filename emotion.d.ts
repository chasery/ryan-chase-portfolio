import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      thunder: string;
      mischka: string;
      athensGrey: string;
      linkWater: string;
    },
    transitions: {
      in: string;
      out: string;
    },
  }
}