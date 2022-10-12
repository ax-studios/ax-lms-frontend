import { FC, useContext, useState } from 'react';
import { taskInterface } from '../../../../../../data/tasks';
import { SettingsContext } from '../../../../../../lib/context/settings';
import TaskOptions from './TaskOptions';

interface Props {
  delay: number;
  task: taskInterface;
}

const Task: FC<Props> = ({ delay, task }) => {
  const { toDoCollapsed } = useContext(SettingsContext);
  const [showTaskMenu, setShowTaskMenu] = useState(false);
  return (
    <li
      className="font-roboto group relative shrink-0 overflow-hidden rounded-lg border border-base-content/70 bg-base-200 py-2 pr-4 pl-5 text-left text-lg transition-all duration-300"
      style={{
        ...(toDoCollapsed
          ? { scale: '0', visibility: 'hidden' }
          : { scale: '1', transitionDelay: `${delay}ms` }),
      }}
    >
      <div className="absolute top-0 left-0 h-full w-2 bg-primary" />
      <div className="grid grid-cols-8 items-center justify-center gap-1">
        <div className="col-span-6">
          <b className=" max-w-[300px]  overflow-hidden text-ellipsis whitespace-nowrap">
            {task.name}
          </b>
          <div className="max-w-[250px]  overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium">
            {task.description}
          </div>
        </div>
        <div className="relative col-span-2 inline-block shrink-0 text-right text-xs font-medium">
          {new Date(task.dueDate).toLocaleString()}
        </div>
        <TaskOptions
          show={showTaskMenu}
          toggleShow={() => setShowTaskMenu((p) => !p)}
        />
      </div>
    </li>
  );
};

export default Task;
