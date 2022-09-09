import Link from 'next/link';
import { FC, ReactElement } from 'react';
import Logo from '../../core/components/logo';

interface AuthWrapperProps {
  children: ReactElement;
}

const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  return (
    <div className="bg-blend-multiply bg-no-repeat bg-center bg-cover bg-[url(/auth/background.jpg)] bg-opacity-60 bg-slate-700 text-slate-50">
      <div className="h-screen flex justify-center items-center py-8 p-6">
        <div className="max-w-md w-full justify-center items-center flex-col flex mx-auto bg-slate-900/30 backdrop-blur rounded-xl border border-slate-50/20 overflow-hidden shadow-lg shadow-black">
          <Link href="/">
            <a className="font-semibold text-2xl items-center flex my-6 decoration-inherit focus:outline-none focus:text-blue-500">
              <div className="w-8 h-8 mr-2">
                <Logo />
              </div>
              Ax Studios
            </a>
          </Link>
          <div className="bg-slate-900/80 max-w-md shadow-[0px_0px_10px_10px_#ffffff30] rounded-xl w-full p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
