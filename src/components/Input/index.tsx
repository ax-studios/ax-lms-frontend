import { ChangeEvent, FC, HTMLInputTypeAttribute, ReactElement } from 'react';

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
  error,
}): ReactElement => {
  return (
    <div>
      <label htmlFor={id} className="text-slate font-medium text-sm block mb-2">
        {displayName}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="bg-slate-50/10 text-medium p-3 border border-slate-50/10 rounded-lg w-full block focus:ring-2 outline-none  focus:ring-blue-500"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={onChange}
      />
      {error !== null && (
        <span className="text-red-500 mt-2 text-sm">{error}</span>
      )}
    </div>
  );
};

export default Input;
