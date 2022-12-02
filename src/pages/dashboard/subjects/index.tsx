import { Paper } from '@mui/material';
import { NextPage } from 'next';

const Subjects: NextPage = () => {
  return (
    <div className="flex w-full max-w-max flex-wrap gap-4 py-5 px-3 md:px-5 ">
      <Paper className="max-w-lg flex-1 p-3">
        <h2 className="text-xl font-bold">Computer Artitecture</h2>
      </Paper>
      <Paper className="max-w-lg flex-1 p-3">
        <h2 className="text-xl font-bold">Computer Artitecture</h2>
      </Paper>
      <Paper className="max-w-lg flex-1 p-3">
        <h2 className="text-xl font-bold">Computer Artitecture</h2>
      </Paper>
      <Paper className="max-w-lg flex-1 p-3">
        <h2 className="text-xl font-bold">Computer Artitecture</h2>
      </Paper>
    </div>
  );
};

export default Subjects;
