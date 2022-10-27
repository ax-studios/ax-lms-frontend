import { Dispatch, FC, SetStateAction, useState } from 'react';

interface Props {
  tabs: Array<{ name: string; value: string }>;
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
}

const Tabs: FC<Props> = ({ tabs, value, setValue }) => {
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="relative flex gap-1 rounded-lg border-2 border-secondary/30 bg-base-content/5 p-2 text-lg font-bold">
        <div
          className={`absolute top-0 z-0 h-[calc(100%-16px)] translate-y-2 rounded-lg bg-primary transition-all duration-300 ${
            hover ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width, left }}
        />
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`btn z-10 rounded-none border-0 border-b-2 bg-transparent px-5 duration-300 hover:border-transparent hover:bg-transparent hover:text-base-300  ${
              tab.value === value
                ? 'border-primary text-base-content'
                : 'border-transparent text-base-content/70'
            }`}
            onClick={() => setValue(tab.value)}
            onMouseEnter={(e) => {
              setWidth(e.currentTarget.offsetWidth);
              setLeft(e.currentTarget.offsetLeft);
              setHover(true);
            }}
            onMouseLeave={() => setHover(false)}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
