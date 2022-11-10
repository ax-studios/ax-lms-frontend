import {
  Announcement,
  Attendance,
  ClassSchedule,
  ExamSchedule,
  News,
  UpcomingEvents,
} from '@/components/dashboard/Home';
import Heading from '@/components/dashboard/Wrappers/Heading';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      <Heading title="Dashboard" />
      <div className="container mx-auto flex flex-wrap gap-5 px-3 md:px-5">
        <div className="flex flex-col flex-wrap gap-5">
          <Attendance />
          <UpcomingEvents />
        </div>
        <div className="flex flex-col flex-wrap gap-5">
          <ClassSchedule />
          <ExamSchedule />
        </div>
        <div className="flex flex-col flex-wrap gap-5">
          <Announcement />
          <News />
        </div>
      </div>
    </div>
  );
};

export default Home;
