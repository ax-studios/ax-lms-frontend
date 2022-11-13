import CalenderContext from '@/lib/context/calender/CalenderContext';
import { getMonth } from '@/lib/utils/calender';
import { FC, useContext, useEffect, useState } from 'react';
import { CalHeader, CalSidebar, EventModal, Month } from '.';

const CalApp: FC = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(CalenderContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="flex h-full flex-col">
      {showEventModal ? <EventModal /> : null}
      <CalHeader />
      <div className="flex flex-1">
        <CalSidebar />
        <Month month={currenMonth} />
      </div>
    </div>
  );
};

export default CalApp;
