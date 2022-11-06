import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { Logo } from '../../../core';

interface AuthWrapperProps {
  children: ReactElement;
}

const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  return (
    <div className="select-none bg-base-300 bg-opacity-60 bg-[url(/images/auth/background.jpg)] bg-cover bg-center bg-no-repeat text-base-content bg-blend-multiply">
      <div className="flex min-h-screen items-center justify-center p-4 py-8 md:p-6">
        <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary/40 bg-base-300/30 shadow-lg shadow-base-300 backdrop-blur">
          <Link href="/">
            <span className="my-6 flex items-center text-2xl font-semibold decoration-inherit focus:text-primary focus:outline-none">
              <div className="mr-2 h-8 w-8">
                <Logo />
              </div>
              Ax Studios
            </span>
          </Link>
          <div className="w-full max-w-md rounded-xl rounded-t-3xl bg-base-100 p-8 px-5 md:px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
