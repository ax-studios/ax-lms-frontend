import { useSettings } from '@/lib/hooks/useSettings';
import React, { FC } from 'react';

const DefaultLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { theme } = useSettings();
  return <div data-theme={theme}>{children}</div>;
};

export default DefaultLayout;
