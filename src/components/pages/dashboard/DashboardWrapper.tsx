import { useRouter } from 'next/router';
import { FC } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: FC<DashboardWrapperProps> = ({ children }) => {
  const route = useRouter();
  console.log(route.pathname.split('/'));
  if (route.pathname.split('/')[1] === 'dashboard') {
    return (
      <div>
        <Sidebar />
        <div>
          <Header />
          {children}
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default DashboardWrapper;
