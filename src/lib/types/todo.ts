import { Dayjs } from 'dayjs';
import { RefObject } from 'react';
import { taskInterface } from '../../data/tasks';

export interface addTaskArgs {
  name: string;
  description: string;
  dueDate: Dayjs;
  priority: 'high' | 'medium' | 'low';
}

export interface TodoContextType {
  tasks: taskInterface[];
  editKey: number | null;
  editElement: RefObject<HTMLInputElement> | null;
  setEditKey: (key: number | null) => void;
  addTask: (task: addTaskArgs) => void;
  removeTask: (taskId: number) => void;
  editTask: (task: taskInterface) => void;
}
