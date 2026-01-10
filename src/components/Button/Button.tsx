export interface ButtonProps {
  text: string;
  path: string;
}

export default function Button({
  text,
  path,
}: ButtonProps): React.ReactElement<ButtonProps> {
  return (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center h-16 px-8 leading-4 sm:leading-[1.125rem] text-base sm:text-lg tracking-[0.125rem] sm:tracking-[0.125rem] md:tracking-[0.25rem] bg-athensGrey text-thunder rounded-full uppercase no-underline transition-all duration-out ease-out shadow-[_-0.5rem_-0.5rem_2rem_0_#FFFFFF,_0.5rem_0.5rem_1rem_0_rgba(38,35,36,0.50)] hover:shadow-[_-0.25rem_-0.25rem_0.5rem_0_rgba(255,255,255,0.75),_0.25rem_0.25rem_1rem_0_rgba(38,35,36,0.25)] hover:transition-all hover:duration-in hover:ease-in"
    >
      {text}
    </a>
  );
}
