import { FC, useContext } from 'react';
// import { width } from '../../../../../lib/config';
import { SettingsContext } from '../../../../../lib/context/settings';
import ToggleCollapsed from '../ToggleCollapsed';
import Tasks from './Tasks';

const ToDoList: FC = () => {
  const { toDoCollapsed, toggleToDoCollapsed } = useContext(SettingsContext);
  return (
    <div
      className={`fixed bottom-0 left-0 w-full shrink-0 rounded-t-[2rem] border border-primary/30 bg-base-200 pb-0 transition-all duration-300 lg:relative lg:h-auto lg:rounded-l-[2rem] lg:rounded-tr-none lg:pb-5 ${
        toDoCollapsed ? 'lg:max-w-[60px]' : 'lg:max-w-[500px]'
      }`}
    >
      <p
        className={`flex h-16 items-center whitespace-nowrap px-4 text-3xl font-bold text-base-content transition-all  duration-300 lg:h-20 ${
          toDoCollapsed ? 'lg:rotate-90' : ''
        }`}
      >
        To-do List
      </p>
      <Tasks />
      <ToggleCollapsed
        className={`right-0 top-0 transition-all duration-300 md:top-auto md:right-auto md:left-0 ${
          toDoCollapsed ? 'rotate-90 md:rotate-0' : '-rotate-90 md:rotate-180'
        }`}
        toggle={toggleToDoCollapsed}
      />
    </div>
  );
};

export default ToDoList;
