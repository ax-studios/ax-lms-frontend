import { createContext, RefObject } from 'react';
import { taskInterface } from '../../data/tasks';
import { addTaskArgs } from '../hooks/useTodo';

export interface todoContextInterface {
  tasks: taskInterface[];
  editKey?: number;
  setEditKey: (key: number | undefined) => void;
  addTask: (task: addTaskArgs) => void;
  removeTask: (taskId: number) => void;
  editTask: (task: taskInterface) => void;
  editElement: RefObject<HTMLInputElement>;
}

export const TodoContext = createContext<todoContextInterface>({
  tasks: [],
  setEditKey: () => {},
  addTask: () => {},
  removeTask: () => {},
  editTask: () => {},
  editElement: { current: null },
});
