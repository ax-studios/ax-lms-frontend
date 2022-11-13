import createCtx from '../helper/useCtx';
import { TodoContextType } from '../types/todo';

// We still have to specify a type, but no default!
export const [useTodo, TodoProvider] = createCtx<TodoContextType>();
