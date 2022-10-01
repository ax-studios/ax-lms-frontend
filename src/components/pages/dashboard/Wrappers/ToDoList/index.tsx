import { FC, useContext } from 'react';
// import { width } from '../../../../../lib/config';
import { SettingsContext } from '../../../../../lib/context/settings';
import ToggleCollapsed from '../ToggleCollapsed';
import Tasks from './Tasks';

const ToDoList: FC = () => {
  const { toDoCollapsed, toggleToDoCollapsed } = useContext(SettingsContext);
  // const { open, closed } = width.Todo;
  return (
    <div
      className={`fixed bottom-0 left-0 w-full shrink-0 rounded-t-[2rem] border border-primary/30 bg-base-200 p-5 py-4 transition-all duration-300 lg:relative lg:h-full lg:rounded-l-[2rem] lg:rounded-tr-none ${
        toDoCollapsed ? 'lg:w-[60px]' : 'lg:w-[500px]'
      }`}
    >
      <p
        className={`whitespace-nowrap text-2xl font-bold transition-all duration-300 lg:h-auto ${
          toDoCollapsed ? 'lg:rotate-90' : ''
        }`}
      >
        To-do List
      </p>
      <Tasks />
      <ToggleCollapsed left="0px" toggle={toggleToDoCollapsed} />
    </div>
  );
};

export default ToDoList;
