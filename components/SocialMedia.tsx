import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';
import Icon from './Icon';

export default function SocialMedia(props) {
  const { links } = props;
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
      transition: theme.transitions.out,

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
            small={true}
          />
        </SocialMediaLink>
      </SocialMediaItem>
    ));
  };

  return <SocialMedia>{links && renderNavItems(links)}</SocialMedia>;
}
