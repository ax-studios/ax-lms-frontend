import dayjs, { Dayjs } from 'dayjs';
import { FC, useContext, useEffect, useState } from 'react';
import CalenderContext from '../../../../../lib/context/calender/CalenderContext';
import { EventInterface } from '../../../../../lib/types/calender';

const Day: FC<{ day: Dayjs; rowIdx: number }> = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState<EventInterface[]>([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(CalenderContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format('DD-MM-YY') === day.format('DD-MM-YY')
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass(): string {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : '';
  }
  return (
    <div className="flex flex-col border-2 border-primary">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="mt-1 text-sm">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`my-1 p-1 text-center text-sm  ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 mr-3 mb-1 truncate rounded p-1 text-sm text-base-300`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Day;
