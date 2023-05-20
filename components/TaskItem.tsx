import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

import useTasks from '@/hooks/useTasks';

const TaskItem = ({ id, isTaskDone, title, isImportant }: Task) => {
  const { toggleTaskDone, toggleImportance } = useTasks();
  const [starOpacity, setStarOpacity] = useState<'hidden' | 'block'>('hidden');

  const toggleExpandedTaskCard = () => {};

  return (
    <div
      className={`flex cursor-pointer items-center justify-between rounded-md border p-4 shadow-sm transition hover:shadow-md dark:border-slate-600 ${
        isTaskDone ? 'opacity-60' : ''
      }`}
      onClick={toggleExpandedTaskCard}
      onMouseOut={() => setStarOpacity('hidden')}
      onMouseOver={() => setStarOpacity('block')}
    >
      <div className='flex items-center gap-3'>
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
      </div>
      <div>
        <div
          className={`transition duration-200 ${
            isImportant ? '' : starOpacity
          }`}
          onClick={() => toggleImportance(id)}
        >
          {isImportant ? (
            <BsStarFill size={20} color='#FDCC0D' />
          ) : (
            <BsStar size={20} opacity={0.5} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
