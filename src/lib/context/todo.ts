import { createContext } from 'react';
import { taskInterface } from '../../data/tasks';
import { addTaskArgs } from '../hooks/useTodo';

export interface todoContextInterface {
  tasks: taskInterface[];
  addTask: (task: addTaskArgs) => void;
  removeTask: (taskId: number) => void;
}

export const TodoContext = createContext<todoContextInterface>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});
