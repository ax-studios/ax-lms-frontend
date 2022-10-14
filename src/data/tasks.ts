export interface taskInterface {
  id: number;
  name: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  createdDate: string;
  modifiedDate: string;
}

const tasks: taskInterface[] = [
  {
    id: 1,
    name: 'Task 1',
    description: 'Description 1',
    dueDate: '2020-12-31T00:00:00.000Z',
    priority: 'high',
    createdDate: '2020-12-31T00:00:00.000Z',
    modifiedDate: '2020-12-31T00:00:00.000Z',
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'Description 2',
    dueDate: '2020-12-31T00:00:00.000Z',
    priority: 'medium',
    createdDate: '2020-12-31T00:00:00.000Z',
    modifiedDate: '2020-12-31T00:00:00.000Z',
  },
  {
    id: 3,
    name: 'Task 3',
    description: 'Description 3',
    dueDate: '2020-12-31T00:00:00.000Z',
    priority: 'low',
    createdDate: '2020-12-31T00:00:00.000Z',
    modifiedDate: '2020-12-31T00:00:00.000Z',
  },
];

export default tasks;
