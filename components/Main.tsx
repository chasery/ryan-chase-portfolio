import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';

export default function Main(props) {
  const { children } = props;

  // Component styling
  const theme: any = useTheme();
  const Main = styled.main(() =>
    mq({
      gridArea: 'main',
      transition: theme.transitions.out,

      '& section': {
        marginTop: ['4rem', '5rem', '6rem'],
        marginBottom: ['4rem', '5rem', '6rem'],
        transition: theme.transitions.out,
      },

      '& h3': {
        marginBottom: ['1.5rem', '1.75rem', '2rem'],
        padding: ['0 1rem', '0 2rem', '0'],
        lineHeight: ['1.5rem', '1.75rem', '2rem'],
        fontSize: ['1.5rem', '1.75rem', '2rem'],
        fontWeight: '300',
        letterSpacing: ['0.125rem', '0.125rem', '0.25rem'],
        transition: theme.transitions.out,
      },

      '& p': {
        padding: ['0 1rem', '0 2rem', '0'],
        lineHeight: ['1.75rem', '2rem', '2.25rem'],
        fontSize: ['1rem', '1.125rem', '1.25rem'],
        fontWeight: '400',
        transition: theme.transitions.out,
      },
    })
  );

  return <Main>{children}</Main>;
}