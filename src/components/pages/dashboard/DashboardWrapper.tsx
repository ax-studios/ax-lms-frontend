import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { SettingsContext } from '../../../lib/context/settings';
import Header from './Wrappers/Header';
import Sidebar from './Wrappers/Sidebar';
import ToDoList from './Wrappers/ToDoList';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: FC<DashboardWrapperProps> = ({ children }) => {
  const route = useRouter();
  const [theme, setTheme] = useState<
    'dark' | 'winter' | 'synthwave' | 'halloween' | 'cmyk' | 'forest'
  >('dark');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerCollapsed, setDrawerCollapsed] = useState(true);
  const [toDoCollapsed, setToDoCollapsed] = useState(true);

  const defaultSettings = {
    theme,
    setTheme,
    drawerOpen,
    setDrawerOpen,
    toggleDrawer: () => setDrawerOpen((p) => !p),
    drawerCollapsed,
    setDrawerCollapsed,
    toggleDrawerCollapsed: () => setDrawerCollapsed((p) => !p),
    toDoCollapsed,
    setToDoCollapsed,
    toggleToDoCollapsed: () => setToDoCollapsed((p) => !p),
  };

  if (route.pathname.split('/')[1] === 'dashboard') {
    return (
      <SettingsContext.Provider value={defaultSettings}>
        {/* eslint-disable-next-line prettier/prettier */}
        <div className="drawer-mobile drawer" data-theme={theme}>
          <input
            id="my-drawer-2"
            type="checkbox"
            className="drawer-toggle"
            checked={drawerOpen}
            onChange={defaultSettings.toggleDrawer}
          />
          <div className="drawer-content flex h-screen overflow-hidden">
            <div className="h-screen w-full overflow-y-auto overflow-x-hidden">
              <Header />
              <div className="p-2 pt-0 md:p-5 md:pt-0 ">{children}</div>
            </div>
            <ToDoList />
          </div>
          <div className="drawer-side">
            <div
              className="drawer-overlay"
              onClick={defaultSettings.toggleDrawer}
            ></div>
            <Sidebar />
          </div>
        </div>
      </SettingsContext.Provider>
    );
  }
  return <div data-theme={theme}>{children}</div>;
};

export default DashboardWrapper;
