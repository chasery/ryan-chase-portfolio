import clsx from 'clsx';
import React from 'react';

export function DownloadAnchor({
  target = '_blank',
  children,
  className,
  rel = 'noopener noreferrer',
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): React.ReactElement<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> {
  return (
    <a
      {...rest}
      target={target}
      rel={rel}
      className={clsx(
        className,
        'flex justify-center items-center h-16 px-8 leading-4 md:leading-[1.125rem] text-base md:text-lg tracking-[0.125rem] md:tracking-[0.125rem] lg:tracking-[0.25rem] bg-brightGrey text-glossyBlack rounded-full uppercase no-underline transition-all duration-150 ease-out shadow-[_-0.5rem_-0.5rem_2rem_0_#FFFFFF,_0.5rem_0.5rem_1rem_0_rgba(38,35,36,0.50)] hover:shadow-[_-0.25rem_-0.25rem_0.5rem_0_rgba(255,255,255,0.75),_0.25rem_0.25rem_1rem_0_rgba(38,35,36,0.25)] hover:transition-all hover:duration-300 hover:ease-out'
      )}
    >
      {children}
    </a>
  );
}
