import { Paper } from '@mui/material';
import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';

const ClassSchedule: FC = () => {
  const { classSchedule } = useContext(UserContext);
  return (
    <div className="max-w-lg shrink-0 space-y-3 font-bold">
      <h2 className="text-xl font-bold text-base-content">Class Schedule</h2>
      {classSchedule.map((schedule) => (
        <Paper
          variant="outlined"
          key={schedule.id}
          className="card grid grid-cols-12 items-center gap-5 py-3 px-5"
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
        </Paper>
      ))}
    </div>
  );
};
export default ClassSchedule;
