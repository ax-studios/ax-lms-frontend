import { FC, useContext } from 'react';
import Card from '..';
import CalenderIcon from '../../../../../icons/Sidebar Icons/CalenderIcon';
import PlusIcon from '../../../../../icons/PlusIcon';
import { UserContext } from '../../../../../data/userData';
import Link from 'next/link';
import { IconWrapper } from '../../../../core';

const Events: FC = () => {
  const { events } = useContext(UserContext);
  return (
    <div className="flex max-w-lg flex-col gap-3 font-bold">
      <h2 className="mb-2 text-3xl font-bold text-base-content">
        Upcoming Events
      </h2>
      <div className="rounded-2xl border-2 border-base-content/10 bg-blue-500 shadow-lg shadow-lg  shadow-blue-500/50 transition-all duration-200 hover:border-base-content/50 hover:shadow-xl">
        <div className="flex gap-1 p-3 px-5 text-center text-black ">
          <IconWrapper height={35} width={35}>
            <CalenderIcon />
          </IconWrapper>
          Go to Calendar
        </div>
      </div>

      {events.map((event) => (
        <Card key={event.id}>
          <div className="flex flex-col gap-1 p-3 px-5">
            <span className="text-sm font-semibold">{event.date}</span>
            <span className="">{event.name}</span>
          </div>
        </Card>
      ))}
      <div className="rounded-2xl  border-2 border-dashed border-blue-500 border-base-content/10  ">
        <div className="flex gap-1  p-3 px-5 text-center text-blue-500 ">
          <PlusIcon></PlusIcon>
          <Link href={'/'}> Add an Event</Link>
        </div>
      </div>
    </div>
  );
};
export default Events;
