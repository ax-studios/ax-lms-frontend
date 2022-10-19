import { NextPage } from 'next';
import ComposeMusic from '../../icons/illustrations/ComposeMusic';

const Exam: NextPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex h-20 w-full items-center pl-2 text-3xl font-bold">
        Exam
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
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
