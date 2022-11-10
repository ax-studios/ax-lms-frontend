import { FC } from 'react';
import { ArrowIcon } from '../../../../icons';

interface Props {
  className: string;
  toggle: () => void;
}

const ToggleCollapsed: FC<Props> = ({ toggle, className }) => {
  return (
    <button
      className={`absolute bottom-8 z-[999] aspect-square w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full  border border-primary/30 bg-base-200 p-1 text-primary transition-all duration-200 hover:shadow-[0_0_5px_1px_#000] hover:shadow-primary/50 active:scale-95 active:shadow-lg  ${className}`}
      onClick={toggle}
    >
      <span className="aspect-square h-6">
        <ArrowIcon />
      </span>
    </button>
  );
};

export default ToggleCollapsed;
