import TaskInput from '@/components/TaskInput';
import UndoneTasksList from '@/components/UndoneTasksList';
import CompletedTasksList from '@/components/CompletedTasksList';
import Navbar from '@/components/Navbar';
import useStore from '@/store';

export default function Home() {
  const { tasks } = useStore();
  const isAnyCompletedTask = tasks.filter(task => task.isTaskDone).length !== 0;

  return (
    <div className='relative mx-auto my-10 flex w-11/12 max-w-lg flex-col gap-14'>
      <Navbar />
      <TaskInput />
      <UndoneTasksList />
      {isAnyCompletedTask && <CompletedTasksList />}
    </div>
  );
}
