import { Button, Paper } from '@mui/material';
import Link from 'next/link';
import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';
import PlusIcon from '../../../../../icons/PlusIcon';

const UpcomingEvents: FC = () => {
  const { events } = useContext(UserContext);
  return (
    <div className="w-full max-w-sm shrink-0 space-y-3 font-bold md:max-w-[21rem] ">
      <h2 className="text-xl font-bold text-base-content">Upcoming Events</h2>

      {events.map((event) => (
        <Paper key={event.id} variant="outlined" className="space-y-1 p-3 px-5">
          <span className="block text-sm font-semibold text-base-content/70">
            {event.date}
          </span>
          <span className="block">{event.name}</span>
        </Paper>
      ))}
      <Button
        variant="outlined"
        href="/dashboard/calender"
        LinkComponent={Link}
        className="w-full space-x-1"
        sx={{
          borderStyle: 'dashed',
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px ',
          },
        }}
      >
        <span className="block aspect-square h-6">
          <PlusIcon />
        </span>
        <span>Add an Event</span>
      </Button>
    </div>
  );
};
export default UpcomingEvents;
