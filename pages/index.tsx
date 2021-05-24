import { socialMedia } from 'data';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <Header subHeading={`Full Stack Developer`} />
      <Footer data={data} />
    </>
  );
}
