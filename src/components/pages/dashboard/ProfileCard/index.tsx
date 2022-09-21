import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext } from 'react';
import { UserContext } from '../../../../data/userData';
import { SettingsContext } from '../../../../lib/context/settings';

const ProfileCard: FC = () => {
  const userData = useContext(UserContext);
  const { drawerCollapsed } = useContext(SettingsContext);
  return (
    <div className="sticky top-0 z-10 w-full bg-base-100">
      <div
        className={`relative mx-2 flex shrink-0 flex-col items-center  overflow-hidden rounded-lg border-primary  text-center text-xl transition-all duration-200 ${
          drawerCollapsed
            ? 'border-0 p-0 shadow-none'
            : 'mb-3 border-2 bg-base-300/50 p-2 shadow-xl'
        }`}
      >
        <div
          className={`absolute top-0 w-full border-transparent border-b-primary/30 transition-all duration-500 ${
            drawerCollapsed ? 'h-0 border-0' : 'h-24 border'
          }`}
        >
          <Image src={userData.banner} alt="Banner" layout="fill" />
        </div>

        <div
          className={`relative overflow-hidden rounded-full border border-primary transition-all duration-500 ${
            drawerCollapsed ? 'my-4 h-12 w-12' : 'mt-10 h-24 w-24'
          }`}
        >
          <Image src={userData.profileURL} alt="Banner" layout="fill" />
        </div>
        <div
          className={`flex  origin-top-left flex-col items-center gap-1 overflow-hidden transition-opacity duration-300 ${
            drawerCollapsed
              ? 'h-0 w-0 scale-0 opacity-0'
              : 'my-2 scale-100 pt-2 opacity-100 '
          }`}
        >
          <Link href={`/dashboard/user/${userData.enrollmentID}`}>
            <a className="font-bold  transition-all duration-200 hover:text-primary">
              {userData.name}
            </a>
          </Link>
          <span className="text-sm">{userData.enrollmentID}</span>
          <span className="h-10 overflow-hidden px-4 text-sm">
            {userData.branch}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
