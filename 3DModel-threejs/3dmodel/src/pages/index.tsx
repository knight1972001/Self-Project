import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Desk = dynamic(() => import('../../components/desk'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>3D model</title>
      </Head>
      <Desk />
    </div>
  );
};

export default Home;