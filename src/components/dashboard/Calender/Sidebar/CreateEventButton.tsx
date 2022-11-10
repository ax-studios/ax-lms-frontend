import { FC, useContext } from 'react';
import CalenderContext from '../../../../lib/context/calender/CalenderContext';

const CreateEventButton: FC = () => {
  const { setShowEventModal } = useContext(CalenderContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="flex items-center rounded-full border p-2 shadow-md hover:shadow-2xl"
    >
      Create
    </button>
  );
};
export default CreateEventButton;
