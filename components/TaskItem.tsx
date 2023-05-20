import useStore from '@/store';

const TaskItem = ({ id, isTaskDone, title }: Task) => {
  const { deleteTask, toggleTaskDone } = useStore();

  const toggleExpandedTaskCard = () => {};

  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-md border p-4 shadow-sm transition hover:shadow-md dark:border-slate-600 ${
        isTaskDone ? 'opacity-60' : ''
      }`}
      onClick={toggleExpandedTaskCard}
    >
      <input
        type='checkbox'
        checked={isTaskDone}
        className='checkbox'
        onClick={() => toggleTaskDone(id)}
        readOnly
        title={isTaskDone ? 'Uncheck the task' : 'Check the task'}
      />

      <div>
        <h3
          className={`select-none text-lg dark:text-white ${
            isTaskDone ? 'line-through' : ''
          }`}
        >
          {title}
        </h3>
      </div>
      <div></div>
    </div>
  );
};

export default TaskItem;
