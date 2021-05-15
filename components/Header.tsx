import styled from '@emotion/styled';
import Nav from './Nav';

export default function Header(props) {
  const { heading, subHeading } = props;

  // Component styling
  const Header = styled.header`
    margin: 8rem 0 0 8rem;
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

  const pages = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/skills',
      name: 'Skills',
    },
    {
      path: '/work',
      name: 'Work',
    },
  ];

  return (
    <Header>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
      <Nav pages={pages} />
    </Header>
  );
}
