import { taskInterface } from '@/data/tasks';
import { useSettings } from '@/lib/hooks/useSettings';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FC, MouseEvent } from 'react';

interface Props {
  delay: number;
  task: taskInterface;
  menuOpen: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Task: FC<Props> = ({ delay, task, menuOpen, onClick }) => {
  const { toDoCollapsed } = useSettings();
  return (
    <div
      className="group relative z-0 grid min-h-[4rem] shrink-0 animate-scale items-center rounded-lg border border-base-content/70 bg-base-200 pt-2 pl-5 text-left text-lg transition-all duration-300 lg:pb-2 lg:pr-2"
      style={{
        ...(toDoCollapsed
          ? { scale: '0', visibility: 'hidden' }
          : { scale: '1', transitionDelay: `${delay}ms` }),
      }}
      data-taskId={task.id}
    >
      <div
        className={`absolute top-0 left-0 h-full w-2 rounded-l-lg todo-${task.priority}`}
      />
      <div className="flex flex-row flex-wrap justify-between">
        <div className="w-full max-w-full lg:max-w-[300px]">
          <b className="">{task.name}</b>
          <div className=" whitespace-pre text-sm font-medium">
            {task.description}
          </div>
          <div className="text-xs font-medium">
            {new Date(task.dueDate?.toString()).toLocaleString()}
          </div>
        </div>
        <Button
          id="basic-button"
          className="aspect-square h-10 !min-w-0 !p-2"
          aria-controls={menuOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpen ? 'true' : undefined}
          onClick={onClick}
          variant="outlined"
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
};

export default Task;
