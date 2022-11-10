import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext, useState } from 'react';
import { UserContext } from '@/data/userData';
import SearchIcon from '@/icons/SearchIcon';

const Header: FC = () => {
  const [hasFocus, setHasFocus] = useState(false);
  const userData = useContext(UserContext);
  return (
    <div
      id="mob-header"
      className="flex h-20 items-center justify-start gap-2 bg-base-300 px-4 text-2xl font-bold sm:hidden"
    >
      <div
        className={`input-bordered input relative flex w-full items-center overflow-hidden rounded-full px-1 pl-2 ${
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

        <Link
          href={`/dashboard/user/${userData.enrollmentID}`}
          className="relative h-8 w-8 shrink-0 rounded-full transition-all duration-500"
        >
          <Image src={userData.profileURL} alt="Banner" fill />
        </Link>
      </div>
    </div>
  );
};

export default Header;
