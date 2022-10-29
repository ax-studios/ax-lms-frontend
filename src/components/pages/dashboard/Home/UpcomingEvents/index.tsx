import Link from 'next/link';
import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';
import PlusIcon from '../../../../../icons/PlusIcon';

const UpcomingEvents: FC = () => {
  const { events } = useContext(UserContext);
  return (
    <div className="flex w-full max-w-sm shrink-0 flex-col gap-3 font-bold md:max-w-[21rem] ">
      <h2 className="text-xl font-bold text-base-content">Upcoming Events</h2>

      {events.map((event) => (
        <div key={event.id} className="card flex flex-col gap-1 p-3 px-5">
          <span className="text-sm font-semibold text-base-content/70">
            {event.date}
          </span>
          <span className="">{event.name}</span>
        </div>
      ))}
      <Link
        href="/dashboard/calender"
        className="btn h-16 gap-1 border-2 border-dashed border-primary bg-transparent text-center text-base-content shadow-lg shadow-primary/10 hover:border-primary hover:bg-transparent hover:shadow-primary/20"
      >
        <span className="block aspect-square h-6">
          <PlusIcon />
        </span>
        <span>Add an Event</span>
      </Link>
    </div>
  );
};
export default UpcomingEvents;
