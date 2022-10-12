import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';

const ClassSchedule: FC = () => {
  const { classSchedule } = useContext(UserContext);
  return (
    <div className="flex max-w-lg shrink-0 flex-col gap-3 font-bold">
      <h2 className="mb-2 text-3xl font-bold text-base-content">
        Class Schedule
      </h2>
      {classSchedule.map((schedule) => (
        <div
          key={schedule.id}
          className="gradient-card grid grid-cols-12 items-center gap-5 py-3 px-5"
        >
          <span className="col-span-2 flex flex-col items-start justify-start">
            <span className="text-lg">{schedule.start_time}</span>
            <span className="text-sm font-semibold text-base-content/70">
              {schedule.end_time}
            </span>
          </span>
          <span className="col-span-7 flex w-full flex-col items-start">
            <span className="text-lg">{schedule.name}</span>
            <span className="text-sm font-semibold">
              {schedule.description}
            </span>
          </span>
          <span className="col-span-3 flex w-full justify-end">
            {schedule.class}
          </span>
        </div>
      ))}
    </div>
  );
};
export default ClassSchedule;
