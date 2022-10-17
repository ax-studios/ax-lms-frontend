import { FC } from 'react';
import {
  Announcements,
  Attendance,
  ClassSchedule,
  ExamSchedule,
  News,
  UpcomingEvents,
} from '../../components/pages/dashboard/Home';

const Home: FC = () => {
  return (
    <div className="flex flex-wrap gap-5 p-4">
      <div className="flex flex-col flex-wrap gap-5">
        <ClassSchedule />
        <ExamSchedule />
      </div>
      <div className="flex flex-col flex-wrap gap-5">
        <Announcements />
        <News />
      </div>
      <div className="flex flex-col flex-wrap gap-5">
        <UpcomingEvents />
        <Attendance />
      </div>
    </div>
  );
};

export default Home;
