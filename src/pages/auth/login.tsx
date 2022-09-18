import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { CTA, Input } from '../../components/core';
import AuthWrapper from '../../components/pages/auth/AuthWrapper';

const Login: NextPage = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (): void => {
    console.log('submit');
  };
  return (
    <AuthWrapper>
      <>
        <h1 className="text-center font-bold">Log in to your account</h1>
        <form action="#" className="flex flex-col gap-4">
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
            <Link href="/auth/forgotPassword">
              <a className="text-sm font-medium text-blue-500 hover:underline focus:text-slate-50 focus:underline focus:outline-none">
                Forgot Password?
              </a>
            </Link>
          </div>
          <CTA onClick={handleSubmit}>Submit</CTA>
          <div className="text-center text-sm">
            Need account?{' '}
            <Link href="/auth/register">
              <a className="font-medium text-blue-500 hover:underline focus:text-slate-50 focus:underline focus:outline-none">
                Create account now
              </a>
            </Link>
          </div>
        </form>
      </>
    </AuthWrapper>
  );
};

export default Login;
