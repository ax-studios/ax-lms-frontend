import { NextPage } from 'next';
import { useContext } from 'react';
import AttendeceCard from '../../../components/pages/dashboard/Attendance/AttendanceCard';
import Heading from '../../../components/pages/dashboard/Wrappers/Heading';
import { UserContext } from '../../../data/userData';

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
