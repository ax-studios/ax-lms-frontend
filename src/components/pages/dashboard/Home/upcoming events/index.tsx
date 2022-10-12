import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';
import PlusIcon from '../../../../../icons/PlusIcon';
import CalenderIcon from '../../../../../icons/Sidebar Icons/CalenderIcon';
import { IconWrapper } from '../../../../core';

const UpcomingEvents: FC = () => {
  const { events } = useContext(UserContext);
  return (
    <div className="flex w-full max-w-sm shrink-0 flex-col gap-3 font-bold">
      <h2 className="mb-2 text-3xl font-bold text-base-content">
        Upcoming Events
      </h2>
      <div className="flex items-center justify-center gap-1 rounded-2xl  bg-primary py-4 text-center text-base-300 shadow-lg shadow-primary/30 transition-all duration-200 hover:shadow-xl">
        <IconWrapper height={35} width={35}>
          <CalenderIcon />
        </IconWrapper>
        Go to Calendar
      </div>

      {events.map((event) => (
        <div
          key={event.id}
          className="gradient-card flex flex-col gap-1 p-3 px-5"
        >
          <span className="text-sm font-semibold text-base-content/70">
            {event.date}
          </span>
          <span className="">{event.name}</span>
        </div>
      ))}
      <div className="flex items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-primary border-base-content/10 bg-gradient-to-br from-base-content/20 via-base-content/10 to-white/0 py-5 text-center text-primary shadow-lg shadow-primary/10 hover:shadow-primary/20">
        <IconWrapper>
          <PlusIcon />
        </IconWrapper>
        <span>Add an Event</span>
      </div>
    </div>
  );
};
export default UpcomingEvents;
