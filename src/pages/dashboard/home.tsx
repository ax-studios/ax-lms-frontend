import { FC } from 'react';
import {
  Announcements,
  Attendance,
  ClassSchedule,
  ExamSchedule,
  UpcomingEvents,
  NewsOfAI,
} from '../../components/pages/dashboard/Home';

const Home: FC = () => {
  return (
    <div className="grid grid-flow-row-dense gap-5 p-4 md:grid-cols-3">
      <ExamSchedule />
      <Announcements />
      <div className="row-span-3">
        <NewsOfAI />
      </div>
      <UpcomingEvents />
      <Attendance />
      <ClassSchedule />
    </div>
  );
};

export default Home;
