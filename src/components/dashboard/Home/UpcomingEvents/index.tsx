import { Button, Paper } from '@mui/material';
import Link from 'next/link';
import { FC, useContext } from 'react';
import { UserContext } from '@/data/userData';
import PlusIcon from '@/icons/PlusIcon';

const UpcomingEvents: FC = () => {
  const { events } = useContext(UserContext);
  return (
    <div className="flex max-w-lg shrink-0 flex-col gap-3 font-bold">
      <h2 className="text-xl font-bold text-base-content">Upcoming Events</h2>

      {events.map((event) => (
        <Paper variant="outlined" key={event.id} className="space-y-1 p-3 px-5">
          <div className="text-sm font-semibold text-base-content/70">
            {event.date}
          </div>
          <p>{event.name}</p>
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
