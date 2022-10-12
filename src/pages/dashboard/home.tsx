import { FC } from 'react';
import {
  Announcements,
  ClassSchedule,
  ExamSchedule,
  UpcomingEvents,
} from '../../components/pages/dashboard/Home';
import Attendance from '../../components/pages/dashboard/Home/Attendance';

const Home: FC = () => {
  return (
    <div className="flex flex-wrap gap-5 p-4">
      <ExamSchedule />
      <Announcements />
      <UpcomingEvents />
      <Attendance/>
      <ClassSchedule />
    </div>
  );
};

export default Home;
