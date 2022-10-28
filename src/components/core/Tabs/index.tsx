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
          className={`absolute top-0 z-0 h-[calc(100%-22px)] translate-y-2 rounded-lg bg-primary transition-all duration-300 ${
            hover ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width, left }}
        />
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`btn z-10 rounded-none border-0 border-b-2 bg-transparent px-5 duration-300 hover:btn-primary hover:!bg-transparent focus:btn-primary focus:!bg-transparent focus:!outline-none ${
              tab.value === value
                ? 'border-primary text-base-content hover:!border-primary'
                : 'border-transparent text-base-content/70 hover:!border-transparent focus:!border-transparent '
            }`}
            onClick={() => setValue(tab.value)}
            onMouseEnter={(e) => {
              setWidth(e.currentTarget.offsetWidth);
              setLeft(e.currentTarget.offsetLeft);
              setHover(true);
            }}
            onFocus={(e) => {
              setWidth(e.currentTarget.offsetWidth);
              setLeft(e.currentTarget.offsetLeft);
              setHover(true);
            }}
            onMouseLeave={() => setHover(false)}
            onBlur={() => setHover(false)}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
