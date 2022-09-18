import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import DashboardWrapper from '../components/pages/dashboard/DashboardWrapper';
import { UserContext, UserData } from '../data/userData';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <UserContext.Provider value={UserData}>
      <DashboardWrapper>
        <Component {...pageProps} />
      </DashboardWrapper>
    </UserContext.Provider>
  );
}

export default MyApp;
