import styled from '@emotion/styled';
import SocialMedia from './SocialMedia';

export default function Footer() {
  // Component styling
  const Footer = styled.footer`
    grid-area: footer;
    align-self: end;
    margin-left: 0.125rem;
  `;

  return (
    <Footer>
      <SocialMedia />
    </Footer>
  );
}
