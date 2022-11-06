import {
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
} from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import PasswordInput from '../../components/core/PasswordInput';
// import { Input } from '../../components/core';
import AuthWrapper from '../../components/pages/auth/AuthWrapper';
import { EMAIL_REGEX, OTP_REGEX } from '../../lib/config';

interface InputValue {
  value: null | string;
  error: null | string;
}

interface valuesInterface {
  email: InputValue;
  OTP: InputValue;
  password: InputValue;
  repassword: InputValue;
}

const ForgotPassword: NextPage = () => {
  const [values, setValues] = useState<valuesInterface>({
    email: {
      value: '',
      error: null,
    },
    OTP: {
      value: null,
      error: null,
    },
    password: {
      value: null,
      error: null,
    },
    repassword: {
      value: null,
      error: null,
    },
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.target.name]: { error: null, value: e.target.value },
    });
  };
  const handleGetOTP = (): void => {
    if (values.email.value?.match(EMAIL_REGEX) != null) {
      setValues({ ...values, OTP: { ...values.OTP, value: '' } });
    } else {
      setValues({
        ...values,
        email: { ...values.email, error: 'Enter Valid Email' },
      });
    }
  };
  const handleVerifyOTP = (): void => {
    if (values.OTP.value?.match(OTP_REGEX) != null) {
      setValues({
        ...values,
        password: { ...values.password, value: '' },
        repassword: { ...values.repassword, value: '' },
      });
    } else {
      setValues({
        ...values,
        OTP: { ...values.OTP, error: 'Enter Valid OTP' },
      });
    }
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
        <h1 className="text-center font-bold">Forgot Password</h1>
        <form
          action="#"
          className="my-4 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormControl
            {...(values.email.error !== null ? { error: true } : {})}
            variant="filled"
          >
            <InputLabel htmlFor="email">Your Email</InputLabel>
            <FilledInput
              id="email"
              name="email"
              type="email"
              value={values.email.value !== null ? values.email.value : ''}
              onChange={handleChange}
              required
              disabled={values.OTP.value !== null}
              aria-describedby="email-error"
            />
            <FormHelperText id="email-error">
              {values.email.error !== null ? values.email.error : ''}
            </FormHelperText>
          </FormControl>
          <Button
            className="bg-primary"
            variant="contained"
            onClick={handleGetOTP}
            disabled={values.OTP.value !== null}
          >
            Get OTP
          </Button>
          {values.OTP.value !== null && (
            <>
              <FormControl
                {...(values.OTP.error !== null ? { error: true } : {})}
                variant="filled"
              >
                <InputLabel htmlFor="email">OTP</InputLabel>
                <FilledInput
                  id="otp"
                  name="OTP"
                  type="text"
                  placeholder="123456"
                  value={values.OTP.value}
                  onChange={handleChange}
                  required
                  disabled={
                    values.password.value !== null &&
                    values.repassword.value !== null
                  }
                  aria-describedby="email-error"
                />
                <FormHelperText id="email-error">
                  {values.OTP.error !== null ? values.OTP.error : ''}
                </FormHelperText>
              </FormControl>
              <Button
                className="bg-primary"
                variant="contained"
                onClick={handleVerifyOTP}
                disabled={
                  values.password.value !== null &&
                  values.repassword.value !== null
                }
              >
                Verify OTP
              </Button>
            </>
          )}
          {values.password.value !== null && values.repassword.value !== null && (
            <>
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
            </>
          )}
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

export default ForgotPassword;
