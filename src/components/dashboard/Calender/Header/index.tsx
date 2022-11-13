import ArrowIcon from '@/icons/ArrowIcon';
import CalenderContext from '@/lib/context/calender/CalenderContext';
import dayjs from 'dayjs';
import { FC, useContext } from 'react';

const CalHeader: FC = () => {
  const { monthIndex, setMonthIndex } = useContext(CalenderContext);
  // Switch to prev month
  function handlePrevMonth(): void {
    setMonthIndex(monthIndex - 1);
  }
  // Handle Next month
  function handleNextMonth(): void {
    setMonthIndex(monthIndex + 1);
  }
  // Handle Today
  function handleReset(): void {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="flex items-center gap-2 pr-2 md:pr-5">
      <button onClick={handleReset} className="btn-outline btn">
        Today
      </button>
      <button className="btn-circle btn" onClick={handlePrevMonth}>
        <ArrowIcon />
      </button>
      <button className="btn-circle btn" onClick={handleNextMonth}>
        <span className="rotate-180 ">
          <ArrowIcon />
        </span>
      </button>
      <h2 className="ml-auto whitespace-nowrap text-xl font-bold text-primary">
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>
    </header>
  );
};
export default CalHeader;
