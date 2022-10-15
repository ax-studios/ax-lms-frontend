import { ButtonHTMLAttributes, FC, ReactElement } from 'react';

interface CTAProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  style?: 'filled' | 'outline';
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const CTA: FC<CTAProps> = ({
  children,
  onClick,
  disabled,
  type,
  style = 'filled',
}): ReactElement => {
  return (
    <button
      type={type}
      className={`btn btn-primary ${style === 'outline' ? 'btn-outline' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CTA;
