import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../utils/responsive';
import Icon from './IconGrid/Icon';
import { SocialDetail } from '../utils/types';
import { socialMedia } from '../utils/constants';

export default function SocialMedia(): React.ReactElement {
  const theme: Theme = useTheme();

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
      padding: '0',
      transition: theme.transitions.out,

      '& + li': {
        marginLeft: ['0', '3rem', '4rem'],
        borderTop: [`solid 0.125rem ${theme.colors.mischka}`, 'none'],
      },
    })
  );
  const SocialMediaLink = styled.a(() =>
    mq({
      paddingLeft: '0',
      color: theme.colors.thunder,
      textDecoration: ['underline', 'none'],

      '&:hover': {
        textDecoration: 'underline',
      },
    })
  );

  const renderNavItems = (socialDetails: SocialDetail[]) => {
    return socialDetails.map(({ path, icon }: SocialDetail, i) => (
      <SocialMediaItem key={i}>
        <SocialMediaLink href={path} target='_blank'>
          <Icon {...icon} />
        </SocialMediaLink>
      </SocialMediaItem>
    ));
  };

  return (
    <SocialMedia>
      {Boolean(socialMedia.length) && renderNavItems(socialMedia)}
    </SocialMedia>
  );
}
