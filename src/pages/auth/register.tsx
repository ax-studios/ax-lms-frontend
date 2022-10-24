import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { CTA, Input } from '../../components/core';
import AuthWrapper from '../../components/pages/auth/AuthWrapper';

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
        <h1 className="text-center font-bold">Register an account</h1>
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
          <CTA onClick={handleSubmit}>Submit</CTA>
          <div className="text-center text-sm">
            Already have account?{' '}
            <Link href="/auth/login">
              <a
                href="#"
                className="font-medium text-primary hover:underline focus:text-base-content focus:underline focus:outline-none"
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
