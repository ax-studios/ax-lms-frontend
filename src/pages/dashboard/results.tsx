import RelaxingWalk from '@/icons/illustrations/RelaxingWalk';
import { Paper } from '@mui/material';
import { NextPage } from 'next';

const Results: NextPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-5 px-3 md:px-5">
      <Paper className="w-full max-w-md p-10">
        <RelaxingWalk />
      </Paper>
      <h2 className="text-center text-lg font-bold">
        No Uppcoming Result has been decalred!!! 😄😄 <br />
        Just go for walk with your pet... 🐕️🐕️
      </h2>
    </div>
  );
};

export default Results;
