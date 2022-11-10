import { NextPage } from 'next';
import Heading from '../../../components/dashboard/Wrappers/Heading';

const Subjects: NextPage = () => {
  return (
    <div className="">
      <Heading title="Subjects" />
      <div className="container mx-auto mt-5 flex flex-wrap gap-4 px-3 md:px-5 ">
        <div className="card w-full max-w-lg p-3">
          <h2 className="text-xl font-bold">Computer Artitecture</h2>
        </div>
        <div className="card w-full max-w-lg p-3">
          <h2 className="text-xl font-bold">Computer Artitecture</h2>
        </div>
        <div className="card w-full max-w-lg p-3">
          <h2 className="text-xl font-bold">Computer Artitecture</h2>
        </div>
        <div className="card w-full max-w-lg p-3">
          <h2 className="text-xl font-bold">Computer Artitecture</h2>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
