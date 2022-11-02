import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { themesInterface } from '../../../lib/config';
import { SettingsContext } from '../../../lib/context/settings';
import LoadingPage from '../../core/LoadingPage';
import Header from './Wrappers/Header';
import Sidebar from './Wrappers/Sidebar';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: FC<DashboardWrapperProps> = ({ children }) => {
  const router = useRouter();
  const [theme, setTheme] = useState<themesInterface>('el_regaldo');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerCollapsed, setDrawerCollapsed] = useState(true);
  const [toDoCollapsed, setToDoCollapsed] = useState(true);
  const [routeChanging, setRouteChanging] = useState(false);
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

  useEffect(() => {
    const handleRouteChangeStart = (url: string): void => {
      console.log(`App is changing to ${url}`);
      setRouteChanging(true);
    };
    const handleRouteChangeComplete = (url: string): void => {
      setRouteChanging(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  if (router.pathname.split('/')[1] === 'dashboard') {
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
            <div className="relative h-screen w-full overflow-y-auto overflow-x-hidden pb-5">
              <LoadingPage routeState={routeChanging} />
              <Header />
              {children}
            </div>
            {/* <ToDoList /> */}
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
