import { NextPage } from 'next';
import CalenderContextWrapper from '@/lib/context/calender/CalenderContextWrapper';
import CalApp from '@/components/dashboard/Calender/CalApp';

const Calender: NextPage = () => {
  return (
    <CalenderContextWrapper>
      <CalApp />
    </CalenderContextWrapper>
  );
};

export default Calender;
