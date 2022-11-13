import { themesInterface } from '@/lib/config';

interface initialSettingsType {
  theme: themesInterface;
  drawerCollapsed: boolean;
  toDoCollapsed: boolean;
}

export const initialSettings: initialSettingsType = {
  theme: 'night',
  drawerCollapsed: false,
  toDoCollapsed: true,
};

type SETTINGS_ACTIONTYPE =
  | { type: 'SET_THEME'; payload: themesInterface }
  | { type: 'TOGGLE_DRAWER'; payload?: never }
  | { type: 'SET_DRAWER'; payload: boolean }
  | { type: 'TOGGLE_TODO'; payload?: never }
  | { type: 'SET_TODO'; payload: boolean };

/**
 *
 * @param state ```
 * { theme: 'night', drawerCollapsed: false, todoCollapsed: true, };
 * ```
 * @param action  ```
 *                | { type: 'SET_THEME'; payload: themesInterface }
 *                | { type: 'TOGGLE_DRAWER'; payload: never }
 *                | { type: 'SET_DRAWER'; payload: boolean }
 *                | { type: 'TOGGLE_TODO'; payload: never }
 *                | { type: 'SET_TODO'; payload: boolean };
 *                ```
 * @returns state
 */
export function settingReducer(
  state: initialSettingsType,
  action: SETTINGS_ACTIONTYPE
): initialSettingsType {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'TOGGLE_DRAWER':
      return { ...state, drawerCollapsed: !state.drawerCollapsed };
    case 'SET_DRAWER':
      return { ...state, drawerCollapsed: action.payload };
    case 'TOGGLE_TODO':
      return { ...state, toDoCollapsed: !state.toDoCollapsed };
    case 'SET_TODO':
      return { ...state, toDoCollapsed: action.payload };
    default:
      throw new Error();
  }
}

export type SettingsContextType = initialSettingsType & {
  setTheme: (theme: themesInterface) => void;
  setDrawerCollapsed: (setTo: boolean) => void;
  toggleDrawerCollapsed: () => void;
  setToDoCollapsed: (setTo: boolean) => void;
  toggleToDoCollapsed: () => void;
};
