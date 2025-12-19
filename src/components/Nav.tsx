import type { Page } from '../utils/types';
import { pages } from '../utils/constants';

export interface NavProps {
  currentPath?: string;
}

export default function Nav({
  currentPath,
}: NavProps = {}): React.ReactElement {
  const navPages: Page[] = [pages.home, pages.about, pages.skills];

  const renderNavItems = (navPages: Page[]) => {
    return navPages.map(({ path, title }: Page, i) => {
      const isActive = currentPath === path;
      return (
        <li
          key={i}
          className="[&+li]:ml-0 sm:[&+li]:ml-0 md:[&+li]:ml-0.5 [&+li]:border-t-2 [&+li]:border-mischka sm:[&+li]:border-t-2 sm:[&+li]:border-mischka md:[&+li]:border-t-0 [&+li]:transition-all [&+li]:duration-out [&+li]:ease-out"
        >
          <a
            href={path}
            className={`block py-5 px-4 sm:py-5 sm:px-8 md:py-4 md:px-6 text-thunder leading-5 text-xl font-medium tracking-[0.25rem] no-underline uppercase transition-all duration-out ease-out ${
              isActive
                ? 'bg-thunder text-athensGrey transition-all duration-in ease-in'
                : 'hover:bg-thunder hover:text-athensGrey hover:transition-all hover:duration-in hover:ease-in'
            }`}
          >
            / {title}
          </a>
        </li>
      );
    });
  };

  return (
    <nav className="mt-6 sm:mt-7 md:mt-8 md:ml-0.5 transition-all duration-out ease-out">
      <ul className="flex flex-col sm:flex-col md:flex-row flex-wrap m-0 pl-0 list-none transition-all duration-out ease-out">
        {Boolean(navPages.length) && renderNavItems(navPages)}
      </ul>
    </nav>
  );
}
