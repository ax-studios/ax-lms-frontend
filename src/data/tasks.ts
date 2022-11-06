import dayjs, { Dayjs } from 'dayjs';

export const taskPrioritys = ['high', 'medium', 'low'] as const;

export type taskPrioritysType = typeof taskPrioritys[number];

export interface taskInterface {
  id: number;
  name: string;
  description: string;
  dueDate: Dayjs;
  priority: taskPrioritysType;
  createdDate: Dayjs;
  modifiedDate: Dayjs;
}

const tasks: taskInterface[] = [
  {
    id: 1,
    name: 'Task 1',
    description: 'Description 1',
    dueDate: dayjs('2020-12-31T00:00:00.000Z'),
    priority: 'high',
    createdDate: dayjs('2020-12-31T00:00:00.000Z'),
    modifiedDate: dayjs('2020-12-31T00:00:00.000Z'),
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'Description 2',
    dueDate: dayjs('2020-12-31T00:00:00.000Z'),
    priority: 'medium',
    createdDate: dayjs('2020-12-31T00:00:00.000Z'),
    modifiedDate: dayjs('2020-12-31T00:00:00.000Z'),
  },
  {
    id: 3,
    name: 'Task 3',
    description:
      'Description 3 This Is large descript of task to see what the Ui changes happen when the text is large',
    dueDate: dayjs('2020-12-31T00:00:00.000Z'),
    priority: 'low',
    createdDate: dayjs('2020-12-31T00:00:00.000Z'),
    modifiedDate: dayjs('2020-12-31T00:00:00.000Z'),
  },
];

export default tasks;
