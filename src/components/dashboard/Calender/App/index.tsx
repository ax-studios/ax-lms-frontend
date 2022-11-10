import { FC, useContext, useEffect, useState } from 'react';
import { CalHeader, CalSidebar, EventModal, Month } from '..';
import CalenderContext from '../../../../lib/context/calender/CalenderContext';
import { getMonth } from '../../../../lib/utils/calender';

const CalApp: FC = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(CalenderContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  console.log(showEventModal);
  return (
    <div className="flex h-screen flex-col">
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
