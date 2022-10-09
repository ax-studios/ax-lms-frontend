import { FC } from 'react';
import Announcements from '../../components/pages/dashboard/Home/Announcement';
import ExamSchedule from '../../components/pages/dashboard/Home/Exam Schedule';

const Home: FC = () => {
  return (
    <div className="flex gap-5 p-4">
      <ExamSchedule />
      <Announcements />
    </div>
  );
};

export default Home;
