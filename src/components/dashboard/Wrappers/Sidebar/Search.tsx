import { FC, useContext, useState } from 'react';
import SearchIcon from '../../../../icons/SearchIcon';
import { SettingsContext } from '../../../../lib/context/settings';
const Search: FC = () => {
  const { drawerCollapsed, setDrawerCollapsed } = useContext(SettingsContext);
  const [drawerDefaultState, setDrawerDefaultState] = useState<boolean>(false);
  return (
    <div className="relative flex w-full justify-center p-2">
      <input
        type="text"
        id="sidebarSerach"
        placeholder={drawerCollapsed ? '' : 'Search...'}
        className="input input-bordered h-14 w-full rounded-lg pl-10 text-lg"
        onFocus={() => {
          if (drawerCollapsed) {
            setDrawerCollapsed(false);
            setDrawerDefaultState(true);
          } else {
            setDrawerDefaultState(false);
          }
        }}
        onBlur={() => setDrawerCollapsed(drawerDefaultState)}
      />
      <label
        htmlFor="sidebarSerach"
        className={`absolute top-1/2 h-6 w-6 -translate-y-1/2 cursor-pointer p-0
       transition-all duration-300 ${
         drawerCollapsed ? 'left-1/2 -translate-x-1/2' : 'left-5 translate-x-0'
       }`}
      >
        <SearchIcon />
      </label>
    </div>
  );
};

export default Search;
