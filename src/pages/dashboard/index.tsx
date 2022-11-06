import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const Dashboard: FC = () => {
  const router = useRouter();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/space-before-function-paren
    const fun = async (): Promise<any> => {
      await router.replace('/dashboard/home');
    };
    void fun();
  }, []);
  return <></>;
};

export default Dashboard;
