import useTasks from '@/hooks/useTasks';
import Input from './Input';

const TaskInput = () => {
  const { addTask } = useTasks();

  return (
    <Input callbackFn={addTask} placeholder='Add a task' title='Add new task' />
  );
};

export default TaskInput;
