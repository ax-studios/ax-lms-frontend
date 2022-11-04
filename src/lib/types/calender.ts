export const ACTIONS = ['PUSH', 'UPDATE', 'DELETE'] as const;

export type ACTIONTYPE = typeof ACTIONS[number];

export interface EventReducerInterface {
  type: ACTIONTYPE;
  payload: EventInterface;
}

export interface EventInterface {
  title: string;
  description: string;
  label: labelsClassesType;
  day: number;
  id: number;
}

export const labelsClasses = [
  'indigo',
  'gray',
  'green',
  'blue',
  'red',
  'purple',
] as const;

export type labelsClassesType = typeof labelsClasses[number];

export interface labelInterface {
  label: labelsClassesType;
  checked: boolean;
}
