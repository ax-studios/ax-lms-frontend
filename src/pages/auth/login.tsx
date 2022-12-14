import { Button, TextField } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import PasswordInput from '@/components/core/PasswordInput';
import AuthWrapper from '@/components/pages/auth/AuthWrapper';

const Login: NextPage = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="my-4 flex flex-col gap-4"
        >
          <TextField
            id="email"
            label="Email"
            variant="filled"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <PasswordInput
            id="password"
            label="Password"
            name="password"
            variant="filled"
            value={values.password}
            handleChange={handleChange}
          />
          <div className="flex items-center justify-end">
            <Link
              className="text-sm font-medium text-primary hover:underline focus:text-base-content focus:underline focus:outline-none"
              href="/auth/forgotPassword"
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            onClick={() => handleSubmit}
            className="bg-primary"
            variant="contained"
          >
            Submit
          </Button>
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
            <Button
              variant="outlined"
              onClick={() =>
                setValues({
                  email: 'johnDoe@gmail.com',
                  password: 'strongPass@1712',
                  showPassword: false,
                })
              }
              size="small"
            >
              Teacher Login
            </Button>
            <Button
              variant="outlined"
              onClick={() =>
                setValues({
                  email: 'prakashchandra3786@gmail.com',
                  password: 'strongPass@1712',
                  showPassword: false,
                })
              }
              size="small"
            >
              Student Login
            </Button>
          </div>
        </div>
      </>
    </AuthWrapper>
  );
};

export default Login;
