import { Button, TextField } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import PasswordInput from '@/components/core/PasswordInput';
import AuthWrapper from '@/components/pages/auth/AuthWrapper';

const Register: NextPage = () => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
    repassword: '',
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (): void => {
    console.log('submit');
  };
  return (
    <AuthWrapper>
      <>
        <h1 className="text-center font-bold">Register an account</h1>
        <form action="#" className="my-4 flex flex-col gap-4">
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
          <TextField
            id="name"
            name="name"
            type="text"
            label="Your Name"
            variant="filled"
            value={values.name}
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
          <PasswordInput
            id="password"
            label="Renter Password"
            name="repassword"
            variant="filled"
            value={values.repassword}
            handleChange={handleChange}
          />

          <Button
            className="bg-primary"
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <div className="text-center text-sm">
            Already have account?{' '}
            <Link
              className="font-medium text-primary hover:underline focus:text-base-content focus:underline focus:outline-none"
              href="/auth/login"
            >
              Login Now
            </Link>
          </div>
        </form>
      </>
    </AuthWrapper>
  );
};

export default Register;
