import { useRouter } from 'next/router';
import { FC, useContext, useState } from 'react';
import { ArrowIcon } from '../../../../../icons';
import SearchIcon from '../../../../../icons/SearchIcon';
import { useSidebarIcons } from '../../../../../icons/Sidebar Icons';
import { width } from '../../../../../lib/config';
import { SettingsContext } from '../../../../../lib/context/settings';
import useSidebarMenu from '../../../../../lib/hooks/useSidebarMenu';
import { Logo } from '../../../../core';
import Link from '../../../../core/Link';
import Modal from '../../../../core/Modal';
import ProfileMenu from '../ProfileMenu';
import SettingModal from '../SettingsModal';

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
        className="relative flex flex-col overflow-hidden border-r-4 border-primary bg-cover bg-center bg-no-repeat"
        style={{
          width: drawerCollapsed ? closed : open,
          backgroundImage:
            'linear-gradient(hsl(var(--b1)/0.6),hsl(var(--b1)/0.6)),url(/images/auth/background.jpg)',
        }}
      >
        {/* Header Component */}
        <div
          className={`bg-base-300/30 text-2xl font-bold backdrop-blur ${
            drawerCollapsed ? 'justify-center' : 'justify-start'
          }`}
        >
          <div className="flex h-20 items-center gap-2 whitespace-nowrap p-4">
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
          {/* Search Bar */}
          <div className="relative flex w-full justify-center p-2">
            <input
              type="text"
              id="sidebarSerach"
              placeholder={drawerCollapsed ? '' : 'Search...'}
              className="input input-bordered h-14 w-full rounded-lg pl-10 text-lg "
            />
            <label
              htmlFor="sidebarSerach"
              className={`absolute top-1/2 h-6 w-6 -translate-y-1/2 p-0
               transition-all duration-300 ${
                 drawerCollapsed
                   ? 'left-1/2 -translate-x-1/2'
                   : 'left-5 translate-x-0'
               }`}
            >
              <SearchIcon />
            </label>
          </div>
          {/* Close Btn */}
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
        </div>
        <aside className="flex-1 select-none overflow-x-hidden backdrop-blur">
          <ul className="menu relative h-full flex-nowrap gap-1 overflow-y-auto py-2 font-bold transition-all duration-200">
            {/* All the Menu List */}
            {sidebarOptions.map((option) => (
              <li
                key={option.name}
                className="ml-2 from-primary/50 to-primary/10"
              >
                <Link
                  onClick={toggleDrawer}
                  className={`relative items-center rounded-l-full ${
                    drawerCollapsed ? 'justify-center' : 'justify-start'
                  } ${
                    router.asPath.split('/')[2] === option.link ? 'active' : ''
                  }`}
                  href={`/dashboard/${option.link}`}
                >
                  <span className={'w-6'}>{sidebarIcons[option.link]}</span>
                  {!drawerCollapsed && <span>{option.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        {/* Profile Menu */}
        <ProfileMenu settingModalToggle={handleModalState} />
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
