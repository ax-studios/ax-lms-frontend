import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext, useState } from 'react';
import { ArrowIcon } from '../../../../../icons';
import SearchIcon from '../../../../../icons/SearchIcon';
import { useSidebarIcons } from '../../../../../icons/Sidebar Icons';
import { width } from '../../../../../lib/config';
import { SettingsContext } from '../../../../../lib/context/settings';
import useSidebarMenu from '../../../../../lib/hooks/useSidebarMenu';
import { Logo } from '../../../../core';
import Modal from '../../../../core/Modal';
import ProfileMenu from '../ProfileMenu';
import SettingModal from '../SettingsModal.tsx';

const Sidebar: FC = () => {
  const router = useRouter();
  const sidebarOptions = useSidebarMenu();
  const sidebarIcons = useSidebarIcons();
  const { toggleDrawer, drawerCollapsed, toggleDrawerCollapsed } =
    useContext(SettingsContext);
  const { open, closed } = width.drawer;
  const [modalState, setModalState] = useState(false);
  const handleModalState = (): void => setModalState((p) => !p);
  return (
    <>
      <aside
        className="max-h-screen select-none overflow-x-hidden border-r-2 border-primary/30 bg-base-100 text-base-content"
        style={{
          width: drawerCollapsed ? closed : open,
        }}
      >
        <div
          className={`sticky top-0 z-50 flex h-20 items-center gap-2 whitespace-nowrap border-b-2 border-primary/30 bg-base-300 p-4 text-2xl font-bold ${
            drawerCollapsed ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="block aspect-square h-9">
            <Logo />
          </span>
          <span
            className={`transition-all ${
              drawerCollapsed ? 'h-0 w-0 opacity-0' : ''
            }`}
          >
            Ax Studios
          </span>
        </div>

        <ul className="menu relative h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden font-bold transition-all duration-200">
          <li className="relative flex w-full justify-center p-2">
            <input
              type="text"
              id="sidebarSerach"
              placeholder={drawerCollapsed ? '' : 'Search...'}
              className="input input-bordered h-14 w-full rounded-lg  pl-10 text-lg "
            />
            <label
              htmlFor="sidebarSerach"
              className={`absolute h-6 w-6 p-0 ${
                drawerCollapsed
                  ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
                  : 'left-5'
              }`}
            >
              <SearchIcon />
            </label>
          </li>
          {sidebarOptions.map((option) => (
            <li
              key={option.name}
              className={`from-primary/50 to-primary/10  ${
                router.asPath.split('/')[2] === option.link
                  ? 'bordered'
                  : 'hover-bordered'
              }`}
            >
              <Link href={`/dashboard/${option.link}`}>
                <a
                  onClick={toggleDrawer}
                  className={`items-center ${
                    drawerCollapsed ? 'justify-center' : 'justify-start'
                  } ${
                    router.asPath.split('/')[2] === option.link ? 'active' : ''
                  }`}
                >
                  <span className={'w-6'}>{sidebarIcons[option.link]}</span>
                  {!drawerCollapsed && <span>{option.name}</span>}
                </a>
              </Link>
            </li>
          ))}
          <ProfileMenu settingModalToggle={handleModalState} />
        </ul>
      </aside>
      <Modal
        id="setting-modal"
        modalState={modalState}
        handleModalSate={handleModalState}
      >
        <SettingModal />
      </Modal>
      <button
        onClick={toggleDrawerCollapsed}
        className="btn-primary absolute top-5 z-50 h-8 w-12 origin-left -translate-x-1/2 rounded-full transition-all duration-300"
        style={{
          left: drawerCollapsed ? closed : open,
          rotate: drawerCollapsed ? '180deg' : '0deg',
        }}
      >
        <ArrowIcon />
      </button>
    </>
  );
};

export default Sidebar;
