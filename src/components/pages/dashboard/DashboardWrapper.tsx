import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { SettingsContext } from '../../../lib/context/settings';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: FC<DashboardWrapperProps> = ({ children }) => {
  const route = useRouter();
  const [theme, setTheme] = useState<
    'dark' | 'winter' | 'synthwave' | 'halloween'
  >('winter');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerCollapsed, setDrawerCollapsed] = useState(false);
  const defaultSettings = {
    theme,
    setTheme,
    drawerOpen,
    setDrawerOpen,
    toggleDrawer: () => setDrawerOpen((p) => !p),
    drawerCollapsed,
    setDrawerCollapsed,
    toggleDrawerCollapsed: () => setDrawerCollapsed((p) => !p),
  };

  if (route.pathname.split('/')[1] === 'dashboard') {
    return (
      <SettingsContext.Provider value={defaultSettings}>
        <div className="drawer-mobile drawer">
          <input
            id="my-drawer-2"
            type="checkbox"
            className="drawer-toggle"
            checked={drawerOpen}
            onChange={defaultSettings.toggleDrawer}
          />
          <div className="drawer-content">
            <Header />
            {children}
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
  return <>{children}</>;
};

export default DashboardWrapper;
