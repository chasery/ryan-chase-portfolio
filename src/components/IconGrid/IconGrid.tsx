import Icon from './Icon';
import type { IconProps } from './Icon';

export interface IconGridProps {
  icons: IconProps[];
  maxColumns: number;
}

export default function IconGrid({
  icons = [],
  maxColumns,
}: IconGridProps): React.ReactElement<IconGridProps> {
  const gridCols =
    maxColumns === 3
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2';

  return (
    <ul
      className={`grid ${gridCols} mt-14 sm:mt-16 md:mt-16 mb-0 p-0 sm:px-8 md:p-0 list-none transition-all duration-out ease-out [&>li]:border-b-2 [&>li]:border-mischka [&>li]:border-r-0 sm:[&>li]:border-r-2 sm:[&>li]:border-r-mischka [&>li:nth-of-type(even)]:border-r-0 sm:[&>li:nth-of-type(even)]:border-r-0 md:[&>li:nth-of-type(even)]:border-r-0 lg:[&>li:nth-of-type(even)]:border-r-2 lg:[&>li:nth-of-type(even)]:border-r-mischka [&>li:nth-of-type(3n)]:border-r-0 sm:[&>li:nth-of-type(3n)]:border-r-2 sm:[&>li:nth-of-type(3n)]:border-r-mischka md:[&>li:nth-of-type(3n)]:border-r-2 md:[&>li:nth-of-type(3n)]:border-r-mischka lg:[&>li:nth-of-type(3n)]:border-r-0 [&>li:last-child]:border-b-0 [&>li:last-child]:border-r-0`}
    >
      {Boolean(icons.length) &&
        icons.map(
          (skill: IconProps, j): React.ReactElement => (
            <li key={j}>
              <Icon
                label={skill.label}
                path={skill.path}
                width={skill.width}
                height={skill.height}
                alt={skill.alt}
              />
            </li>
          )
        )}
    </ul>
  );
}
