import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SettingsContext } from '../../lib/context/settings';

const Dash: NextPage = () => {
  const router = useRouter();
  const { dash } = router.query;
  const { toggleDrawer } = useContext(SettingsContext);
  return (
    <div>
      Dash {dash}{' '}
      <button
        onClick={toggleDrawer}
        // eslint-disable-next-line prettier/prettier
        className="btn btn-primary drawer-button lg:hidden"
      >
        Open drawer
      </button>
    </div>
  );
};

export default Dash;
