import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../../utils/responsive';
import Image from 'next/image';

export interface IconProps {
  label?: string;
  path: string;
  width: number;
  height: number;
  alt: string;
  small?: boolean;
}

export default function Icon({
  label,
  path,
  alt,
  width,
  height,
  small,
}: IconProps): React.ReactElement<IconProps> {
  const theme: Theme = useTheme();

  const IconContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const IconImage = styled.div(() =>
    mq({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: ['4.5rem', `${small ? '3rem' : '6rem'}`],
      height: ['4.5rem', `${small ? '3rem' : '6rem'}`],

      '& img': {
        transform: ['scale(0.875)', 'scale(1)'],
        transition: theme.transitions.out,
      },
    })
  );
  const IconLabel = styled.span(() =>
    mq({
      marginLeft: '0.75rem',
      fontSize: '1rem',
      fontWeight: '500',
      letterSpacing: ['0.25rem', '0.125rem', '0.125rem', '0.25rem'],
      textTransform: 'uppercase',
      transition: theme.transitions.out,
    })
  );

  return (
    <IconContainer>
      <IconImage>
        <Image src={path} alt={alt} width={width} height={height} />
      </IconImage>
      <IconLabel>{label}</IconLabel>
    </IconContainer>
  );
}
