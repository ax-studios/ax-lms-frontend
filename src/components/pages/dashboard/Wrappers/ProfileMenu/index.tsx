import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../../data/userData';
import ExpandIcon from '../../../../../icons/Sidebar Icons/ExpandIcon';
import LogoutIcon from '../../../../../icons/Sidebar Icons/LogoutIcon';
import SettingsIcon from '../../../../../icons/Sidebar Icons/SettingsIcon';
import { SettingsContext } from '../../../../../lib/context/settings';

const ProfileMenu: FC<{ settingModalToggle: () => void }> = ({
  settingModalToggle,
}) => {
  const userData = useContext(UserContext);
  const { drawerCollapsed, toggleDrawer } = useContext(SettingsContext);
  const [profileMenuOpened, setProfileMenuOpened] = useState(false);

  useEffect(() => {
    const profileMenuClick = (e: MouseEvent): void => {
      if (profileMenuOpened) {
        if (
          (e.target as HTMLElement).closest('#profileMenu') === null ||
          (e.target as HTMLElement).closest('#profileMenu') === undefined
        ) {
          setProfileMenuOpened(false);
        }
      } else if (
        (e.target as HTMLElement).closest('#profileMenuOpenBtn') !== null
      ) {
        setProfileMenuOpened(true);
      }
    };

    document.addEventListener('click', (e) => profileMenuClick(e));
    return () => {
      document.removeEventListener('click', (e) => profileMenuClick(e));
    };
  }, [profileMenuOpened]);

  return (
    <div className="mt-auto w-full">
      <div
        className={`relative m-2 flex shrink-0 items-center justify-center gap-2  rounded-lg bg-base-300 py-2 text-lg transition-all duration-200 ${
          drawerCollapsed ? 'flex-col p-0' : 'px-2'
        }`}
      >
        <Link href={`/dashboard/user/${userData.enrollmentID}`}>
          <a
            className="relative h-12 w-12 shrink-0 rounded-full transition-all duration-500"
            onClick={toggleDrawer}
          >
            <Image src={userData.profileURL} alt="Banner" layout="fill" />
          </a>
        </Link>
        <div
          className={`flex origin-top-left flex-col transition-opacity delay-200 duration-500 ${
            drawerCollapsed
              ? 'h-0 w-0 scale-0 opacity-0'
              : 'scale-100 opacity-100 '
          }`}
        >
          <Link href={`/dashboard/user/${userData.enrollmentID}`}>
            <a
              className="w-full max-w-[11rem] overflow-hidden text-ellipsis whitespace-nowrap font-bold transition-all duration-200 hover:text-primary"
              onClick={toggleDrawer}
            >
              {userData.name}
            </a>
          </Link>
          <span className="text-sm text-base-content/70">
            {userData.enrollmentID}
          </span>
        </div>
        <button
          id="profileMenuOpenBtn"
          className={`relative aspect-square h-10 rounded-lg bg-primary/30 p-2 transition-all duration-300 ${
            drawerCollapsed ? 'mx-auto ' : 'ml-auto'
          }`}
        >
          <ExpandIcon />
          <ul
            id="profileMenu"
            className={`menu absolute -top-3 left-1/2 origin-bottom -translate-x-1/2 -translate-y-full rounded-xl bg-base-content text-base-300 transition-all duration-100 ${
              profileMenuOpened ? 'scale-100' : 'scale-0'
            }`}
          >
            <li>
              <a
                tabIndex={0}
                onClick={() => {
                  settingModalToggle();
                  setProfileMenuOpened(false);
                }}
              >
                <span className="h-5 w-5">
                  <SettingsIcon />
                </span>
              </a>
            </li>
            <li>
              <a tabIndex={0}>
                <span className="h-5 w-5">
                  <LogoutIcon />
                </span>
              </a>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
