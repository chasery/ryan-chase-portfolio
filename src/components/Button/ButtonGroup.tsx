import type { ReactNode } from 'react';

export interface ButtonGroupProps {
  single: boolean;
  alignment?: string;
  children: ReactNode;
}

export default function ButtonGroup({
  single,
  alignment,
  children,
}: ButtonGroupProps): React.ReactElement<ButtonGroupProps> {
  const gridCols =
    single && !alignment ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2';
  const gap = single && !alignment ? 'gap-0' : 'gap-8';

  // Handle justify-items with conditional classes
  const justifyItemsClass =
    alignment === 'start'
      ? 'justify-items-start'
      : alignment === 'end'
        ? 'justify-items-end'
        : 'justify-items-center';

  const minWidthClass =
    single && !alignment
      ? 'lg:min-w-[calc(40%-4rem)]'
      : 'lg:min-w-[calc(100%-4rem)]';
  const maxWidthClass =
    single && !alignment
      ? 'lg:max-w-[calc(40%-4rem)]'
      : 'lg:max-w-[calc(100%-4rem)]';

  return (
    <div
      className={`grid ${gridCols} ${gap} ${justifyItemsClass} mt-14 sm:mt-16 md:mt-16 p-0 sm:px-8 md:p-0 transition-all duration-out ease-out [&>a]:min-w-[calc(75%-2rem)] sm:[&>a]:min-w-1/2 md:[&>a]:min-w-1/2 ${minWidthClass} [&>a]:max-w-[calc(75%-2rem)] sm:[&>a]:max-w-1/2 md:[&>a]:max-w-1/2 ${maxWidthClass} [&>a]:transition-all [&>a]:duration-out [&>a]:ease-out`}
    >
      {children}
    </div>
  );
}
