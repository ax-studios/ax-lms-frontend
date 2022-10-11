import { FC } from 'react';
import Announcements from '../../components/pages/dashboard/Home/Announcement';
import ClassSchedule from '../../components/pages/dashboard/Home/ClassSchedule';
import Attendance from '../../components/pages/dashboard/Home/Attendance';

const Home: FC = () => {
  return (
    <div className="px-8 py-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
        <ExamSchedule />
        <Announcements />
        <ClassSchedule />
        <Attendance />
      </div>
    </div>
  );
};

export default Home;
