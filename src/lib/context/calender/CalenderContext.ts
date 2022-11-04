import dayjs, { Dayjs } from 'dayjs';
import { createContext } from 'react';
import {
  EventInterface,
  EventReducerInterface,
  labelInterface,
} from '../../types/calender';

interface CalenderContextInterface {
  monthIndex: number;
  setMonthIndex: (set: number) => void;
  smallCalendarMonth: number | null;
  setSmallCalendarMonth: (set: number) => void;
  daySelected: Dayjs;
  setDaySelected: (set: Dayjs) => void;
  showEventModal: boolean;
  setShowEventModal: (set: boolean) => void;
  dispatchCalEvent: ({ type, payload }: EventReducerInterface) => void;
  savedEvents: EventInterface[];
  selectedEvent: EventInterface | null;
  setSelectedEvent: (set: EventInterface | null) => void;
  labels: labelInterface[];
  updateLabel: ({ label, checked }: labelInterface) => void;
  filteredEvents: EventInterface[];
}

const CalenderContext = createContext<CalenderContextInterface>({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: dayjs(),
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: [],
});

export default CalenderContext;
