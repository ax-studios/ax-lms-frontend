import { FC, useContext } from 'react';
import { SettingsContext } from '../../lib/context/settings';

const Dashboard: FC = () => {
  const { toggleDrawer } = useContext(SettingsContext);

  return (
    <div className="flex min-h-[90vh] items-center justify-center">
      <button
        onClick={toggleDrawer}
        className="btn btn-primary drawer-button lg:hidden"
      >
        Open drawer
      </button>
    </div>
  );
};

export default Dashboard;
