import { ReactElement } from 'react';
import Logo from '../../core/components/logo';

const login = (): ReactElement => {
  return (
    <div className="bg-blend-multiply bg-no-repeat bg-center bg-cover bg-[url(/login/background.jpg)] bg-opacity-60 bg-slate-700 text-slate-50">
      <div className="h-screen flex justify-center items-center py-8 p-6">
        <div className="max-w-md w-full justify-center items-center flex-col flex mx-auto bg-slate-50/5 backdrop-blur rounded-lg border border-slate-50/20 overflow-hidden">
          <a
            href="/s"
            className="font-semibold text-2xl items-center flex my-6 decoration-inherit"
          >
            <div className="w-8 h-8 mr-2">
              <Logo />
            </div>
            Ax Studios
          </a>

          <div className="bg-slate-900 max-w-md shadow-[0px_0px_10px_10px_#ffffff30] rounded-md w-full p-8">
            <h1 className="font-bold text-center">Sign in to your account</h1>
            <form action="#" className="my-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-slate font-medium text-sm block mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-slate-50/10 text-medium p-3 border border-slate-50/10 rounded-lg w-full block focus:ring-2 outline-none  focus:ring-blue-500 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-slate font-medium text-sm block mb-2 mt-5"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-slate-50/10 text-medium p-3 border border-slate-50/10 rounded-lg w-full block focus:ring-2 outline-none  focus:ring-blue-500 "
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="my-4 justify-between items-center flex">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 rounded border  focus:ring-3 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
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

export default login;
