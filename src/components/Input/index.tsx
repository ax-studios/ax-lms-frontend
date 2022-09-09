import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  ReactElement,
  useState,
} from 'react';
import CloseEye from '../../icons/CloseEye';
import OpenEye from '../../icons/OpenEye';
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
      <label className="text-slate font-medium text-sm block relative">
        {displayName}
        <input
          type={inputType}
          id={id}
          name={name}
          className="bg-slate-50/10 text-medium p-3 border border-slate-50/10 rounded-lg w-full block focus:ring-2 outline-none  focus:ring-blue-500 mt-2"
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
            className="cursor-pointer absolute right-2 top-1/2"
          >
            <IconWrapper>
              {inputType === 'password' ? <OpenEye /> : <CloseEye />}
            </IconWrapper>
          </div>
        )}
      </label>
      {error !== null && (
        <span className="text-red-500 mt-2 text-sm">{error}</span>
      )}
    </div>
  );
};

export default Input;
