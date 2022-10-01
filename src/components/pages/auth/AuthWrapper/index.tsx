import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { Logo } from '../../../core';

interface AuthWrapperProps {
  children: ReactElement;
}

const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  return (
    <div className="select-none bg-base-300 bg-opacity-60 bg-[url(/images/auth/background.jpg)] bg-cover bg-center bg-no-repeat text-base-content bg-blend-multiply">
      <div className="flex min-h-screen items-center justify-center p-6 py-8">
        <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary/40 bg-base-300/30 shadow-lg shadow-base-300 backdrop-blur">
          <Link href="/">
            <a className="my-6 flex items-center text-2xl font-semibold decoration-inherit focus:text-primary focus:outline-none">
              <div className="mr-2 h-8 w-8">
                <Logo />
              </div>
              Ax Studios
            </a>
          </Link>
          <div className="w-full max-w-md rounded-xl bg-base-300/80 p-8 shadow-[0px_0px_10px_10px_#ffffff30]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
