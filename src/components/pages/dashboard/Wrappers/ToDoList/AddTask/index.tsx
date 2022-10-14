import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { SettingsContext } from '../../../../../../lib/context/settings';
import { TodoContext } from '../../../../../../lib/context/todo';
import { CTA } from '../../../../../core';

const AddTask: FC = () => {
  const { toDoCollapsed } = useContext(SettingsContext);
  const { addTask, tasks } = useContext(TodoContext);

  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
  const handlePriorityChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPriority(e.target.value as 'high' | 'low' | 'medium');
  };

  const [taskInfo, setTaskInfo] = useState({ name: '', description: '' });
  const handleTaskInfoChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTaskInfo({ ...taskInfo, [e.target.name]: e.target.value });
  };

  const [dueDate, setDueDate] = useState(
    `${new Date().getFullYear()}-${new Date()
      .getMonth()
      .toLocaleString('en-US', {
        minimumIntegerDigits: 2,
      })}-${new Date().getDate().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    })}`
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (taskInfo.name !== '') {
      addTask({ ...taskInfo, dueDate, priority });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="group relative shrink-0 animate-scale overflow-hidden rounded-lg bg-base-200 py-2 text-left text-lg transition-all duration-300"
        style={{
          ...(toDoCollapsed
            ? { scale: '0', visibility: 'hidden' }
            : {
                scale: '1',
                transitionDelay: `${100 + tasks.length * 50}ms`,
              }),
        }}
      >
        <div className="flex flex-col justify-between gap-5 lg:flex-row">
          <div className="flex-1 overflow-hidden text-ellipsis text-xl font-medium">
            Task
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Task"
              className="input input-bordered input-sm mt-2 w-full"
              required
              value={taskInfo.name}
              onChange={handleTaskInfoChange}
            />
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Short Description"
              className="input input-bordered input-md mt-2 w-full"
              value={taskInfo.description}
              onChange={handleTaskInfoChange}
            />
            <div className="input rating input-bordered mt-2  h-16 items-center justify-center gap-1 overflow-visible py-2 font-bold">
              <span className="mr-3">Priority</span>
              <label className="relative flex items-center justify-center before:absolute before:top-2/3 before:left-1/2 before:z-10 before:-translate-x-1/2 before:scale-0 before:rounded-xl before:bg-primary before:py-0.5 before:px-1 before:text-sm before:text-base-300 before:transition-all before:duration-200 before:content-['Low'] hover:before:scale-100">
                <input
                  type="radio"
                  name="priority"
                  value="low"
                  checked={priority === 'low'}
                  onChange={handlePriorityChange}
                  className="mask mask-heart bg-[rgb(100,247,107)]/30 checked:bg-[rgb(100,247,107)]"
                />
              </label>
              <label className="relative flex items-center justify-center before:absolute before:top-2/3 before:left-1/2 before:z-10 before:-translate-x-1/2 before:scale-0 before:rounded-xl before:bg-primary before:py-0.5 before:px-1 before:text-sm before:text-base-300 before:transition-all before:duration-200 before:content-['Medium'] hover:before:scale-100">
                <input
                  type="radio"
                  name="priority"
                  value="medium"
                  checked={priority === 'medium'}
                  onChange={handlePriorityChange}
                  className="mask mask-heart bg-[rgb(247,245,100)]/30 checked:bg-[rgb(247,245,100)]"
                />
              </label>
              <label className="relative flex items-center justify-center before:absolute before:top-2/3 before:left-1/2 before:z-10 before:-translate-x-1/2 before:scale-0 before:rounded-xl before:bg-primary before:py-0.5 before:px-1 before:text-sm before:text-base-300 before:transition-all before:duration-200 before:content-['High'] hover:before:scale-100">
                <input
                  type="radio"
                  name="priority"
                  value="high"
                  checked={priority === 'high'}
                  onChange={handlePriorityChange}
                  className="mask mask-heart bg-[rgb(247,100,100)]/30 checked:bg-[rgb(247,100,100)]"
                />
              </label>
            </div>
          </div>
          <div className="relative inline-flex items-center gap-2 text-xl font-medium lg:flex-col">
            <span>Due</span>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              placeholder="Due Date"
              className="input input-bordered "
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
            <CTA onClick={() => handleSubmit}>Create</CTA>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
