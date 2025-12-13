import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../utils/responsive';
import SocialMedia from './SocialMedia';

export default function Footer(): React.ReactElement {
  const theme: Theme = useTheme();

  const Footer = styled.footer(() =>
    mq({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'flex-end',
      marginLeft: ['0', '0.125rem'],
      padding: ['0', '0 2rem 2rem', '0 0 4rem', '0 0 8rem'],
      transition: theme.transitions.out,
    })
  );

  return (
    <Footer>
      <SocialMedia />
    </Footer>
  );
}
