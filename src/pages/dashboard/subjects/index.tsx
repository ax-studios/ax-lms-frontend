import { NextPage } from 'next';

const Subjects: NextPage = () => {
  return (
    <div className="flex w-full max-w-max flex-wrap gap-4 px-3 md:px-5 ">
      <div className="card max-w-lg flex-1 p-3">
        <h2 className="text-xl font-bold">Computer Artitecture</h2>
      </div>
      <div className="card max-w-lg flex-1 p-3">
        <h2 className="text-xl font-bold">Computer Artitecture</h2>
      </div>
      <div className="card max-w-lg flex-1 p-3">
        <h2 className="text-xl font-bold">Computer Artitecture</h2>
      </div>
      <div className="card max-w-lg flex-1 p-3">
        <h2 className="text-xl font-bold">Computer Artitecture</h2>
      </div>
    </div>
  );
};

export default Subjects;
