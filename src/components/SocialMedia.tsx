import Icon from './IconGrid/Icon';
import type { SocialDetail } from '../utils/types';
import { socialMedia } from '../utils/constants';

export default function SocialMedia(): React.ReactElement {
  const renderNavItems = (socialDetails: SocialDetail[]) => {
    return socialDetails.map(({ path, icon }: SocialDetail, i) => (
      <li
        key={i}
        className="p-0 transition-all duration-out ease-out [&+li]:ml-0 sm:[&+li]:ml-12 md:[&+li]:ml-16 [&+li]:border-t-2 [&+li]:border-mischka sm:[&+li]:border-t-0"
      >
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          className="pl-0 text-thunder underline sm:no-underline hover:underline"
        >
          <Icon {...icon} />
        </a>
      </li>
    ));
  };

  return (
    <ul className="flex flex-wrap flex-col sm:flex-row m-0 pl-0 list-none">
      {Boolean(socialMedia.length) && renderNavItems(socialMedia)}
    </ul>
  );
}
