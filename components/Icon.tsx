import styled from '@emotion/styled';
import Image from 'next/image';

export default function Footer(props) {
  const { name, path, alt, width, height, size } = props;

  // Component styling
  const Icon = styled.div`
    display: flex;
    align-items: center;
  `;
  const IconImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${size === 'small' ? width : '6rem'};
    height: ${size === 'small' ? '3rem' : '6rem'};
  `;
  const IconLabel = styled.span`
    margin-left: 0.75rem;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  `;

  return (
    <Icon>
      <IconImage>
        <Image src={path} alt={alt} width={width} height={height} />
      </IconImage>
      <IconLabel>{name}</IconLabel>
    </Icon>
  );
}
