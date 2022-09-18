import { createContext } from 'react';

/**
 * @description Setting Interface for Context
 */
interface SettingdInterface {
  theme: 'dark' | 'winter' | 'synthwave' | 'halloween';
  setTheme: (theme: 'dark' | 'winter' | 'synthwave' | 'halloween') => void;
  drawerOpen: boolean;
  setDrawerOpen: (setTo: boolean) => void;
  toggleDrawer: () => void;
  drawerCollapsed: boolean;
  setDrawerCollapsed: (setTo: boolean) => void;
  toggleDrawerCollapsed: () => void;
}

/**
 * @description Default settings for the app
 */
const defaults = {
  theme: 'winter' as 'winter',
  setTheme: (theme: 'dark' | 'winter' | 'synthwave' | 'halloween') => {},
  drawerOpen: true,
  setDrawerOpen: (setTo: boolean) => {},
  toggleDrawer: () => {},
  drawerCollapsed: false,
  setDrawerCollapsed: (setTo: boolean) => {},
  toggleDrawerCollapsed: () => {},
};

/**
 * @description Context for settings
 */
export const SettingsContext = createContext<SettingdInterface>(defaults);
