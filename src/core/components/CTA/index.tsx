import { FC, ReactElement } from 'react';

interface CTAProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
}

const CTA: FC<CTAProps> = ({ children, onClick, disabled }): ReactElement => {
  return (
    <button
      className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center bg-blue-600 disabled:bg-blue-400/80 hover:bg-blue-700 focus:ring-blue-800 w-full disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CTA;
