import {
  Button,
  capitalize,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import {
  ChangeEvent,
  FC,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { taskInterface, taskPrioritys } from '@/data/tasks';
import { TodoContext } from '@/lib/context/todo';
import { SettingsContext } from '@/lib/context/settings';

interface taskInputInterface {
  priority: 'low' | 'medium' | 'high';
  name: string;
  description: string;
  dueDate: Dayjs;
}

const intialState: taskInputInterface = {
  priority: 'low',
  name: '',
  description: '',
  dueDate: dayjs(),
};

const AddTask: FC = () => {
  const { toDoCollapsed } = useContext(SettingsContext);
  const { addTask, tasks, editElement, editKey, setEditKey, editTask } =
    useContext(TodoContext);

  const [task, setTask] = useState<taskInputInterface | taskInterface>(
    intialState
  );
  const handleChange = (newDueDate: Dayjs | null): void => {
    if (newDueDate === null) return;
    setTask({ ...task, dueDate: newDueDate });
  };

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (task.name !== '' && task.dueDate !== null) {
      if (editKey !== undefined) {
        editTask(task as taskInterface);
      } else {
        addTask(task);
      }
      setTask(intialState);
    }
  };

  const handleReset = (): void => {
    setEditKey(undefined);
  };

  useEffect(() => {
    if (editKey === undefined) {
      setTask(intialState);
    } else {
      setTask(tasks.filter((t) => t.id === editKey)[0]);
    }
  }, [editKey, tasks]);

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div
        className="group relative shrink-0 animate-scale select-none overflow-hidden rounded-lg py-2 text-left text-lg transition-all duration-300"
        style={{
          ...(toDoCollapsed
            ? { scale: '0', visibility: 'hidden' }
            : {
                scale: '1',
                transitionDelay: `${100 + tasks.length * 50}ms`,
              }),
        }}
      >
        <div className="flex flex-col justify-between gap-5">
          <div className="flex-1 space-y-2 overflow-hidden text-ellipsis text-xl font-medium">
            <TextField
              id="name"
              label="Task"
              variant="filled"
              size="small"
              name="name"
              className="w-full"
              type="text"
              value={task?.name}
              onChange={handleTaskChange}
              required
              inputRef={editElement}
            />
            <TextField
              name="description"
              id="description"
              label="Description"
              multiline
              className="w-full"
              rows={4}
              defaultValue="Default Value"
              variant="filled"
              value={task?.description}
              onChange={handleTaskChange}
            />
            <FormControl>
              <FormLabel id="priority">Priority</FormLabel>
              <RadioGroup
                row
                aria-labelledby="priority"
                onChange={handleTaskChange}
                value={task?.priority}
                name="priority"
              >
                {taskPrioritys.map((priority) => (
                  <FormControlLabel
                    value={priority}
                    control={<Radio />}
                    label={capitalize(priority)}
                    key={priority}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className="relative inline-flex flex-col justify-between gap-4 text-xl font-medium md:flex-row md:items-center">
            <div className="inline-flex items-center gap-4">
              <DateTimePicker
                label="Due Date&Time"
                value={task?.dueDate}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div className="inline-flex items-center gap-4">
              <Button
                className="flex-1 bg-primary"
                onClick={() => handleSubmit}
                type="submit"
                variant="contained"
                size="small"
              >
                {editKey !== undefined ? 'Edit' : 'Create'}
              </Button>
              <Button
                className="flex-1"
                type="reset"
                variant="outlined"
                size="small"
                onClick={() => handleReset}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
