import { LoadingPage } from '@/components/core';
import LabelBottomNavigation from '@/components/dashboard/Wrappers/BottomnavigationBar';
import Header from '@/components/dashboard/Wrappers/Header';
import Sidebar from '@/components/dashboard/Wrappers/Sidebar';
import ToDoList from '@/components/dashboard/Wrappers/ToDoList';
import { width } from '@/lib/config';
import { useSettings } from '@/lib/hooks/useSettings';
import { createTheme } from '@/lib/theme';
import { Box, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

const DashboardLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const router = useRouter();
  const [routeChanging, setRouteChanging] = useState(false);
  const { open, closed } = width.drawer;
  const { theme, drawerCollapsed } = useSettings();
  const muiTheme = createTheme('dark');

  const mobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

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
  return (
    <>
      <Box
        sx={{ display: 'flex' }}
        data-theme={theme}
        className="min-h-screen overflow-hidden"
      >
        {!mobile && (
          <Box
            component="nav"
            sx={{
              width: drawerCollapsed ? closed : open,
              flexShrink: 0,
            }}
            aria-label="mailbox folders"
          >
            <Sidebar />
          </Box>
        )}
        <LoadingPage routeState={routeChanging} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: `calc(100% - ${drawerCollapsed ? closed : open}px)`,
          }}
          className="relative flex h-screen w-full flex-col overflow-y-auto overflow-x-hidden"
        >
          <Header />
          <div className="h-full flex-grow overflow-y-auto">{children}</div>
          {mobile && <LabelBottomNavigation />}
        </Box>
        {!mobile && <ToDoList />}
      </Box>
    </>
  );
};

export default DashboardLayout;
