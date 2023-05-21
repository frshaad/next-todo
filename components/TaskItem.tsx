import { useState } from 'react';
import { BsStar, BsStarFill, BsTrash3, BsPencilSquare } from 'react-icons/bs';

import useTasks from '@/hooks/useTasks';
import Modal from './Modal';

const TaskItem = ({ id, isTaskDone, title, isImportant }: Task) => {
  const { toggleTaskDone, toggleImportance, deleteTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starOpacity, setStarOpacity] = useState<'hidden' | 'block'>('hidden');

  const toggleExpandedTaskCard = () => {};

  const modalDeleteMessage = 'Do you really want to remove this task?';

  return (
    <div
      className={`flex cursor-pointer items-center justify-between rounded-md border p-4 shadow-sm transition hover:shadow-md dark:border-slate-600 ${
        isTaskDone ? 'opacity-60' : ''
      }`}
      onClick={toggleExpandedTaskCard}
      onMouseOut={() => setStarOpacity('hidden')}
      onMouseOver={() => setStarOpacity('block')}
    >
      {isModalOpen && (
        <Modal
          message={modalDeleteMessage}
          confirmFn={() => deleteTask(id)}
          setIsModalOpen={setIsModalOpen}
        />
      )}
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
      <div className='flex items-center justify-end gap-4'>
        <div
          className={`${starOpacity} transition duration-200 hover:text-red-600 dark:hover:text-red-300`}
          onClick={() => setIsModalOpen(true)}
        >
          <BsTrash3 size={20} opacity={0.5} />
        </div>
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
