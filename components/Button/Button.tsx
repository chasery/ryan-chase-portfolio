import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../../utils/responsive';

export interface ButtonProps {
  text: string;
  path: string;
}

export default function Button({
  text,
  path,
}: ButtonProps): React.ReactElement<ButtonProps> {
  const theme: Theme = useTheme();

  const Button = styled.a(() =>
    mq({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '4rem',
      padding: ['0 2rem'],
      lineHeight: ['1rem', '1.125rem'],
      fontSize: ['1rem', '1.125rem'],
      letterSpacing: ['0.125rem', '0.125rem', '0.25rem'],
      backgroundColor: theme.colors.athensGrey,
      color: theme.colors.thunder,
      boxShadow:
        '-0.5rem -0.5rem 2rem 0 #FFFFFF, 0.5rem 0.5rem 1rem 0 rgba(38,35,36,0.50)',
      borderRadius: '2rem',
      textTransform: 'uppercase',
      textDecoration: 'none',
      transition: theme.transitions.out,

      '&:hover': {
        boxShadow:
          '-0.25rem -0.25rem 0.5rem 0 rgba(255,255,255,0.75), 0.25rem 0.25rem 1rem 0 rgba(38,35,36,0.25)',
        transition: theme.transitions.in,
      },
    })
  );

  return (
    <Button href={path} target='_blank'>
      {text}
    </Button>
  );
}
