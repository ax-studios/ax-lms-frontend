import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  ReactElement,
  useState,
} from 'react';
import { CloseEyeIcon, OpenEyeIcon } from '../../../icons';
import IconWrapper from '../IconWrapper';

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
}): ReactElement => {
  const [inputType, setInputType] = useState(type);
  const handleShow = (): void => {
    if (type === 'password') {
      setInputType((p) => (p === 'password' ? 'text' : 'password'));
    }
  };
  return (
    <div>
      <label className="text-slate relative block text-sm font-medium">
        {displayName}
        <input
          type={inputType}
          id={id}
          name={name}
          className="text-medium mt-2 block w-full rounded-lg border border-slate-50/10 bg-slate-50/10 p-3 outline-none  focus:ring-2 focus:ring-blue-500"
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
            <IconWrapper>
              {inputType === 'password' ? <OpenEyeIcon /> : <CloseEyeIcon />}
            </IconWrapper>
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
