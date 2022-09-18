import { FC, ReactElement } from 'react';

interface CTAProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
}

const CTA: FC<CTAProps> = ({ children, onClick, disabled }): ReactElement => {
  return (
    <button
      className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400/80"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CTA;
