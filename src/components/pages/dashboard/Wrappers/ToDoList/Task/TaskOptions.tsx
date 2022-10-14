import { FC, useContext } from 'react';
import EditIcon from '../../../../../../icons/EditIcon';
import TrashIcon from '../../../../../../icons/TrashIcon';
import { TodoContext } from '../../../../../../lib/context/todo';

interface Props {
  todoId: number;
}

const TaskOptions: FC<Props> = ({ todoId }) => {
  const { removeTask } = useContext(TodoContext);
  return (
    <ul
      className={
        'menu menu-horizontal absolute top-1/2 right-0 h-full origin-right -translate-y-1/2  scale-0 select-none border border-transparent border-l-base-content/60 bg-base-100 transition-all duration-200 group-hover:scale-100'
      }
    >
      <li>
        <a onClick={() => removeTask(todoId)}>
          <span className="h-5 w-5">
            <TrashIcon />
          </span>
        </a>
      </li>
      <li>
        <a>
          <span className="h-5 w-5">
            <EditIcon />
          </span>
        </a>
      </li>
    </ul>
  );
};

export default TaskOptions;
