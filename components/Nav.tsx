import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
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

  // Component styling
  const theme: any = useTheme();
  const Nav = styled.nav`
    margin: 2rem 0 0 0.125rem;
  `;
  const NavItemsList = styled.ul`
    display: flex;
    margin: 0;
    padding-left: 0;
    list-style: none;
  `;
  const NavItem = styled.li`
    & + li {
      margin-left: 0.125rem;
    }
  `;
  const NavItemLink = styled.a`
    display: block;
    padding: 1rem 1.5rem;
    color: ${theme.colors.thunder};
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.25rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: ${theme.transitions.out};

    &:hover,
    &.active {
      background-color: ${theme.colors.thunder};
      color: ${theme.colors.athensGrey};
      transition: ${theme.transitions.in};
    }
  `;

  const renderNavItems = (items) => {
    return items.map((item, i) => {
      console.log(router.pathname === item.path);
      return (
        <NavItem key={i}>
          <Link href={item.path} passHref>
            <NavItemLink
              className={router.pathname === item.path ? 'active' : null}
            >
              / {item.name}
            </NavItemLink>
          </Link>
        </NavItem>
      );
    });
  };

  return (
    <Nav>
      <NavItemsList>{pages && renderNavItems(pages)}</NavItemsList>
    </Nav>
  );
}
