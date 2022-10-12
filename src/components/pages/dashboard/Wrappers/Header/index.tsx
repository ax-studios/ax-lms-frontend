import { FC } from 'react';
import { BellIcon } from '../../../../../icons';
import SearchIcon from '../../../../../icons/SearchIcon';

const Header: FC = () => {
  return (
    <div className="sticky top-0 flex h-20 items-center justify-start gap-2 bg-base-300 px-4 text-2xl font-bold">
      <div className="relative flex w-full items-center justify-between gap-4 ">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered h-14 w-full max-w-xs rounded-full bg-base-200 pl-10 text-lg outline-none transition-all duration-300 focus:max-w-md focus:outline-none"
        />
        <span className="absolute left-4 top-1/2 w-5 -translate-y-1/2">
          <SearchIcon />
        </span>
        <span className="relative block w-6 shrink-0">
          <BellIcon />
          <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-red-500" />
        </span>
      </div>
    </div>
  );
};

export default Header;
