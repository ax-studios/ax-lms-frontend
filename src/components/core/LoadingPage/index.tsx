import { FC } from 'react';
import { Logo } from '../';

const LoadingPage: FC<{ routeState: boolean }> = ({ routeState }) => {
  return (
    <div className="absolute top-0 left-0 z-[9999] flex h-screen w-screen animate-scale items-center justify-center">
      <div className="card w-96 p-5 text-primary backdrop-blur">
        <div className="animate-pulse">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
