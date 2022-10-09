import { FC } from 'react';
import Announcements from '../../components/pages/dashboard/Home/Announcement';
import ExamSchedule from '../../components/pages/dashboard/Home/Exam Schedule';
import UpcomingEvents from '../../components/pages/dashboard/Home/upcoming events';
const Home: FC = () => {
  return (
    <div className="flex gap-5">
      <ExamSchedule />
      <Announcements />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
