import type { ReactNode } from 'react';

export interface MainProps {
  children: ReactNode;
}

export default function Main({
  children,
}: MainProps): React.ReactElement<MainProps> {
  return (
    <main className="w-full sm:w-[44rem] md:w-[58rem] lg:w-[71rem] transition-all duration-out ease-out [&_section]:my-16 sm:[&_section]:my-20 md:[&_section]:my-24 [&_section]:transition-all [&_section]:duration-out [&_section]:ease-out [&_section:last-child]:mb-8 sm:[&_section:last-child]:mb-8 md:[&_section:last-child]:mb-24 [&_h3]:mb-6 sm:[&_h3]:mb-7 md:[&_h3]:mb-8 [&_h3]:px-4 sm:[&_h3]:px-8 md:[&_h3]:px-0 [&_h3]:leading-6 sm:[&_h3]:leading-7 md:[&_h3]:leading-8 [&_h3]:text-2xl sm:[&_h3]:text-3xl md:[&_h3]:text-3xl [&_h3]:font-light [&_h3]:tracking-[0.125rem] sm:[&_h3]:tracking-[0.125rem] md:[&_h3]:tracking-[0.25rem] [&_h3]:transition-all [&_h3]:duration-out [&_h3]:ease-out [&_h3]:uppercase [&_p]:px-4 sm:[&_p]:px-8 md:[&_p]:px-0 [&_p]:leading-7 sm:[&_p]:leading-8 md:[&_p]:leading-9 [&_p]:text-base sm:[&_p]:text-lg md:[&_p]:text-xl [&_p]:font-normal [&_p]:transition-all [&_p]:duration-out [&_p]:ease-out [&_p+p]:mt-7 sm:[&_p+p]:mt-8 md:[&_p+p]:mt-9">
      {children}
    </main>
  );
}
