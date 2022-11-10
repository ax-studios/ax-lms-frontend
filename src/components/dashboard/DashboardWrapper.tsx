import { Box, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { themesInterface, width } from '../../lib/config';
import { SettingsContext } from '../../lib/context/settings';
import { createTheme } from '../../lib/theme';
import LoadingPage from '../core/LoadingPage';
import LabelBottomNavigation from './BottomnavigationBar';
import Header from './Wrappers/Header';
import Sidebar from './Wrappers/Sidebar';

const DashboardWrapper: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const router = useRouter();
  const [theme, setTheme] = useState<themesInterface>('night');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerCollapsed, setDrawerCollapsed] = useState(true);
  const [toDoCollapsed, setToDoCollapsed] = useState(false);
  const [routeChanging, setRouteChanging] = useState(false);
  const { open, closed } = width.drawer;

  const muiTheme = createTheme('dark');

  const mobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SettingsContext.Provider value={defaultSettings}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />

          {router.pathname.split('/')[1] === 'dashboard' ? (
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
                  {mobile && <Header />}
                  <div className="h-full flex-grow overflow-y-auto py-2">
                    {children}
                  </div>
                  {mobile && <LabelBottomNavigation />}
                </Box>
                {/* {!mobile && <ToDoList />} */}
              </Box>
            </>
          ) : (
            <div data-theme={theme}>{children}</div>
          )}
        </ThemeProvider>
      </SettingsContext.Provider>
    </LocalizationProvider>
  );
};

export default DashboardWrapper;
