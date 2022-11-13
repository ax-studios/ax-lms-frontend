import { UserContext, UserData } from '@/data/userData';
import DashboardLayout from '@/layouts/DashboardLayout';
import DefaultLayout from '@/layouts/DefaultLayout';
import { themesInterface } from '@/lib/config';
import { SettingsProvider } from '@/lib/hooks/useSettings';
import { initialSettings, settingReducer } from '@/lib/reducers/Settings';
import { createTheme } from '@/lib/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useRouter } from 'next/router';
import { FC, useReducer } from 'react';

const MainLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const router = useRouter();
  const [settings, dispatch] = useReducer(settingReducer, initialSettings);
  const muiTheme = createTheme('dark');

  const defaultSettings = {
    ...settings,
    setTheme: (theme: themesInterface) =>
      dispatch({ type: 'SET_THEME', payload: theme }),
    setDrawerCollapsed: (setTo: boolean) =>
      dispatch({ type: 'SET_DRAWER', payload: setTo }),
    toggleDrawerCollapsed: () => dispatch({ type: 'TOGGLE_DRAWER' }),
    setToDoCollapsed: (setTo: boolean) =>
      dispatch({ type: 'SET_TODO', payload: setTo }),
    toggleToDoCollapsed: () => dispatch({ type: 'TOGGLE_TODO' }),
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <UserContext.Provider value={UserData}>
        <SettingsProvider value={defaultSettings}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {/* Dashboard Layout */}
            {router.pathname.split('/')[1] === 'dashboard' ? (
              <DashboardLayout>{children}</DashboardLayout>
            ) : (
              <DefaultLayout>{children}</DefaultLayout>
            )}
          </ThemeProvider>
        </SettingsProvider>
      </UserContext.Provider>
    </LocalizationProvider>
  );
};

export default MainLayout;
