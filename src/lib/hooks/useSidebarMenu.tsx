import { useContext } from 'react';
import { UserContext } from '../../data/userData';

interface SidebarMenuInterface {
  name: string;
  link: string;
}

/**
 * @description Get the sidebar menu options based on the user type
 *
 * @hook
 *
 * @returns SidebarMenuInterface `{ name: string; link: string; }[]`
 */
const useSidebarMenu = (): SidebarMenuInterface[] => {
  const user = useContext(UserContext);
  switch (user.type) {
    case 'admin':
      return [];
    case 'student':
      return [
        {
          name: 'Home',
          link: 'home',
        },
        {
          name: 'Subjects',
          link: 'subjects',
        },
        {
          name: 'Calender',
          link: 'calender',
        },
        {
          name: 'Results',
          link: 'results',
        },
        {
          name: 'Exam',
          link: 'exam',
        },
      ];
    default:
      return [];
  }
};

export default useSidebarMenu;
