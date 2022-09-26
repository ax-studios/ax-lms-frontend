import { createContext } from 'react';
import examSchedule from './examSchedule';
import tasks from './tasks';

export const UserData = {
  name: 'Chandraprakash Darji',
  enrollmentID: '21C22004',
  type: 'student',
  branch:
    'B.tech in Computer Science and Engineering ( Artificial Intelligence )',
  banner:
    'https://user-images.githubusercontent.com/93640141/154883570-4886fb9e-8a31-4eae-bd99-5f4b70d9c44b.png',
  profileURL: 'https://www.github.com/Chandraprakash-Darji.png',
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
};
export const UserContext = createContext<typeof UserData>(UserData);
