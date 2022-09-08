import { ChangeEvent, HTMLInputTypeAttribute, ReactElement } from 'react';

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
}

const Input = ({
  id,
  name,
  type,
  placeholder,
  required,
  disabled,
  onChange,
  displayName,
}: InputProps): ReactElement => {
  return (
    <>
      <label htmlFor={id} className="text-slate font-medium text-sm block mb-2">
        {displayName}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="bg-slate-50/10 text-medium p-3 border border-slate-50/10 rounded-lg w-full block focus:ring-2 outline-none  focus:ring-blue-500 "
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
