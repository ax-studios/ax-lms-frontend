import dayjs from 'dayjs';
import {
  FC,
  ReactElement,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import {
  EventInterface,
  EventReducerInterface,
  labelInterface,
} from '../../types/calender';
import CalenderContext from './CalenderContext';
const Events: EventInterface[] = [];

function savedEventsReducer(
  state: EventInterface[],
  { type, payload }: EventReducerInterface
): EventInterface[] {
  switch (type) {
    case 'PUSH':
      return [...state, payload];
    case 'UPDATE':
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case 'DELETE':
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

const CalenderContextWrapper: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState<null | number>(
    null
  );
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventInterface | null>(
    null
  );
  const [labels, setLabels] = useState<labelInterface[]>([]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    Events
  );

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return Array.from(new Set(savedEvents.map((evt) => evt.label))).map(
        (label) => {
          const currentLabel = prevLabels.find((lbl) => lbl.label === label);
          return {
            label,
            checked: currentLabel != null ? currentLabel.checked : true,
          };
        }
      );
    });
  }, [savedEvents]);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  function updateLabel(label: labelInterface): void {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  }

  return (
    <CalenderContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        labels,
        updateLabel,
        filteredEvents,
      }}
    >
      {children}
    </CalenderContext.Provider>
  );
};

export default CalenderContextWrapper;
