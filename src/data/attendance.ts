import ComputerIcon from '../icons/Course Icons/ComputerIcon';
import SystemIcon from '../icons/Course Icons/SystemIcon';
import JavaIcon from '../icons/Course Icons/JavaIcon';
import DatabaseIcon from '../icons/Course Icons/DatabaseIcon';

export interface attendanceInterface {
  id: number;
  course: string;
  days_attended: number;
  days_total: number;
  icon: React.FC<any>;
  color: string;
}

const attendance: attendanceInterface[] = [
  {
    id: 1,
    course: 'Computer Architecture',
    days_attended: 10,
    days_total: 30,
    icon: ComputerIcon,
    color: '#EC485B',
  },

  {
    id: 2,
    course: 'System Software',
    days_attended: 30,
    days_total: 35,
    icon: SystemIcon,
    color: '#5FEC48',
  },

  {
    id: 3,
    course: 'Java OPPS',
    days_attended: 20,
    days_total: 25,
    icon: JavaIcon,
    color: '#4880EC',
  },

  {
    id: 4,
    course: 'DBMS',
    days_attended: 20,
    days_total: 35,
    icon: DatabaseIcon,
    color: '#ECAB48',
  },
];

export default attendance;
