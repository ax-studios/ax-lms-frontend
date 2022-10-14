import { FC, useContext } from 'react';
import { taskInterface } from '../../../../../../data/tasks';
import { SettingsContext } from '../../../../../../lib/context/settings';
import TaskOptions from './TaskOptions';

interface Props {
  delay: number;
  task: taskInterface;
}

const Task: FC<Props> = ({ delay, task }) => {
  const { toDoCollapsed } = useContext(SettingsContext);
  return (
    <div
      className="group min-h-16 relative grid shrink-0 animate-scale items-center overflow-hidden rounded-lg border border-base-content/70 bg-base-200 py-2 pr-4 pl-5 text-left text-lg transition-all duration-300"
      style={{
        ...(toDoCollapsed
          ? { scale: '0', visibility: 'hidden' }
          : { scale: '1', transitionDelay: `${delay}ms` }),
      }}
    >
      <div
        className={`absolute top-0 left-0 h-full w-2 todo-${task.priority}`}
      />
      <div className="flex flex-row items-center justify-between">
        <div className="max-w-[300px] overflow-hidden text-ellipsis whitespace-nowrap">
          <b className="">{task.name}</b>
          <div className=" text-xs font-medium">{task.description}</div>
        </div>
        <div className="relative inline-block text-xs font-medium">
          {new Date(task.dueDate).toDateString()}
        </div>
        <TaskOptions todoId={task.id} />
      </div>
    </div>
  );
};

export default Task;
