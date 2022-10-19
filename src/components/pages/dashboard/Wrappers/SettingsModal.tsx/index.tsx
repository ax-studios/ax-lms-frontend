import { FC, useContext } from 'react';
import { themes } from '../../../../../lib/config';
import { SettingsContext } from '../../../../../lib/context/settings';
const SettingModal: FC = () => {
  const { theme, drawerCollapsed, toggleDrawerCollapsed } =
    useContext(SettingsContext);
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold">Settings</h3>
      <h4 className="mt-5 text-lg font-bold">
        Theme
        <span className="text-base uppercase text-base-content/70">
          {' '}
          ( {theme} )
        </span>
      </h4>
      <div className="flex flex-wrap gap-5 pt-4 pl-4">
        {themes.map((theme) => (
          <ThemeLayout key={theme} dataTheme={theme} />
        ))}
      </div>
      <h4 className="mt-5 text-lg font-bold">Sidebar</h4>
      <div className="flex items-center gap-2 pt-4 pl-4 font-bold">
        Collapsed
        <input
          type="checkbox"
          className="toggle toggle-md"
          checked={!drawerCollapsed}
          onChange={toggleDrawerCollapsed}
        />
        Full
      </div>
    </div>
  );
};

export default SettingModal;

interface ThemeLayoutProps {
  dataTheme: 'dark' | 'winter' | 'synthwave' | 'halloween' | 'cmyk' | 'forest';
}

const ThemeLayout: FC<ThemeLayoutProps> = ({ dataTheme }) => {
  const { setTheme } = useContext(SettingsContext);
  return (
    <div
      className="border-base-content' grid cursor-pointer grid-cols-5 grid-rows-3 overflow-hidden rounded-lg  border-2 "
      data-theme={dataTheme}
      onClick={() => setTheme(dataTheme)}
    >
      <div className="col-start-1 row-span-2 row-start-1 bg-base-200"></div>
      <div className="col-start-1 row-start-3 bg-base-300"></div>
      <div className="col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 bg-base-100 p-2">
        <div className="font-bold">{dataTheme}</div>
        <div className="flex flex-wrap gap-1">
          <div className="flex aspect-square w-5 items-center justify-center rounded bg-primary lg:w-6">
            <div className="text-sm font-bold text-primary-content">A</div>
          </div>
          <div className="flex aspect-square w-5 items-center justify-center rounded bg-secondary lg:w-6">
            <div className="text-sm font-bold text-secondary-content">A</div>
          </div>
          <div className="flex aspect-square w-5 items-center justify-center rounded bg-accent lg:w-6">
            <div className="text-sm font-bold text-accent-content">A</div>
          </div>
          <div className="flex aspect-square w-5 items-center justify-center rounded bg-neutral lg:w-6">
            <div className="text-sm font-bold text-neutral-content">A</div>
          </div>
        </div>
      </div>
    </div>
  );
};
