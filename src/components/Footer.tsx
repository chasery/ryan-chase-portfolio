import SocialMedia from './SocialMedia';

export default function Footer(): React.ReactElement {
  return (
    <footer className="flex flex-col flex-grow justify-end ml-0 sm:ml-0.5 p-0 sm:p-0 sm:px-8 sm:pb-8 md:p-0 md:pb-16 lg:p-0 lg:pb-32 transition-all duration-out ease-out">
      <SocialMedia />
    </footer>
  );
}
