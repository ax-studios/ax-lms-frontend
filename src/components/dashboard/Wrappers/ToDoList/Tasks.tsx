import { useSettings } from '@/lib/hooks/useSettings';
import { useTodo } from '@/lib/hooks/useTodo';
import {
  Create as CreateIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';

const Tasks: FC = () => {
  const { toDoCollapsed } = useSettings();
  const { tasks, removeTask, setEditKey } = useTodo();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };
  return (
    <div
      className={`flex flex-col gap-4 overflow-y-auto overflow-x-hidden px-4 transition-all duration-300  ${
        toDoCollapsed
          ? 'mt-0 h-0'
          : 'h-[calc(80vh-80px-16px)] pb-5 lg:h-full lg:flex-grow lg:pb-2'
      }`}
    >
      {tasks.length > 0 ? (
        tasks.map((task, i) => (
          <Task
            delay={100 + i * 50}
            key={task.id}
            task={task}
            menuOpen={open}
            onClick={handleClick}
          />
        ))
      ) : (
        <div className="mx-auto">No Task found add new one</div>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ p: 0 }}
        MenuListProps={{
          'aria-labelledby': 'user-menu',
        }}
      >
        <MenuItem
          onClick={() => {
            if (anchorEl === null) console.log('Invalid Menu Open');
            const task = anchorEl?.closest('[data-taskId]') as HTMLElement;
            const taskId = task?.dataset.taskid;
            if (taskId != null) removeTask(+taskId);
            setAnchorEl(null);
          }}
          sx={{
            p: '8px',
          }}
        >
          <ListItemIcon>
            <DeleteIcon color="error" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (anchorEl === null) console.log('Invalid Menu Open');
            const task = anchorEl?.closest('[data-taskId]') as HTMLElement;
            const taskId = task?.dataset.taskid;
            if (taskId != null) setEditKey(+taskId);
            setAnchorEl(null);
          }}
          sx={{
            p: '8px',
          }}
        >
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>
      </Menu>
      <AddTask />
    </div>
  );
};

export default Tasks;
