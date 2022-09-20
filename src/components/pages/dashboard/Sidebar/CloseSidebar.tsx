import { FC, useContext } from 'react';
import { ArrowIcon } from '../../../../icons';
import { width } from '../../../../lib/config';
import { SettingsContext } from '../../../../lib/context/settings';

const CloseSidebar: FC = () => {
  const { drawerCollapsed, toggleDrawerCollapsed } =
    useContext(SettingsContext);
  const { open, closed } = width.drawer;
  return (
    <button
      className="absolute bottom-8 z-[999] w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full  border border-primary/30 bg-base-300 p-1 text-primary transition-all duration-200 hover:shadow hover:shadow-primary active:scale-95 active:shadow-lg"
      style={{
        left: drawerCollapsed ? closed : open,
      }}
      onClick={toggleDrawerCollapsed}
    >
      <span
        style={{
          rotate: drawerCollapsed ? '45deg' : '0deg',
        }}
      >
        <ArrowIcon />
      </span>
    </button>
  );
};

export default CloseSidebar;
