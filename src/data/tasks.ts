export interface taskInterface {
  id: number;
  name: string;
  description: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  createdDate: string;
  modifiedDate: string;
}

const tasks: taskInterface[] = [
  {
    id: 1,
    name: 'Task 1',
    description: 'Description 1',
    dueDate: '2020-12-31T00:00:00.000Z',
    priority: 'High',
    createdDate: '2020-12-31T00:00:00.000Z',
    modifiedDate: '2020-12-31T00:00:00.000Z',
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'Description 2',
    dueDate: '2020-12-31T00:00:00.000Z',
    priority: 'Medium',
    createdDate: '2020-12-31T00:00:00.000Z',
    modifiedDate: '2020-12-31T00:00:00.000Z',
  },
  {
    id: 3,
    name: 'Task 3',
    description:
      'Description 3 This Is large descript of task to see what the Ui changes happen when the text is large',
    dueDate: '2020-12-31T00:00:00.000Z',
    priority: 'Low',
    createdDate: '2020-12-31T00:00:00.000Z',
    modifiedDate: '2020-12-31T00:00:00.000Z',
  },
];

export default tasks;
