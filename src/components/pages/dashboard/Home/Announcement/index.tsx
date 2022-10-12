import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';

const Announcements: FC = () => {
  const { announcements } = useContext(UserContext);
  return (
    <div className="flex max-w-lg shrink-0 flex-col gap-3 font-bold">
      <h2 className="mb-2 text-3xl font-bold text-base-content">
        Announcement
      </h2>
      {announcements.map((announcement) => (
        <div
          key={announcement.id}
          className="gradient-card flex flex-col gap-1 p-3 px-5"
        >
          <span className="text-sm font-semibold text-base-content/70">
            {announcement.date}
          </span>
          <span>{announcement.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Announcements;
