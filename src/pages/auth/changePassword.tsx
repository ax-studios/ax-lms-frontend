import { Button, TextField } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import PasswordInput from '@/components/core/PasswordInput';
import AuthWrapper from '@/components/pages/auth/AuthWrapper';

interface InputValue {
  value: string;
  error: string;
}

interface valuesInterface {
  email: InputValue;
  password: InputValue;
  repassword: InputValue;
}

const ChangePassword: NextPage = () => {
  const [values, setValues] = useState<valuesInterface>({
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
    setValues({
      ...values,
      [e.target.name]: { error: null, value: e.target.value },
    });
  };

  const handleChangePassword = (): void => {
    if (values.password.value !== values.repassword.value) {
      setValues({
        ...values,
        repassword: {
          ...values.repassword,
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
          className="my-4 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            id="email"
            label="Email"
            variant="filled"
            name="email"
            type="email"
            value={values.email.value}
            onChange={handleChange}
            required
            disabled
          />
          <PasswordInput
            id="password"
            label="Password"
            name="password"
            variant="filled"
            value={values.password.value}
            handleChange={handleChange}
          />
          <PasswordInput
            id="password"
            label="Renter Password"
            name="repassword"
            variant="filled"
            value={values.repassword.value}
            handleChange={handleChange}
          />
          <Button
            className="bg-primary"
            variant="contained"
            onClick={handleChangePassword}
          >
            Change Password
          </Button>

          <div className="text-center text-sm">
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

export default ChangePassword;
