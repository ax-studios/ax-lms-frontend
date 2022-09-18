import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { CTA, Input } from '../../components/core';
import AuthWrapper from '../../components/pages/auth/AuthWrapper';

interface InputValue {
  value: string;
  error: string;
}

interface formStateInterface {
  email: InputValue;
  password: InputValue;
  repassword: InputValue;
}

const ChangePassword: NextPage = () => {
  const [formState, setFormState] = useState<formStateInterface>({
    email: {
      value: 'prakashchandra3786@gmail.com',
      error: '',
    },
    password: {
      value: '',
      error: '',
    },
    repassword: {
      value: '',
      error: '',
    },
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({
      ...formState,
      [e.target.name]: { error: null, value: e.target.value },
    });
  };

  const handleChangePassword = (): void => {
    if (formState.password.value !== formState.repassword.value) {
      setFormState({
        ...formState,
        repassword: {
          ...formState.repassword,
          error: "Both password doesn't matches",
        },
      });
    }
    console.log('ok');
  };
  return (
    <AuthWrapper>
      <>
        <h1 className="text-center font-bold">Change Password</h1>
        <form
          action="#"
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            displayName="Your Email"
            id="email"
            name="email"
            type="email"
            placeholder="name@company.com"
            value={formState.email.value}
            onChange={handleChange}
            disabled
          />
          <Input
            displayName="Password"
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formState.password.value}
            onChange={handleChange}
            required
          />
          <Input
            displayName="Renter Password"
            id="repassword"
            name="repassword"
            type="password"
            placeholder="••••••••"
            value={formState.repassword.value}
            onChange={handleChange}
            required
            error={formState.repassword.error}
          />
          <CTA onClick={handleChangePassword}>Change Password</CTA>

          <div className="text-center text-sm">
            <Link href="/auth/login">
              <a
                href="#"
                className="font-medium text-blue-500 hover:underline focus:text-slate-50 focus:underline focus:outline-none"
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

export default ChangePassword;
