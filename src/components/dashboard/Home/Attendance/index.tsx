import AttendancePie from '@/components/dashboard/attendancePie';
import { UserContext } from '@/data/userData';
import TotalIcon from '@/icons/Course Icons/TotalIcon';
import { Paper } from '@mui/material';
import { FC, useContext } from 'react';

const Attendance: FC = () => {
  const { attendance } = useContext(UserContext);
  let totalDaysAttended = 0;
  let totalDaysTotal = 0;
  return (
    <div className="flex max-w-lg flex-col gap-3 font-bold ">
      <h2 className="text-xl font-bold text-base-content">Attendance</h2>
      <Paper variant="outlined" className="space-y-3 px-8 py-5">
        <div className="relative w-max">
          <AttendancePie />
        </div>
        {attendance.map((item) => {
          totalDaysAttended += item.days_attended;
          totalDaysTotal += item.days_total;
          return (
            <div key={item.id} className="flex items-center gap-3 self-start">
              <div className="aspect-square w-8">
                <item.icon />
              </div>
              <span>{item.course}</span>
              <span className="font-normal">{`${item.days_attended}/${item.days_total}`}</span>
            </div>
          );
        })}
        <div className="flex items-center gap-3 self-start">
          <span className="aspect-square w-8">
            <TotalIcon />
          </span>
          <span>Total</span>
          <span className="font-normal">{`${totalDaysAttended}/${totalDaysTotal}`}</span>
        </div>
      </Paper>
    </div>
  );
};
export default Attendance;
