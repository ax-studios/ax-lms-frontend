import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
import { useSidebarIcons } from '../../../../icons/Sidebar Icons';
import { width } from '../../../../lib/config';
import { SettingsContext } from '../../../../lib/context/settings';
import useSidebarMenu from '../../../../lib/hooks/useSidebarMenu';
import { IconWrapper, Logo } from '../../../core';
import ProfileCard from '../ProfileCard';
import CloseSidebar from './CloseSidebar';

const Sidebar: FC = () => {
  const router = useRouter();
  const sidebarOptions = useSidebarMenu();
  const sidebarIcons = useSidebarIcons();
  const { toggleDrawer, drawerCollapsed } = useContext(SettingsContext);
  const { open, closed } = width.drawer;
  return (
    <>
      <aside
        className="select-none overflow-hidden border-r-2 border-primary/30 bg-base-100 text-base-content"
        style={{
          width: drawerCollapsed ? closed : open,
        }}
      >
        <div
          className={` sticky top-0 flex h-20 items-center gap-2 whitespace-nowrap border-b-2 border-primary/30 bg-base-200 px-4 text-2xl font-bold ${
            drawerCollapsed ? 'justify-center' : 'justify-start'
          }`}
        >
          <IconWrapper height={35} width={35}>
            <Logo />
          </IconWrapper>
          <span
            className={`transition-all ${
              drawerCollapsed ? 'h-0 w-0 opacity-0' : ''
            }`}
          >
            Ax Studios
          </span>
        </div>
        <ul className="menu flex h-[calc(100vh-77px)] flex-col gap-1 overflow-x-hidden py-2 transition-all duration-200">
          <ProfileCard />
          {sidebarOptions.map((option) => (
            <li
              key={option.name}
              className={`from-primary/50 to-primary/10 text-xl  ${
                router.query.dash !== undefined &&
                router.query.dash[0] === option.link
                  ? 'bordered bg-gradient-to-l shadow-xl shadow-base-300/50'
                  : 'hover-bordered shadow-base-300/50 hover:bg-gradient-to-l hover:shadow-xl'
              }`}
            >
              <Link href={`/dashboard/${option.link}`}>
                <a
                  onClick={toggleDrawer}
                  className={`items-center !rounded-none py-4 ${
                    drawerCollapsed ? 'justify-center' : 'justify-start'
                  }`}
                >
                  <span className={'w-8'}>{sidebarIcons[option.link]}</span>
                  {!drawerCollapsed && <span>{option.name}</span>}
                </a>
              </Link>
            </li>
          ))}
          <li className="hover-bordered mt-auto from-primary/50 to-primary/10 text-xl hover:bg-gradient-to-l hover:shadow-xl">
            <a
              className={`items-center !rounded-none py-4 ${
                drawerCollapsed ? 'justify-center' : 'justify-start'
              }`}
            >
              <IconWrapper width={32} height={32}>
                {sidebarIcons.logout}
              </IconWrapper>
              {!drawerCollapsed && <span>Logout</span>}
            </a>
          </li>
        </ul>
      </aside>
      <CloseSidebar />
    </>
  );
};

export default Sidebar;
