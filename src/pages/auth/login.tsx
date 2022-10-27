import { NextPage } from 'next';
import { ChangeEvent, FormEvent, useState } from 'react';
import { CTA, Input } from '../../components/core';
import Link from '../../components/core/Link';
import AuthWrapper from '../../components/pages/auth/AuthWrapper';
const Login: NextPage = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  // eslint-disable-next-line @typescript-eslint/space-before-function-paren
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <AuthWrapper>
      <>
        <h1 className="text-center font-bold">Log in to your account</h1>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
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
          <div className="flex items-center justify-end">
            <Link
              className="text-sm font-medium text-primary hover:underline focus:text-base-content focus:underline focus:outline-none"
              href="/auth/forgotPassword"
            >
              Forgot Password?
            </Link>
          </div>
          <CTA onClick={() => handleSubmit}>Submit</CTA>
          <div className="text-center text-sm">
            Need account?{' '}
            <Link
              className="font-medium text-primary hover:underline focus:text-base-content focus:underline focus:outline-none"
              href="/auth/register"
            >
              Create account now
            </Link>
          </div>
        </form>
        <div className="mt-3 flex flex-col items-center gap-2 rounded-lg border-2 border-base-content/40 bg-base-300/30 py-2 pb-4 text-lg font-bold backdrop-blur">
          <p>Demo Creadintials: </p>
          <div className="flex items-center justify-center gap-5 ">
            <CTA
              onClick={() =>
                setFormState({
                  email: 'johnDoe@gmail.com',
                  password: 'strongPass@1712',
                })
              }
              style="outline"
            >
              Teacher Login
            </CTA>
            <CTA
              onClick={() =>
                setFormState({
                  email: 'prakashchandra3786@gmail.com',
                  password: 'strongPass@1712',
                })
              }
              style="outline"
            >
              Student Login
            </CTA>
          </div>
        </div>
      </>
    </AuthWrapper>
  );
};

export default Login;
