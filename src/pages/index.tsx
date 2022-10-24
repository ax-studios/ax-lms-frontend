import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    push('/landing');
  }, [push]);

  return <div></div>;
};

export default Home;
