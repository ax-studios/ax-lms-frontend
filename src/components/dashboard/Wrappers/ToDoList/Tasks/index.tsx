import { FC, useContext } from 'react';
import { SettingsContext } from '../../../../../lib/context/settings';
import { TodoContext } from '../../../../../lib/context/todo';
import useTodo from '../../../../../lib/hooks/useTodo';
import AddTask from '../AddTask';
import Task from '../Task';
const Tasks: FC = () => {
  const { toDoCollapsed } = useContext(SettingsContext);
  const todoHook = useTodo();

  return (
    <TodoContext.Provider value={todoHook}>
      <div
        className={`flex flex-col gap-4 overflow-x-hidden overflow-y-scroll px-4 transition-all duration-300  ${
          toDoCollapsed
            ? 'mt-0 h-0'
            : 'h-[calc(85vh-80px-16px)] pb-5 lg:h-[calc(100vh-80px-20px)] lg:pb-2'
        }`}
      >
        {todoHook.tasks.length > 0 ? (
          todoHook.tasks.map((task, i) => (
            <Task delay={100 + i * 50} key={task.id} task={task} />
          ))
        ) : (
          <div className="mx-auto">No Task found add new one</div>
        )}

        <AddTask />
      </div>
    </TodoContext.Provider>
  );
};

export default Tasks;
