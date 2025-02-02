import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { pages } from 'utils/constants';

const CanvasLoader = dynamic(
  () => import('../components/Canvas/CanvasLoader'),
  {
    // loading: () => <p>...</p>,
    ssr: false,
  }
);

export default function Home(): React.ReactElement {
  const { title, subtitle } = pages.home;

  return (
    <>
      <CanvasLoader />
      <Header title={title} subtitle={subtitle} />
      <Footer />
    </>
  );
}
