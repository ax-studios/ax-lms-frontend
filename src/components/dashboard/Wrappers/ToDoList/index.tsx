import { taskInterface } from '@/data/tasks';
import useLocalStorage from '@/lib/hooks/useLocalStorage';
import { useSettings } from '@/lib/hooks/useSettings';
import { TodoProvider } from '@/lib/hooks/useTodo';
import { addTaskArgs } from '@/lib/types/todo';
import { Paper } from '@mui/material';
import dayjs from 'dayjs';
import { FC, useEffect, useRef, useState } from 'react';
import Tasks from './Tasks';
import ToggleCollapsed from './ToggleCollapsed';

const ToDoList: FC = () => {
  const { toDoCollapsed, toggleToDoCollapsed } = useSettings();
  const [tasks, setTasks] = useLocalStorage<taskInterface[]>('tasks', []);
  const [editKey, setEditKey] = useState<number | null>(null);
  const editElement = useRef<HTMLInputElement>(null);

  const addTask = (task: addTaskArgs): void => {
    setTasks([
      ...tasks,
      {
        ...task,
        id: new Date().getTime(),
        createdDate: dayjs(),
        modifiedDate: dayjs(),
      },
    ]);
  };

  const removeTask = (taskId: number): void => {
    setTasks(tasks.filter((t) => t.id !== taskId));
    if (editKey === taskId) setEditKey(null);
  };

  const editTask = (task: taskInterface): void => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...task,
            modifiedDate: dayjs(),
          };
        }
        return t;
      })
    );
    setEditKey(null);
  };

  useEffect(() => {
    if (editElement.current !== null && editKey !== undefined)
      editElement.current.focus();
  }, [editKey]);

  const contextValue = {
    tasks,
    addTask,
    removeTask,
    editKey,
    setEditKey,
    editElement,
    editTask,
  };

  return (
    <TodoProvider value={contextValue}>
      {/* <div
        className={`fixed left-0 top-0 h-screen w-screen cursor-pointer select-none backdrop-blur transition-all duration-200 ${
          toDoCollapsed
            ? 'invisible opacity-0'
            : 'visible opacity-100 lg:invisible lg:opacity-0'
        }`}
        onClick={toggleToDoCollapsed}
      /> */}
      <Paper
        variant="outlined"
        className={`fixed bottom-0 left-0 flex w-full shrink-0 flex-col rounded-t-[2rem] border border-primary/30 pb-0 !transition-all duration-300 lg:relative lg:h-screen lg:rounded-l-[2rem] lg:rounded-r-none lg:rounded-tr-none ${
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
      </Paper>
    </TodoProvider>
  );
};

export default ToDoList;
