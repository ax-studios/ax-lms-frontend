import { useSettings } from '@/lib/hooks/useSettings';
import { useTodo } from '@/lib/hooks/useTodo';
import { FC } from 'react';
import AddTask from './AddTask';
import Task from './Task';

const Tasks: FC = () => {
  const { toDoCollapsed } = useSettings();
  const { tasks } = useTodo();
  return (
    <div
      className={`flex flex-col gap-4 overflow-y-auto overflow-x-hidden px-4 transition-all duration-300  ${
        toDoCollapsed
          ? 'mt-0 h-0'
          : 'h-[calc(80vh-80px-16px)] pb-5 lg:h-full lg:flex-grow lg:pb-2'
      }`}
    >
      {tasks.length > 0 ? (
        tasks.map((task, i) => (
          <Task delay={100 + i * 50} key={task.id} task={task} />
        ))
      ) : (
        <div className="mx-auto">No Task found add new one</div>
      )}

      <AddTask />
    </div>
  );
};

export default Tasks;
