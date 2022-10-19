import { NextPage } from 'next';

const Subjects: NextPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Subjects</h1>
      <div className="mt-5 flex flex-wrap gap-4">
        <div className="gradient-card w-full max-w-lg p-3">
          <h2 className="text-xl font-bold">Computer Artitecture</h2>
        </div>
        <div className="gradient-card w-full max-w-lg p-3">
          <h2 className="text-xl font-bold">Computer Artitecture</h2>
        </div>
        <div className="gradient-card w-full max-w-lg p-3">
          <h2 className="text-xl font-bold">Computer Artitecture</h2>
        </div>
        <div className="gradient-card w-full max-w-lg p-3">
          <h2 className="text-xl font-bold">Computer Artitecture</h2>
        </div>
      </div>
    </div>
  );
};

export default Subjects;