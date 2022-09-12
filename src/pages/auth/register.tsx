import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import Input from '../../components/Input';
import AuthWrapper from '../../components/pages/auth/AuthWrapper';
import { CTA } from '../../core';

const Register: NextPage = () => {
  const [formState, setFormState] = useState({
    email: '',
    name: '',
    password: '',
    repassword: '',
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
        <h1 className="font-bold text-center">Register an account</h1>
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
            displayName="Your Name"
            id="name"
            name="name"
            type="text"
            placeholder="Thor Odinson"
            value={formState.name}
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
          <Input
            displayName="Renter Password"
            id="repassword"
            name="repassword"
            type="password"
            placeholder="••••••••"
            value={formState.repassword}
            onChange={handleChange}
            required
          />
          <div className="mt-2">
            <CTA onClick={handleSubmit}>Submit</CTA>
          </div>
          <div className="text-center text-sm">
            Already have account?{' '}
            <Link href="/auth/login">
              <a
                href="#"
                className="hover:underline font-medium text-blue-500 focus:outline-none focus:underline focus:text-slate-50"
              >
                Login Now
              </a>
            </Link>
          </div>
        </form>
      </>
    </AuthWrapper>
  );
};

export default Register;
