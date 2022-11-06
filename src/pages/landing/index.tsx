import GradeIcon from '@mui/icons-material/Grade';
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../../components/core';

const features = [
  'Curriculum & Timetable Management',
  'Learning Management System',
  'Examination Management',
  'Fee Management (Cashless Campus)',
  'Infrastructure Management',
  'Student can pay their Fees',
  'Teacher can upload their notes',
  'Build using NextJS, Typescript and Tailwind',
  'Apache-2.0 License',
];
const Landing: NextPage = () => {
  return (
    <div className="min-h-screen w-full bg-base-300 text-base-content">
      <section className="pt-5 text-center text-4xl font-bold ">
        <Typography
          variant="h1"
          className="mx-auto flex w-max items-center justify-center py-5 decoration-inherit focus:text-primary focus-visible:outline-primary "
        >
          <div className="mr-2 h-10 w-10">
            <Logo />
          </div>
          Ax Studios
        </Typography>

        <Typography variant="h1" mt={5} maxWidth="700px" mx="auto">
          Open Source University LMS System made with NextJS, Tailwindcss, and
          Typescript.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2 }}
          justifyContent="center"
          mt={5}
          px={2}
        >
          <Button
            variant="outlined"
            LinkComponent="a"
            href="https://github.com/ax-studios"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </Button>
          <Button
            variant="outlined"
            LinkComponent={Link}
            href="/dashboard/home"
          >
            Dashboard
          </Button>
          <Button
            className="bg-primary"
            variant="contained"
            LinkComponent={Link}
            href="/auth/login"
          >
            Login
          </Button>
        </Stack>

        <div className="relative mx-auto mt-10 aspect-video h-full max-h-[30rem] overflow-hidden rounded-3xl border-2 border-primary">
          <Image src="/images/dashboard.png" alt="dashboard" fill />
        </div>
      </section>
      <Stack alignItems="center" mt={5}>
        <Typography mb={2} variant="h2">
          Features
        </Typography>
        <List dense>
          {features.map((item) => (
            <ListItem key={item}>
              <ListItemAvatar>
                <Avatar>
                  <GradeIcon color="primary" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: 'medium',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
      <div className="mt-10 text-center text-xl">
        <Typography variant="h2">💪 Thanks to all Contributors</Typography>
        <Typography variant="subtitle1" mt={1}>
          Thanks a lot for spending your time helping Ax Studios grow. Thanks a
          lot! Keep rocking 🍻
        </Typography>
      </div>

      <Typography variant="h2" className="text-center text-primary" py={5}>
        © Ax Studios 2022
      </Typography>
    </div>
  );
};

export default Landing;
