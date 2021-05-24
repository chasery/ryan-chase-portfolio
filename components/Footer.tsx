import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';
import SocialMedia from './SocialMedia';

export default function Footer(props) {
  const { data } = props;
  // Component styling
  const theme: any = useTheme();
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
      <SocialMedia links={data} />
    </Footer>
  );
}
