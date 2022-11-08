import { Paper } from '@mui/material';
import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';

const News: FC = () => {
  // extracting news data from context
  const { news } = useContext(UserContext);
  return (
    <div className="flex max-w-lg shrink-0 flex-col gap-3 font-bold">
      <h2 className="text-xl font-bold text-base-content">News of AI</h2>
      {news.map((item) => (
        <Paper variant="outlined" className="space-y-1 p-3 px-5" key={item.id}>
          <div className="text-sm font-semibold text-base-content/70">
            {item.date}
          </div>
          <p>{item.name}</p>
        </Paper>
      ))}
    </div>
  );
};
export default News;
