import facepaint from 'facepaint';

// Media query breakpoints
const breakpoints = [36, 48, 62, 75];

export default facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}rem)`)
);
