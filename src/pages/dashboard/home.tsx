import { FC } from 'react';
import Announcements from '../../components/pages/dashboard/Home/Announcement';
import ExamSchedule from '../../components/pages/dashboard/Home/Exam Schedule';
import UpcomingEvents from '../../components/pages/dashboard/Home/upcoming events';
import ClassSchedule from '../../components/pages/dashboard/Home/ClassSchedule';

const Home: FC = () => {
  return (
    <div className="flex flex-wrap gap-5 p-4">
      <ExamSchedule />
      <Announcements />
      <ClassSchedule />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
