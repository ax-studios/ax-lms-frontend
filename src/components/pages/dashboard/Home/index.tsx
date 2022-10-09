import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Card: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="rounded-2xl border-2 border-base-content/10 bg-gradient-to-br from-base-content/20 via-base-content/10 to-white/0 shadow-lg transition-all duration-200 hover:border-base-content/50 hover:shadow-xl">
        {children}
      </div>
    </>
  );
};

export default Card;
