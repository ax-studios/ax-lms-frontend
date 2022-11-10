import CalenderContext from '@/lib/context/calender/CalenderContext';
import { labelsClasses } from '@/lib/types/calender';
import { FC, FormEvent, useContext, useState } from 'react';

const EventModal: FC = () => {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(CalenderContext);

  const [title, setTitle] = useState(
    selectedEvent != null ? selectedEvent.title : ''
  );
  const [description, setDescription] = useState(
    selectedEvent != null ? selectedEvent.description : ''
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent !== null ? selectedEvent.label : labelsClasses[0]
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent != null ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent != null) {
      dispatchCalEvent({ type: 'UPDATE', payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: 'PUSH', payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-center justify-center">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-1/4 overflow-hidden rounded-lg border-2 bg-base-300 shadow-2xl"
      >
        <header className="flex items-center justify-between bg-base-content px-4 py-2 text-base-300">
          <span>[x]</span>
          <div>
            {selectedEvent !== null && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: 'DELETE',
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="cursor-pointer"
              >
                X
              </span>
            )}
            <button type="button" onClick={() => setShowEventModal(false)}>
              X
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-center gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="input-bordered input  w-full text-xl"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span>⌚</span>
            <p>{daySelected?.format('dddd, MMMM DD')}</p>
            <span>📑</span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="input-bordered input  w-full text-xl"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span>🔖</span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 flex  h-6 w-6 cursor-pointer items-center justify-center rounded-full`}
                >
                  {selectedLabel === lblClass && (
                    <span className="text-sm">✔</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="mt-5 flex justify-end p-3">
          <button
            type="submit"
            className="rounded bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};
export default EventModal;
