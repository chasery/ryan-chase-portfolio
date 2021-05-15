import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

export default function Header(props) {
  const { pages } = props;

  // Component styling
  const theme: any = useTheme();
  const Nav = styled.nav`
    margin-top: 3rem;
  `;
  const NavItemLink = styled.a`
    padding-left: 0;
    color: ${theme.colors.thunder};
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.25rem;
    text-decoration: none;
    text-transform: uppercase;
  `;
  const NavItem = styled.li`
    & + li {
      margin-left: 4rem;
    }
  `;
  const NavItemsList = styled.ul`
    display: flex;
    margin: 0;
    padding-left: 0;
    list-style: none;
  `;

  const renderNavItems = (items) => {
    return items.map((item) => (
      <NavItem>
        <Link href={item.path} passHref>
          <NavItemLink>/ {item.name}</NavItemLink>
        </Link>
      </NavItem>
    ));
  };

  return (
    <Nav>
      <NavItemsList>{pages && renderNavItems(pages)}</NavItemsList>
    </Nav>
  );
}
