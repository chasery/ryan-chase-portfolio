import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';
import Image from 'next/image';

export default function Footer(props) {
  const { name, path, alt, width, height, size } = props;

  // Component styling
  const theme: any = useTheme();
  const Icon = styled.div`
    display: flex;
    align-items: center;
  `;
  const IconImage = styled.div(() =>
    mq({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: `${size === 'small' ? '3rem' : '6rem'}`,
      height: `${size === 'small' ? '3rem' : '6rem'}`,

      '& img': {
        transform: ['scale(0.875)', 'scale(1)'],
        transition: theme.transitions.out,
      },
    })
  );
  const IconLabel = styled.span(() =>
    mq({
      marginLeft: '0.75rem',
      fontSize: ['1rem', '1.125rem'],
      fontWeight: '400',
      letterSpacing: ['0.125rem', '0.25rem'],
      textTransform: 'uppercase',
    })
  );

  return (
    <Icon>
      <IconImage>
        <Image src={path} alt={alt} width={width} height={height} />
      </IconImage>
      <IconLabel>{name}</IconLabel>
    </Icon>
  );
}
