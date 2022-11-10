import { FC, useContext } from 'react';
import EditIcon from '../../../../../icons/EditIcon';
import TrashIcon from '../../../../../icons/TrashIcon';
import { TodoContext } from '../../../../../lib/context/todo';

interface Props {
  todoId: number;
}

const TaskOptions: FC<Props> = ({ todoId }) => {
  const { removeTask, setEditKey } = useContext(TodoContext);
  return (
    <ul
      className={
        'menu menu-horizontal h-full select-none transition-all duration-200 focus-within:scale-100 lg:absolute lg:top-1/2 lg:right-0 lg:origin-right lg:-translate-y-1/2 lg:scale-0 lg:border lg:border-transparent lg:border-l-base-content/60 lg:bg-base-100 lg:group-hover:scale-100'
      }
    >
      <li>
        <a
          onClick={() => removeTask(todoId)}
          onKeyUp={(e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
              removeTask(todoId);
            }
          }}
          tabIndex={0}
          className=""
        >
          <span className="h-5 w-5">
            <TrashIcon />
          </span>
        </a>
      </li>
      <li>
        <a
          onClick={() => setEditKey(todoId)}
          onKeyUp={(e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
              setEditKey(todoId);
            }
          }}
          tabIndex={0}
          className=""
        >
          <span className="h-5 w-5">
            <EditIcon />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default TaskOptions;
