import { NextPage } from 'next';
import Heading from '../../components/pages/dashboard/Wrappers/Heading';
import ComposeMusic from '../../icons/illustrations/ComposeMusic';

const Exam: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Heading title="Exam" />
      <div className="container mx-auto flex  flex-col items-center justify-center gap-4 px-3 md:px-5">
        <div className="w-full max-w-md rounded-2xl border-2 border-primary/20 bg-base-content/5 p-10">
          <ComposeMusic />
        </div>
        <h2 className="text-center text-lg font-bold">
          No Uppcoming Exam found!!! 😄😄 <br />
          You can Learn some music till that 🎸🎸
        </h2>
      </div>
    </div>
  );
};

export default Exam;
