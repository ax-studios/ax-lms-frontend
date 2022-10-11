import { FC } from 'react';
import {
  Announcements,
  ClassSchedule,
  ExamSchedule,
  UpcomingEvents,
} from '../../components/pages/dashboard/Home';

const Home: FC = () => {
  return (
    <div className="flex flex-wrap gap-5 p-4">
      <ExamSchedule />
      <Announcements />
      <UpcomingEvents />
      <ClassSchedule />
    </div>
  );
};

export default Home;
