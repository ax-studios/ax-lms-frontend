import { createContext } from 'react';
import announcements from './announcements';
import attendance from './attendance';
import classSchedule from './class-schedule';
import classes from './classes';
import examSchedule from './examSchedule';
import news from './news';
import tasks from './tasks';
import events from './upcoming_events';

export const UserData = {
  name: 'Chandraprakash Ramesh Darji',
  enrollmentID: '21C22004',
  applicationNo: '-',
  tagline: 'React Developer',
  location: 'Vadodara, Gujarat, India',
  type: 'student',
  branch:
    'B.tech in Computer Science and Engineering ( Artificial Intelligence )',
  department: 'School of Computer Science Engineering and Technology',
  currentSemister: 3,
  gender: 'male',
  batchYear: 2021,
  banner:
    'https://user-images.githubusercontent.com/93640141/154883570-4886fb9e-8a31-4eae-bd99-5f4b70d9c44b.png',
  profileURL: 'https://www.github.com/Chandraprakash-Darji.png',
  officalPhotoURL: '',
  skills: ['Ux Design', 'React JS', 'Next JS', 'Typescript', 'Tailwind css'],
  website: 'https://chandraprakash.codes',
  email: 'prakashchandra3786@gmail.com',
  profileSpecialLink: {
    name: 'Portfolio',
    url: 'https://chandraprakash.codes',
  },
  phoneNo: {
    country: '+91',
    number: '8000942571',
  },
  socials: [
    {
      name: 'instagram',
      link: 'https://www.instagram.com/chandraprakash_7852/',
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/chandra_7852',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/chandra-prakash-6065b2224/',
    },
    {
      name: 'github',
      link: 'https://github.com/Chandraprakash-Darji',
    },
  ],
  projects: [
    {
      name: 'Portfolio',
      link: 'https://chandraprakash.codes',
      image:
        'https://user-images.githubusercontent.com/93640141/198384929-9cae4227-3ddc-4c2d-a958-034c6398701d.png',
      tags: ['React', 'Next', 'Tailwind', 'Typescript'],
      id: '1',
    },
    {
      name: 'Flimpire',
      link: 'https://filmpirecp.vercel.app/',
      image:
        'https://user-images.githubusercontent.com/93640141/198385344-8c9a2574-6195-4811-82e6-752084682380.png',
      tags: ['React', 'Next', 'Tailwind', 'Typescript'],
      id: '2',
    },
    {
      name: 'Ax Studios',
      link: 'https://ax-studio.vercel.app/',
      image:
        'https://user-images.githubusercontent.com/93640141/198384925-1c5b652f-19b3-493f-af89-cf68c73ac7b3.png',
      tags: ['React', 'Next', 'Tailwind', 'Typescript'],
      id: '3',
    },
  ],
  tasks,
  examSchedule,
  announcements,
  events,
  classSchedule,
  attendance,
  news,
  classes,
};
export const UserContext = createContext<typeof UserData>(UserData);
