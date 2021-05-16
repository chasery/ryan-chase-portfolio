import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';
import Icon from './Icon';

export default function SocialMedia() {
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
  const SocialMedia = styled.ul(() =>
    mq({
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: ['column', 'row'],
      margin: '0',
      paddingLeft: '0',
      listStyle: 'none',
    })
  );
  const SocialMediaItem = styled.li(() =>
    mq({
      padding: ['0.5rem', '0'],
      '& + li': {
        marginLeft: ['0', '3rem', '4rem'],
        borderTop: [`solid 0.125rem ${theme.colors.mischka}`, 'none'],
      },
    })
  );
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
        <SocialMediaLink href={item.path} target='_blank'>
          <Icon
            name={item.name}
            path={item.icon.path}
            alt={item.icon.alt}
            width={item.icon.width}
            height={item.icon.height}
            size={'small'}
          />
        </SocialMediaLink>
      </SocialMediaItem>
    ));
  };

  return (
    <SocialMedia>{footerLinks && renderNavItems(footerLinks)}</SocialMedia>
  );
}
