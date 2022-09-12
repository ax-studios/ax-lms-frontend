import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import DashboardWrapper from '../components/pages/dashboard/DashboardWrapper';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <DashboardWrapper>
      <Component {...pageProps} />
    </DashboardWrapper>
  );
}

export default MyApp;
