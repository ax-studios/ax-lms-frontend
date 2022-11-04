import dayjs, { Dayjs } from 'dayjs';
import React, { FC, useContext, useEffect, useState } from 'react';
import { ArrowIcon } from '../../../../../icons';
import CalenderContext from '../../../../../lib/context/calender/CalenderContext';
import { getMonth } from '../../../../../lib/utils/calender';

const SmallCalendar: FC = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(CalenderContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth(): void {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth(): void {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }
  function getDayClass(day: Dayjs): string {
    const format = 'DD-MM-YY';
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected !== null ? daySelected.format(format) : null;
    if (nowDay === currDay) {
      return 'bg-blue-500 rounded-full text-white';
    } else if (currDay === slcDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold';
    } else {
      return '';
    }
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
        </p>
        <div>
          <button className="btn btn-circle" onClick={handlePrevMonth}>
            <ArrowIcon />
          </button>
          <button className="btn btn-circle" onClick={handleNextMonth}>
            <span className="rotate-180 ">
              <ArrowIcon />
            </span>
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="py-1 text-center text-sm">
            {day.format('dd').charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`w-full py-1 ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format('D')}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
