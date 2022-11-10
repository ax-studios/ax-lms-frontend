import { NextPage } from 'next';
import CalApp from '../../../components/dashboard/Calender/App';
import CalenderContextWrapper from '../../../lib/context/calender/CalenderContextWrapper';

const Calender: NextPage = () => {
  return (
    <CalenderContextWrapper>
      <CalApp />
    </CalenderContextWrapper>
  );
};

export default Calender;
