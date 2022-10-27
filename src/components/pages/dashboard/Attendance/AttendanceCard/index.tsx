import { FC } from 'react';
import Link from '../../../../core/Link';

interface Props {
  classes: Array<{
    id: number;
    name: string;
    attendanceSubmited: boolean;
    presentStudent: number;
    totalStudent: number;
    class: string;
    start_time: string;
    end_time: string;
  }>;
  title: string;
}

const AttendanceCard: FC<Props> = ({ classes, title }) => {
  return (
    <div className="max-w-2xl grow">
      {classes.length > 0 && (
        <>
          <h2 className="mb-2 text-xl font-bold">{title}'s Classes</h2>
          <div className="flex flex-col gap-4">
            {classes.map((classObj) => (
              <div
                key={classObj.id}
                className="card grid grid-cols-12 items-center gap-5 py-3 px-5"
              >
                <span className="col-span-2 flex flex-col items-start justify-start">
                  <span className="text-lg">{classObj.start_time}</span>
                  <span className="text-sm font-semibold text-base-content/70">
                    {classObj.end_time}
                  </span>
                </span>
                <span className="col-span-3 text-lg">{classObj.name}</span>
                <span className="col-span-2">{classObj.class}</span>
                <span className="col-span-2 flex w-full justify-end">
                  {(
                    (classObj.presentStudent / classObj.totalStudent) *
                    100
                  ).toFixed(2)}{' '}
                  %
                </span>
                <Link
                  className="btn btn-primary col-span-3"
                  href={`/dashboard/attendance/${classObj.id}`}
                >
                  {classObj.attendanceSubmited ? 'Update' : 'Fill'} Attendence
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AttendanceCard;
