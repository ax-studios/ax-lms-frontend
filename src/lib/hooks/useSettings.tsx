import createCtx from '../helper/useCtx';
import { SettingsContextType } from '../reducers/Settings';

// We still have to specify a type, but no default!
export const [useSettings, SettingsProvider] = createCtx<SettingsContextType>();
