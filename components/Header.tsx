import styled from '@emotion/styled';
import facepaint from 'facepaint';
import Nav from './Nav';

export default function Header(props) {
  const { heading, subHeading } = props;

  // Media query breakpoints
  const breakpoints = [36, 48, 62, 75];
  const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}rem)`));
  // const Header = styled.header(() =>
  //   mq({
  //     gridArea: 'header',
  //     backgroundColor: ['green', 'gray', 'hotpink'],
  //   })
  // );

  // Component styling
  const Header = styled.header`
    grid-area: header;
  `;
  const Heading = styled.h1`
    line-height: 4rem;
    font-size: 4rem;
    letter-spacing: 0.5rem;
  `;
  const SubHeading = styled.h2`
    margin-top: 1.25rem;
    padding-left: 0.125rem;
    line-height: 2rem;
    font-size: 2rem;
    letter-spacing: 0.25rem;
  `;

  return (
    <Header>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
      <Nav />
    </Header>
  );
}
