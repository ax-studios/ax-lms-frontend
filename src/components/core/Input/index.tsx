import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  ReactElement,
  useState,
} from 'react';
import { CloseEyeIcon, OpenEyeIcon } from '../../../icons';

interface InputProps {
  id: string;
  displayName: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: null | string;
  className?: string;
}

const Input: FC<InputProps> = ({
  id,
  name,
  type,
  placeholder,
  required,
  disabled,
  onChange,
  displayName,
  value,
  error,
  className,
}): ReactElement => {
  const [inputType, setInputType] = useState(type);
  const handleShow = (): void => {
    if (type === 'password') {
      setInputType((p) => (p === 'password' ? 'text' : 'password'));
    }
  };
  return (
    <div>
      <label className="relative block text-sm font-medium">
        {displayName}
        <input
          type={inputType}
          id={id}
          name={name}
          className={`text-medium input mt-2 block w-full ${
            typeof className !== 'undefined' ? className : ''
          }`}
          placeholder={
            type === 'password'
              ? inputType === 'password'
                ? placeholder
                : 'StrongPass@1712'
              : placeholder
          }
          required={required}
          disabled={disabled}
          onChange={onChange}
          value={value}
        />
        {type === 'password' && (
          <div
            onClick={handleShow}
            className="absolute right-2 top-1/2 w-6 cursor-pointer"
          >
            {inputType === 'password' ? <OpenEyeIcon /> : <CloseEyeIcon />}
          </div>
        )}
      </label>
      {error !== null && (
        <span className="mt-2 text-sm text-red-500">{error}</span>
      )}
    </div>
  );
};

export default Input;
