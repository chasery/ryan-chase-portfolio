import styled from '@emotion/styled';
import facepaint from 'facepaint';
import Nav from './Nav';

export default function Header(props) {
  const { heading, subHeading } = props;

  // Media query breakpoints
  const breakpoints = [36, 48, 62, 75];
  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}rem)`));

  // Component styling
  const Header = styled.header`
    grid-area: header;
  `;
  const Heading = styled.h1(() =>
    mq({
      lineHeight: ['2.25rem', '3.25rem', '4rem'],
      fontSize: ['2.25rem', '3.25rem', '4rem'],
      letterSpacing: ['0.25rem', '0.25rem', '0.5rem'],
    })
  );
  const SubHeading = styled.h2(() =>
    mq({
      marginTop: ['0.75rem', '1.25rem', '1.25rem'],
      paddingLeft: '0.125rem',
      lineHeight: ['1.25rem', '1.25rem', '2rem'],
      fontSize: ['1.25rem', '1.75rem', '2rem'],
      letterSpacing: ['0.1rem', '0.1rem', '0.25rem'],
    })
  );

  return (
    <Header>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
      <Nav />
    </Header>
  );
}
