import { FC } from 'react';
import CreateEventButton from './CreateEventButton';
import Labels from './Labels';
import SmallCalendar from './SmallCalendar';
const CalSidebat: FC = () => {
  return (
    <aside className="w-64 p-5">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
};

export default CalSidebat;
