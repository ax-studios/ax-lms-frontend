import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import {
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';

interface Props {
  id: string;
  label: string;
  variant?: 'standard' | 'outlined' | 'filled';
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: FC<Props> = ({
  id,
  name,
  value,
  handleChange,
  label,
  variant = 'outlined',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
  };

  const Component =
    variant === 'filled'
      ? FilledInput
      : variant === 'standard'
      ? Input
      : OutlinedInput;

  return (
    <FormControl variant={variant} required>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Component
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        type={showPassword ? 'text' : 'password'}
        {...(variant === 'outlined' ? { label } : {})}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((p) => !p)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOffOutlined />
              ) : (
                <VisibilityOutlined />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
