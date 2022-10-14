import { taskInterface } from '../../data/tasks';
import { todoContextInterface } from '../context/todo';
import useLocalStorage from './useLocalStorage';

export interface addTaskArgs {
  name: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

const useTodo = (): todoContextInterface => {
  const [tasks, setTasks] = useLocalStorage<taskInterface[]>('tasks', []);

  const addTask = (task: addTaskArgs): void => {
    setTasks([
      ...tasks,
      {
        ...task,
        id: new Date().getTime(),
        createdDate: new Date().toUTCString(),
        modifiedDate: new Date().toUTCString(),
      },
    ]);
  };

  const removeTask = (taskId: number): void => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };
  return { tasks, addTask, removeTask };
};

export default useTodo;
