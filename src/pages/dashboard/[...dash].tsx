import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Dash: NextPage = () => {
  const router = useRouter();
  const { dash } = router.query;
  return (
    <div>
      Dash {dash}{' '}
      <button
        // eslint-disable-next-line prettier/prettier
        className="btn-primary drawer-button btn lg:hidden"
      >
        Open drawer
      </button>
    </div>
  );
};

export default Dash;
