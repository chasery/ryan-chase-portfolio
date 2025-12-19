export interface IconProps {
  label?: string;
  path: string;
  width: number;
  height: number;
  alt: string;
  small?: boolean;
}

export default function Icon({
  label,
  path,
  alt,
  width,
  height,
  small,
}: IconProps): React.ReactElement<IconProps> {
  return (
    <div className="flex items-center">
      <div
        className={`flex justify-center items-center ${small ? 'w-12 h-12' : 'w-20 h-20 sm:w-24 sm:h-24'} [&_img]:scale-90 sm:[&_img]:scale-100 [&_img]:transition-all [&_img]:duration-out [&_img]:ease-out`}
      >
        <img src={path} alt={alt} width={width} height={height} />
      </div>
      {label && (
        <span className="ml-3 text-base font-medium tracking-[0.25rem] sm:tracking-[0.125rem] md:tracking-[0.125rem] lg:tracking-[0.25rem] uppercase transition-all duration-out ease-out">
          {label}
        </span>
      )}
    </div>
  );
}
