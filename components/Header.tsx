import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';
import Nav from './Nav';

export default function Header(props) {
  const { heading, subHeading } = props;

  // Component styling
  const theme: any = useTheme();
  const Header = styled.header(() =>
    mq({
      gridArea: 'header',
      padding: ['1rem 1rem 0', '2rem 0 0', '4rem 0 0', '8rem 0 0'],
      transition: theme.transitions.out,
    })
  );
  const Heading = styled.h1(() =>
    mq({
      lineHeight: ['3rem', '3.5rem', '4rem'],
      fontSize: ['3rem', '3.5rem', '4rem'],
      letterSpacing: ['0.25rem', '0.375rem', '0.5rem'],
      transition: theme.transitions.out,
    })
  );
  const SubHeading = styled.h2(() =>
    mq({
      marginTop: ['0.75rem', '1rem', '1.25rem'],
      paddingLeft: '0.125rem',
      lineHeight: ['1.5rem', '1.75rem', '2rem'],
      fontSize: ['1.5rem', '1.75rem', '2rem'],
      letterSpacing: ['0.125rem', '0.125rem', '0.25rem'],
      transition: theme.transitions.out,
    })
  );

  return (
    <Header>
      <Heading>{heading}</Heading>
      <SubHeading>{subHeading}</SubHeading>
      <Nav />
    </Header>
  );
}
