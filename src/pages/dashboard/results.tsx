import Heading from '@/components/dashboard/Wrappers/Heading';
import RelaxingWalk from '@/icons/illustrations/RelaxingWalk';
import { NextPage } from 'next';

const Results: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Heading title="Results" />
      <div className="container mx-auto flex  flex-col items-center justify-center gap-4 px-3 md:px-5">
        <div className="card w-full max-w-md p-10">
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
