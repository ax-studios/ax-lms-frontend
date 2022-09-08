import { NextPage } from 'next';
import { ChangeEvent, ReactElement, useState } from 'react';
import Input from '../../components/Input';
import Logo from '../../core/components/logo';

const Login: NextPage = (): ReactElement => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-blend-multiply bg-no-repeat bg-center bg-cover bg-[url(/login/background.jpg)] bg-opacity-60 bg-slate-700 text-slate-50">
      <div className="h-screen flex justify-center items-center py-8 p-6">
        <div className="max-w-md w-full justify-center items-center flex-col flex mx-auto bg-slate-900/30 backdrop-blur rounded-xl border border-slate-50/20 overflow-hidden shadow-lg shadow-black">
          <a
            href="/s"
            className="font-semibold text-2xl items-center flex my-6 decoration-inherit"
          >
            <div className="w-8 h-8 mr-2">
              <Logo />
            </div>
            Ax Studios
          </a>

          <div className="bg-slate-900 max-w-md shadow-[0px_0px_10px_10px_#ffffff30] rounded-xl w-full p-8">
            <h1 className="font-bold text-center">Sign in to your account</h1>
            <form action="#" className="my-4">
              <Input
                displayName="Your Email"
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
              <div className="mt-4">
                <Input
                  displayName="Password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formState.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="my-4 justify-end items-center flex">
                <a
                  href="#"
                  className="hover:underline font-medium text-sm text-blue-500"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
