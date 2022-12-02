import ComposeMusic from '@/icons/illustrations/ComposeMusic';
import { Paper } from '@mui/material';
import { NextPage } from 'next';

const Exam: NextPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-5 px-3 md:px-5">
      <Paper className="w-full max-w-md p-10">
        <ComposeMusic />
      </Paper>
      <h2 className="text-center text-lg font-bold">
        No Uppcoming Exam found!!! 😄😄 <br />
        You can Learn some music till that 🎸🎸
      </h2>
    </div>
  );
};

export default Exam;
