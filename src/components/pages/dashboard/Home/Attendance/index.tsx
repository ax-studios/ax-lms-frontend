import { FC, useContext } from 'react';
import Card from '..';
import { UserContext } from '../../../../../data/userData';
import TotalIcon from '../../../../../icons/Course Icons/TotalIcon';

const Attendance: FC = () => {
  const { attendance } = useContext(UserContext);
  let totalDaysAttended = 0;
  let totalDaysTotal = 0;
  return (
    <div className="flex max-w-lg flex-col gap-3 font-bold">
      <h2 className="mb-2 text-3xl font-bold text-base-content">Attendance</h2>
      <Card>
        <div className="flex flex-col gap-3 px-8 py-5">
          {attendance.map((item) => {
            totalDaysAttended += item.days_attended;
            totalDaysTotal += item.days_total;
            return (
              <div key={item.id} className="flex items-center gap-3">
                <div className="flex w-8 justify-center">
                  <item.icon />
                </div>
                <span>{item.course}</span>
                <span className="font-normal">{`${item.days_attended}/${item.days_total}`}</span>
              </div>
            );
          })}
          <div className="flex items-center gap-3">
            <TotalIcon />
            <span>Total</span>
            <span className="font-normal">{`${totalDaysAttended}/${totalDaysTotal}`}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Attendance;
