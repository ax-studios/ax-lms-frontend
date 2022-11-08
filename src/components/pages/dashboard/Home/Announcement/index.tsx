import { Paper } from '@mui/material';
import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';

const Announcement: FC = () => {
  const { announcements } = useContext(UserContext);
  return (
    <div className="flex max-w-lg shrink-0 flex-col gap-3 font-bold">
      <h2 className="text-xl font-bold text-base-content">Announcement</h2>
      {announcements.map((announcement) => (
        <Paper
          variant="outlined"
          key={announcement.id}
          className="space-y-1 p-3 px-5"
        >
          <div className="text-sm font-semibold text-base-content/70">
            {announcement.date}
          </div>
          <p>{announcement.name}</p>
        </Paper>
      ))}
    </div>
  );
};
export default Announcement;
