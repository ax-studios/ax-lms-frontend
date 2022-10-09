import { FC } from 'react';
import Announcements from '../../components/pages/dashboard/Home/Announcement';
import ClassSchedule from '../../components/pages/dashboard/Home/ClassSchedule';
import ExamSchedule from '../../components/pages/dashboard/Home/Exam Schedule';

const Home: FC = () => {
  return (
    <div className="flex flex-wrap gap-5 p-4">
      <ExamSchedule />
      <Announcements />
      <ClassSchedule />
    </div>
  );
};

export default Home;
