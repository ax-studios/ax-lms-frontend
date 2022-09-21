import { FC, useContext } from 'react';
import { width } from '../../../../lib/config';
import { SettingsContext } from '../../../../lib/context/settings';
import ToggleCollapsed from '../ToggleCollapsed';
import Tasks from './Tasks';

const ToDoList: FC = () => {
  const { toDoCollapsed, toggleToDoCollapsed } = useContext(SettingsContext);
  const { open, closed } = width.Todo;
  return (
    <div
      className="relative h-full shrink-0 rounded-l-[2rem] border border-primary/30 bg-base-200 p-5 py-4 transition-all duration-300"
      style={{
        width: toDoCollapsed ? closed : open,
      }}
    >
      <p
        className={`whitespace-nowrap text-2xl font-bold transition-all duration-300 ${
          toDoCollapsed ? 'rotate-90' : ''
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
