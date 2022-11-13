import { FC } from 'react';

const Heading: FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className="flex h-20 items-center px-2 text-3xl font-bold capitalize">
      {title}
    </h1>
  );
};

export default Heading;
