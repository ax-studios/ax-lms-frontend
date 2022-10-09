import { FC } from 'react';
import Announcements from '../../components/pages/dashboard/Home/Announcement';
import ExamSchedule from '../../components/pages/dashboard/Home/Exam Schedule';
import ClassSchedule from '../../components/pages/dashboard/Home/ClassSchedule';

const Home: FC = () => {
  return (
    <div className="flex gap-5">
      <ExamSchedule />
      <Announcements />
      <ClassSchedule />
    </div>
  );
};

export default Home;
