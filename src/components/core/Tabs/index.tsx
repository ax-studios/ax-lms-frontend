import { Dispatch, FC, SetStateAction } from 'react';

interface Props {
  tabs: Array<{ name: string; value: string }>;
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
}

const Tabs: FC<Props> = ({ tabs, value, setValue }) => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-1 rounded-full bg-base-content/30 text-lg font-bold">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`btn no-animation rounded-full px-3 py-2 ${
              tab.value === value
                ? 'btn-primary border-0 hover:bg-primary'
                : 'border-0 bg-transparent'
            }`}
            onClick={() => setValue(tab.value)}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
