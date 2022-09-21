import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';
import { SettingsContext } from '../../../../../lib/context/settings';
import Task from '../Task';

const Tasks: FC = () => {
  const { toDoCollapsed } = useContext(SettingsContext);
  const { tasks } = useContext(UserContext);
  return (
    <ul className="mt-4 space-y-4">
      {tasks.map((task, i) => (
        <Task delay={100 + i * 50} key={task.id} task={task} />
      ))}

      <li>
        <button
          className="btn btn-primary h-16 w-full text-lg capitalize transition-all duration-300"
          style={{
            ...(toDoCollapsed
              ? { scale: '0' }
              : {
                  scale: '1',
                  transitionDelay: `${100 + tasks.length * 50}ms`,
                }),
          }}
        >
          Add New Task
        </button>
      </li>
    </ul>
  );
};

export default Tasks;
