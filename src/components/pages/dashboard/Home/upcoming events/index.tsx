import { FC, useContext } from 'react';
import Card from '..';
import {AiOutlineCalendar} from "react-icons/ai";
// import Eventcard from '../../Home/index';
import { UserContext } from '../../../../../data/userData';
import {AiOutlinePlus} from "react-icons/ai";
const Events: FC = () => {
    const { events } = useContext(UserContext);
    return (
        <div className="flex max-w-lg flex-col gap-3 font-bold">
            <h2 className="mb-2 text-3xl font-bold text-base-content">
                Upcoming Events
            </h2>
                 <div className="rounded-2xl border-2 border-base-content/10 bg-blue-500 shadow-lg shadow-blue-500/50  shadow-lg transition-all duration-200 hover:border-base-content/50 hover:shadow-xl">
                        <div className="flex text-center gap-1 p-3 px-5 text-black ">
                         <AiOutlineCalendar className='text-[30px] '/> Go to Calendar
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
                 <div className="rounded-2xl  border-dashed border-blue-500 border-2 border-base-content/10  ">
                        <div className="flex text-center  gap-1 p-3 px-5 text-blue-500 ">
                         <AiOutlinePlus className='text-[30px]'/>
                         <a href='/' > Add an Event
                         </a>
                      </div>
                    </div>
        </div>
    );
};
export default Events;
