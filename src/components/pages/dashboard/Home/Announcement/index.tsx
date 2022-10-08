import { FC, useContext } from 'react';
import Card from '..';
import { UserContext } from '../../../../../data/userData';

const Announcements: FC = () => {
  const { announcements } = useContext(UserContext);
  return (
    <div className="flex max-w-lg flex-col gap-3 font-bold">
      <h2 className="mb-2 text-3xl font-bold text-base-content">
        Exam Schedule
      </h2>
      {announcements.map((announcement) => (
        <Card key={announcement.id}>
          <div className="flex flex-col gap-1 p-3 px-5">
            <span className="text-sm font-semibold">{announcement.date}</span>
            <span className="">{announcement.name}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default Announcements;
