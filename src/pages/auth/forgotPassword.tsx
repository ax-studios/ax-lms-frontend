import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { CTA, Input } from '../../components/core';
import Link from 'next/link';
import AuthWrapper from '../../components/pages/auth/AuthWrapper';
import { EMAIL_REGEX, OTP_REGEX } from '../../lib/config';

interface InputValue {
  value: null | string;
  error: null | string;
}

interface formStateInterface {
  email: InputValue;
  OTP: InputValue;
  password: InputValue;
  repassword: InputValue;
}

const ForgotPassword: NextPage = () => {
  const [formState, setFormState] = useState<formStateInterface>({
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
    setFormState({
      ...formState,
      [e.target.name]: { error: null, value: e.target.value },
    });
  };
  const handleGetOTP = (): void => {
    if (formState.email.value?.match(EMAIL_REGEX) != null) {
      setFormState({ ...formState, OTP: { ...formState.OTP, value: '' } });
    } else {
      setFormState({
        ...formState,
        email: { ...formState.email, error: 'Enter Valid Email' },
      });
    }
  };
  const handleVerifyOTP = (): void => {
    if (formState.OTP.value?.match(OTP_REGEX) != null) {
      setFormState({
        ...formState,
        password: { ...formState.password, value: '' },
        repassword: { ...formState.repassword, value: '' },
      });
    } else {
      setFormState({
        ...formState,
        OTP: { ...formState.OTP, error: 'Enter Valid OTP' },
      });
    }
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
        <h1 className="text-center font-bold">Forgot Password</h1>
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
            value={formState.email.value !== null ? formState.email.value : ''}
            onChange={handleChange}
            required
            error={formState.email.error}
            disabled={formState.OTP.value !== null}
          />
          <CTA onClick={handleGetOTP} disabled={formState.OTP.value !== null}>
            Get OTP
          </CTA>
          {formState.OTP.value !== null && (
            <>
              <Input
                displayName="OTP"
                id="otp"
                name="OTP"
                type="text"
                placeholder="123456"
                value={formState.OTP.value}
                onChange={handleChange}
                required
                error={formState.OTP.error}
                disabled={
                  formState.password.value !== null &&
                  formState.repassword.value !== null
                }
              />
              <CTA
                onClick={handleVerifyOTP}
                disabled={
                  formState.password.value !== null &&
                  formState.repassword.value !== null
                }
              >
                Verify OTP
              </CTA>
            </>
          )}
          {formState.password.value !== null &&
            formState.repassword.value !== null && (
              <>
                <Input
                  displayName="Password"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formState.password.value}
                  onChange={handleChange}
                  required
                  error={formState.password.error}
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
