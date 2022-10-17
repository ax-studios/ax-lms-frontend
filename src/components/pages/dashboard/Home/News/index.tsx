import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';

const News: FC = () => {
  // extracting news data from context
  const { news } = useContext(UserContext);
  return (
    <div className="flex max-w-lg shrink-0 flex-col gap-3 font-bold">
      <h2 className="mb-2 text-3xl font-bold text-base-content">News of AI</h2>
      {news.map((item) => (
        <div
          key={item.id}
          className="gradient-card flex flex-col gap-1 p-3 px-5"
        >
          <span className="text-sm font-semibold text-base-content/70">
            {item.date}
          </span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};
export default News;
