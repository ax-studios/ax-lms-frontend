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
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          width: drawerCollapsed ? closed : open,
          backgroundImage:
            'linear-gradient(hsl(var(--b1)/0.9),hsl(var(--b1)/0.9)),url(/images/auth/background.jpg)',
        }}
      >
        <aside className="relative max-h-screen select-none overflow-x-hidden border-r-4 border-primary backdrop-blur">
          {/* Header Component */}
          <div
            className={`sticky top-0 z-50 flex h-20 items-center gap-2 whitespace-nowrap p-4 text-2xl font-bold ${
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
            {/* Search Bar */}
            <li className="relative flex w-full justify-center p-2">
              <input
                type="text"
                id="sidebarSerach"
                placeholder={drawerCollapsed ? '' : 'Search...'}
                className="input input-bordered h-14 w-full rounded-lg pl-10 text-lg "
              />
              <label
                htmlFor="sidebarSerach"
                className={`absolute top-1/2 h-6 w-6 -translate-y-1/2 p-0 transition-all
               duration-300 ${drawerCollapsed ? 'left-7' : 'left-5'}`}
              >
                <SearchIcon />
              </label>
            </li>
            {/* All the Menu List */}
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
                      router.asPath.split('/')[2] === option.link
                        ? 'active'
                        : ''
                    }`}
                  >
                    <span className={'w-6'}>{sidebarIcons[option.link]}</span>
                    {!drawerCollapsed && <span>{option.name}</span>}
                  </a>
                </Link>
              </li>
            ))}
            {/* Profile Menu */}
            <ProfileMenu settingModalToggle={handleModalState} />
          </ul>
          <button
            onClick={toggleDrawerCollapsed}
            className={`btn-primary absolute top-5 right-0 z-50 hidden h-8 w-6 origin-center transition-all duration-300 lg:block  ${
              drawerCollapsed
                ? 'rotate-180 rounded-r-full'
                : 'rotate-0 rounded-l-full'
            }`}
          >
            <ArrowIcon />
          </button>
        </aside>
      </div>
      {/* Setting Modal */}
      <Modal
        id="setting-modal"
        modalState={modalState}
        handleModalSate={handleModalState}
      >
        <SettingModal />
      </Modal>
      {/* SIebar open Close Btn */}
    </>
  );
};

export default Sidebar;
