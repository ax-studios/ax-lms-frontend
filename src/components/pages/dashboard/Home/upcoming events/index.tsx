import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';
import PlusIcon from '../../../../../icons/PlusIcon';
import CalenderIcon from '../../../../../icons/Sidebar Icons/CalenderIcon';

const UpcomingEvents: FC = () => {
  const { events } = useContext(UserContext);
  return (
    <div className="flex w-full max-w-sm shrink-0 flex-col gap-3 font-bold md:max-w-[21rem] ">
      <h2 className="text-xl font-bold text-base-content">Upcoming Events</h2>
      <button className="btn btn-primary h-16 items-center gap-1 text-lg shadow-lg shadow-primary/30 hover:shadow-xl">
        <span className="aspect-square h-9">
          <CalenderIcon />
        </span>
        Go to Calendar
      </button>

      {events.map((event) => (
        <div key={event.id} className="card flex flex-col gap-1 p-3 px-5">
          <span className="text-sm font-semibold text-base-content/70">
            {event.date}
          </span>
          <span className="">{event.name}</span>
        </div>
      ))}
      <button className="btn flex h-16  items-center justify-center gap-1 border-2 border-dashed border-primary bg-transparent bg-gradient-to-br from-base-content/20 via-base-content/10 to-white/0 py-5 text-center text-primary shadow-lg shadow-primary/10 hover:border-primary hover:bg-transparent hover:shadow-primary/20">
        <span className="block aspect-square h-6">
          <PlusIcon />
        </span>
        <span>Add an Event</span>
      </button>
    </div>
  );
};
export default UpcomingEvents;
