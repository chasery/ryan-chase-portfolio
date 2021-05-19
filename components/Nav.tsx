import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';
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
  const Nav = styled.nav(() =>
    mq({
      margin: [
        '1.5rem 0 0 0.125rem',
        '1.75rem 0 0 0.125rem',
        '2rem 0 0 0.125rem',
      ],
      transition: theme.transitions.out,
    })
  );
  const NavItemsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding-left: 0;
    list-style: none;
  `;
  const NavItem = styled.li`
    & + li {
      margin-left: 0.125rem;
    }
  `;
  const NavItemLink = styled.a(() =>
    mq({
      display: 'block',
      padding: ['0.5rem 0.75rem', '0.75rem 1.125rem', '1rem 1.5rem'],
      color: theme.colors.thunder,
      fontSize: ['1rem', '1.125rem', '1.25rem'],
      fontWeight: '500',
      letterSpacing: ['0.125rem', '0.25rem'],
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: theme.transitions.out,

      '&:hover, &.active': {
        backgroundColor: theme.colors.thunder,
        color: theme.colors.athensGrey,
        transition: theme.transitions.in,
      },
    })
  );

  const renderNavItems = (items) => {
    return items.map((item, i) => {
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
