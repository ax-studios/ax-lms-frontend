import { createContext } from 'react';
import announcements from './announcements';
import attendance from './attendance';
import classSchedule from './class-schedule';
import examSchedule from './examSchedule';
import news from './news';
import tasks from './tasks';
import events from './upcoming_events';

export const UserData = {
  name: 'Chandraprakash Darji',
  enrollmentID: '21C22004',
  applicationNo: '-',
  tagline: 'React Developer',
  location: 'Vadodara, Gujarat, India',
  type: 'student',
  branch:
    'B.tech in Computer Science and Engineering ( Artificial Intelligence )',
  department: 'School of Computer Science Engineering and Technology',
  currentSemister: 3,
  batchYear: 2021,
  banner:
    'https://user-images.githubusercontent.com/93640141/154883570-4886fb9e-8a31-4eae-bd99-5f4b70d9c44b.png',
  profileURL: 'https://www.github.com/Chandraprakash-Darji.png',
  officalPhotoURL: 'https://www.github.com/Chandraprakash-Darji.png',
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
  tasks,
  examSchedule,
  announcements,
  events,
  classSchedule,
  attendance,
  news,
};
export const UserContext = createContext<typeof UserData>(UserData);
