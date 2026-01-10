import Header from '../components/Header';
import Footer from '../components/Footer';
import { pages } from 'utils/constants';

export default function Home(): React.ReactElement {
  const { title, subtitle } = pages.home;

  return (
    <>
      <title>Ryan Chase / Portfolio</title>
      <Header title={title} subtitle={subtitle} />
      <Footer />
    </>
  );
}
