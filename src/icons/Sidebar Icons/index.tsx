import { ReactElement } from 'react';

import CalenderIcon from './CalenderIcon';
import ExamIcon from './ExamIcon';
import HomeIcon from './HomeIcon';
import LogoutIcon from './LogoutIcon';
import ResultIcon from './ResultIcon';
import SchoolIcon from './SchoolIcon';
import SettingsIcon from './SettingsIcon';

interface sidebarIconListIn {
  [key: string]: ReactElement;
}

export const useSidebarIcons = (): sidebarIconListIn => {
  return {
    home: <HomeIcon />,
    calender: <CalenderIcon />,
    subjects: <SchoolIcon />,
    exam: <ExamIcon />,
    results: <ResultIcon />,
    logout: <LogoutIcon />,
    settings: <SettingsIcon />,
  };
};
