import { FC, ReactElement } from 'react';

interface CTAProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'filled' | 'outline';
}

const CTA: FC<CTAProps> = ({
  children,
  onClick,
  disabled,
  type = 'filled',
}): ReactElement => {
  return (
    <button
      className={`btn btn-primary ${type === 'outline' ? 'btn-outline' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CTA;
