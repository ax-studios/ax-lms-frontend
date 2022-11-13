import AttendeceCard from '@/components/dashboard/Attendance/AttendanceCard';
import { UserContext } from '@/data/userData';
import { NextPage } from 'next';
import { useContext } from 'react';

const Attendance: NextPage = () => {
  const { classes } = useContext(UserContext);
  return (
    <div className="flex w-full max-w-max flex-wrap gap-4 px-3 md:px-5 ">
      <AttendeceCard title="Today" classes={classes.today} />
      <AttendeceCard title="Yesterday" classes={classes.yesterday} />
      <AttendeceCard title="Tomorrow" classes={classes.tomorrow} />
    </div>
  );
};

export default Attendance;
