import Heading from '@/components/dashboard/Wrappers/Heading';
import AttendeceCard from '@/components/dashboard/Attendance/AttendanceCard';
import { UserContext } from '@/data/userData';
import { NextPage } from 'next';
import { useContext } from 'react';

const Attendance: NextPage = () => {
  const { classes } = useContext(UserContext);
  return (
    <div className="flex flex-col">
      <Heading title="Attendece" />
      <div className="container mx-auto flex w-full flex-wrap gap-4 px-3 md:px-5 ">
        <AttendeceCard title="Today" classes={classes.today} />
        <AttendeceCard title="Yesterday" classes={classes.yesterday} />
        <AttendeceCard title="Tomorrow" classes={classes.tomorrow} />
      </div>
    </div>
  );
};

export default Attendance;
