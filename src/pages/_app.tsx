import MainLayout from '@/layouts/Mainlayout';
import type { AppProps } from 'next/app';
import { ReactNode, StrictMode } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <StrictMode>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StrictMode>
  );
}

export default MyApp;
