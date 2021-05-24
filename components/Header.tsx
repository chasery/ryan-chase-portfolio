import { useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import mq from '../services/responsive';
import Nav from './Nav';
import Icon from './Icon';

export default function Header(props) {
  const { subHeading } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  // Component styling
  const theme: any = useTheme();
  const Header = styled.header(() =>
    mq({
      position: 'relative',
      flexGrow: '0',
      padding: ['1rem 1rem 0', '2rem 2rem 0', '4rem 0 0', '8rem 0 0'],
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
  const NavWrapper = styled.div(() =>
    mq({
      display: ['none', 'none', 'block'],
    })
  );
  const MobileNavWrapper = styled.div(() =>
    mq({
      display: ['block', 'block', 'none'],
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '10',
      width: '100vw',
      height: ['calc(100vh - 1rem)', 'calc(100vh - 2rem)'],
      paddingTop: ['1rem', '2rem'],
      backgroundColor: theme.colors.athensGrey,
      transition: theme.transitions.out,

      '& > h1, h2': {
        marginLeft: ['1rem', '2rem'],
        marginRight: ['1rem', '2rem'],
      },
    })
  );
  const MenuControl = styled.button(() =>
    mq({
      display: ['block', 'block', 'none'],
      marginTop: '1.5rem',
      padding: '0',
      border: 'none',
      backgroundColor: 'transparent',

      '&: hover': {
        backgroundColor: 'transparent',
      },
    })
  );
  const CloseControlWrapper = styled.div(() =>
    mq({
      display: 'flex',
      justifyContent: 'center',
      marginTop: '4rem',
    })
  );

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Header>
      <Heading>Ryan Chase</Heading>
      <SubHeading>{subHeading}</SubHeading>
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <MenuControl onClick={handleOpenMenu}>
        <Icon
          name='Menu'
          path='/icons/menu.svg'
          alt='Open Menu'
          width='31px'
          height='22px'
          small={true}
        />
      </MenuControl>
      {menuOpen && (
        <MobileNavWrapper>
          <Heading>Ryan Chase</Heading>
          <SubHeading>Menu</SubHeading>
          <Nav />
          <CloseControlWrapper>
            <MenuControl onClick={handleCloseMenu}>
              <Icon
                name='Close'
                path='/icons/close.svg'
                alt='Close Menu'
                width='24px'
                height='24px'
                small={true}
              />
            </MenuControl>
          </CloseControlWrapper>
        </MobileNavWrapper>
      )}
    </Header>
  );
}
