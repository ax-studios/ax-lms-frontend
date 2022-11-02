import { FC } from 'react';

const LoadingPage: FC<{ routeState: boolean }> = ({ routeState }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-[9999] flex w-screen animate-scale items-center justify-center bg-primary py-1 font-bold text-base-300 transition-all duration-300 ${
        routeState ? '' : '-translate-y-full'
      }`}
    >
      Loading...
    </div>
  );
};

export default LoadingPage;
