import {
  Announcement,
  Attendance,
  ClassSchedule,
  ExamSchedule,
  News,
  UpcomingEvents,
} from '@/components/dashboard/Home';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      {/* <div className="flex max-w-7xl flex-wrap gap-5 px-3 md:px-5">
        <div className="flex flex-1 flex-col flex-wrap gap-5">
          <Attendance />
          <UpcomingEvents />
        </div>
        <div className="flex  flex-1  flex-col flex-wrap gap-5">
          <ClassSchedule />
          <ExamSchedule />
        </div>
        <div className="flex  flex-1  flex-col flex-wrap gap-5">
          <Announcement />
          <News />
        </div>
      </div> */}
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          <Grid gap={2} display="flex" flexDirection="column">
            <Attendance />
            <UpcomingEvents />
          </Grid>
          <Grid gap={2} display="flex" flexDirection="column">
            <ClassSchedule />
            <ExamSchedule />
          </Grid>
          <Grid gap={2} display="flex" flexDirection="column">
            <Announcement />
            <News />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
