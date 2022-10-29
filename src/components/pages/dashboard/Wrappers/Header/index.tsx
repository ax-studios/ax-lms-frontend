import Image from 'next/image';
import { FC, useContext, useState } from 'react';
import { UserContext } from '../../../../../data/userData';
import SearchIcon from '../../../../../icons/SearchIcon';
import { SettingsContext } from '../../../../../lib/context/settings';

const Header: FC = () => {
  const [hasFocus, setHasFocus] = useState(false);
  const userData = useContext(UserContext);
  const { toggleDrawer } = useContext(SettingsContext);
  return (
    <div className="sticky top-0 z-[9999] flex h-20 items-center justify-start gap-2 bg-base-300 px-4 text-2xl font-bold lg:hidden">
      <div
        className={`input input-bordered relative flex w-full items-center overflow-hidden rounded-full px-1 pl-2 ${
          hasFocus ? 'outline outline-primary' : ''
        }`}
      >
        <span className="w-8">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="input h-full w-full bg-transparent px-0 text-lg focus:outline-none"
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />

        <button
          onClick={toggleDrawer}
          className="relative h-8 w-8 shrink-0 rounded-full transition-all duration-500"
        >
          <Image src={userData.profileURL} alt="Banner" fill />
        </button>

        {/* <span className="relative block h-7 shrink-0">
          <BellIcon />
          <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-error" />
        </span> */}
      </div>
    </div>
  );
};

export default Header;
