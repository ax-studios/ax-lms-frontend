import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Link from 'next/link';
import * as React from 'react';
import CalenderIcon from '../../../icons/Sidebar Icons/CalenderIcon';
import ExamIcon from '../../../icons/Sidebar Icons/ExamIcon';
import HomeIcon from '../../../icons/Sidebar Icons/HomeIcon';
import SchoolIcon from '../../../icons/Sidebar Icons/SchoolIcon';

const LabelBottomNavigation: React.FC = () => {
  const [value, setValue] = React.useState('home');

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ): void => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} id="bottom-nav" onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        href="/dashboard/home"
        LinkComponent={Link}
        value="home"
        icon={
          <span className={'w-6'}>
            <HomeIcon />
          </span>
        }
      />
      <BottomNavigationAction
        label="Calender"
        value="calender"
        href="/dashboard/calender"
        LinkComponent={Link}
        icon={
          <span className={'w-6'}>
            <CalenderIcon />
          </span>
        }
      />
      <BottomNavigationAction
        label="Subjects"
        value="subject"
        href="/dashboard/subjects"
        LinkComponent={Link}
        icon={
          <span className={'w-6'}>
            <SchoolIcon />
          </span>
        }
      />
      <BottomNavigationAction
        label="Exams"
        value="exam"
        href="/dashboard/exam"
        LinkComponent={Link}
        icon={
          <span className={'w-6'}>
            <ExamIcon />
          </span>
        }
      />
    </BottomNavigation>
  );
};

export default LabelBottomNavigation;
