import { NextPage } from 'next';
import RelaxingWalk from '../../icons/illustrations/RelaxingWalk';

const Results: NextPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex h-20 w-full items-center pl-2 text-3xl font-bold">
        Results
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="mt-10 w-full max-w-md rounded-2xl border-2 border-primary/20 bg-base-content/5 p-10">
          <RelaxingWalk />
        </div>
        <h2 className="text-center text-lg font-bold">
          No Uppcoming Result has been decalred!!! 😄😄 <br />
          Just go for walk with your pet... 🐕️🐕️
        </h2>
      </div>
    </div>
  );
};

export default Results;
