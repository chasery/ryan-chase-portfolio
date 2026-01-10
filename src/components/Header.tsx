import { useState } from 'react';
import Nav from './Nav';
import Icon from './IconGrid/Icon';
import {
  NAV_CLOSE_DESCRIPTION,
  NAV_CLOSE_TITLE,
  NAV_OPEN_DESCRIPTION,
  NAV_OPEN_TITLE,
} from '../utils/constants';

export interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({
  title,
  subtitle,
}: HeaderProps): React.ReactElement<HeaderProps> {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative flex-grow-0 p-4 pt-0 sm:p-8 sm:pt-0 md:p-0 md:pt-16 lg:pt-32 transition-all duration-out ease-out">
      <h1 className="leading-[3rem] text-5xl tracking-[0.25rem] sm:leading-[3.5rem] sm:text-6xl sm:tracking-[0.375rem] md:leading-16 md:text-6xl md:tracking-[0.5rem] transition-all duration-out ease-out font-display">
        {title}
      </h1>
      <h2 className="mt-3 pl-0.5 leading-6 text-2xl tracking-[0.125rem] sm:mt-4 sm:leading-7 sm:text-3xl md:mt-5 md:leading-8 md:text-3xl md:tracking-[0.25rem] transition-all duration-out ease-out font-light uppercase">
        {subtitle}
      </h2>
      <div className="hidden md:block">
        <Nav />
      </div>
      <button
        type="button"
        onClick={handleOpenMenu}
        className="block md:hidden mt-6 p-0 border-0 bg-transparent hover:bg-transparent"
        aria-label={NAV_OPEN_TITLE}
      >
        <Icon
          label={NAV_OPEN_TITLE}
          path="/icons/menu.svg"
          width={31}
          height={22}
          alt={NAV_OPEN_DESCRIPTION}
          small={true}
        />
      </button>
      {menuOpen && (
        <div className="block md:hidden fixed top-0 left-0 z-10 w-screen h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] pt-4 sm:pt-8 bg-athensGrey transition-all duration-out ease-out">
          <h1 className="mx-4 sm:mx-8 leading-[3rem] text-5xl tracking-[0.25rem] sm:leading-[3.5rem] sm:text-6xl sm:tracking-[0.375rem] md:leading-16 md:text-6xl md:tracking-[0.5rem] transition-all duration-out ease-out font-display">
            {title}
          </h1>
          <h2 className="mx-4 sm:mx-8 mt-3 pl-0.5 leading-6 text-2xl tracking-[0.125rem] sm:mt-4 sm:leading-7 sm:text-3xl md:mt-5 md:leading-8 md:text-3xl md:tracking-[0.25rem] transition-all duration-out ease-out font-light uppercase">
            {subtitle}
          </h2>
          <Nav />
          <div className="flex justify-center mt-16">
            <button
              type="button"
              onClick={handleCloseMenu}
              className="block md:hidden mt-6 p-0 border-0 bg-transparent hover:bg-transparent"
              aria-label={NAV_CLOSE_TITLE}
            >
              <Icon
                label={NAV_CLOSE_TITLE}
                path="/icons/close.svg"
                width={24}
                height={24}
                alt={NAV_CLOSE_DESCRIPTION}
                small={true}
              />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
