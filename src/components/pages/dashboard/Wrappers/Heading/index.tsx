import { FC } from 'react';

const Heading: FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className="flex h-20 w-full items-center px-2 text-3xl font-bold md:px-5">
      {title}
    </h1>
  );
};

export default Heading;
