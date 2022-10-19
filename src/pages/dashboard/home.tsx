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
    <div>
      <h1 className="flex h-20 w-full items-center pl-2 text-3xl font-bold">
        Dashboard
      </h1>
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col flex-wrap gap-5">
          <ClassSchedule />
          <ExamSchedule />
        </div>
        <div className="flex flex-col flex-wrap gap-5">
          <Announcements />
          <News />
        </div>
        <div className="flex flex-1 flex-col flex-wrap gap-5">
          <UpcomingEvents />
          <Attendance />
        </div>
      </div>
    </div>
  );
};

export default Home;
