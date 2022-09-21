import { FC } from 'react';
import { ArrowIcon } from '../../../../icons';

interface Props {
  left: string;
  toggle: () => void;
}

const ToggleCollapsed: FC<Props> = ({ left, toggle }) => {
  return (
    <button
      className="absolute bottom-8 z-[999] w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full  border border-primary/30 bg-base-200 p-1 text-primary transition-all duration-200 hover:shadow hover:shadow-primary active:scale-95 active:shadow-lg"
      style={{
        left,
      }}
      onClick={toggle}
    >
      <span>
        <ArrowIcon />
      </span>
    </button>
  );
};

export default ToggleCollapsed;
