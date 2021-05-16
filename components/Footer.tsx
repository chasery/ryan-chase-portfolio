import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Icon from './Icon';

export default function Footer() {
  const footerLinks = [
    {
      icon: {
        path: '/icons/github.svg',
        alt: '',
        width: '32px',
        height: '32px',
      },
      name: 'GitHub',
      path: 'https://github.com/chasery',
    },
    {
      icon: {
        path: '/icons/linked-in.svg',
        alt: '',
        width: '28px',
        height: '28px',
      },
      name: 'LinkedIn',
      path: 'https://www.linkedin.com/in/chasery/',
    },
    {
      icon: {
        path: '/icons/email.svg',
        alt: '',
        width: '30px',
        height: '24px',
      },
      name: 'Email',
      path: 'mailto:ryan@chasery.com',
    },
  ];

  // Component styling
  const theme: any = useTheme();
  const Footer = styled.footer`
    grid-area: footer;
    align-self: end;
    margin-left: 0.125rem;
  `;

  // Social Media
  const SocialMediaList = styled.ul`
    display: flex;
    margin: 0;
    padding-left: 0;
    list-style: none;
  `;
  const SocialMediaItem = styled.li`
    & + li {
      margin-left: 4rem;
    }
  `;
  const SocialMediaLink = styled.a`
    padding-left: 0;
    color: ${theme.colors.thunder};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `;

  const renderNavItems = (items) => {
    return items.map((item, i) => (
      <SocialMediaItem key={i}>
        <Link href={item.path} passHref>
          <SocialMediaLink>
            <Icon
              name={item.name}
              path={item.icon.path}
              alt={item.icon.alt}
              width={item.icon.width}
              height={item.icon.height}
              size={'small'}
            />
          </SocialMediaLink>
        </Link>
      </SocialMediaItem>
    ));
  };

  return (
    <Footer>
      <SocialMediaList>
        {footerLinks && renderNavItems(footerLinks)}
      </SocialMediaList>
    </Footer>
  );
}
