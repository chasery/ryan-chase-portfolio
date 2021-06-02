import dynamic from 'next/dynamic';
import { socialMedia } from 'data';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CanvasLoader = dynamic(() => import('../components/CanvasLoader'), {
  // loading: () => <p>...</p>,
  ssr: false,
});

export const getStaticProps = async () => {
  return {
    props: {
      data: socialMedia,
    },
  };
};

export default function Home({ data }) {
  return (
    <>
      <CanvasLoader />
      <Header subHeading={`Full Stack Developer`} />
      <Footer data={data} />
    </>
  );
}
