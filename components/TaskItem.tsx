import { useState } from 'react';

import useTasks from '@/hooks/useTasks';
import Modal from './Modal';
import Task from './task/Task';
import LinkShow from './task/LinkShow';
import Input from './Input';

const TaskItem = (task: Task) => {
  const { deleteTask, toggleExpandCard } = useTasks();
  const { id, isTaskDone, steps, isCardExpanded, link } = task;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalDeleteMessage = 'Do you really want to remove this task?';

  return (
    <div
      className={`flex cursor-pointer flex-col rounded-md border p-4 shadow-sm transition hover:shadow-md dark:border-slate-600 ${
        isTaskDone ? 'opacity-60' : ''
      }`}
      onClick={() => toggleExpandCard(id)}
      // FIXME: show edit, delete, star icon on hover over card
      // onMouseOut={() => setStarOpacity('hidden')}
      // onMouseOver={() => setStarOpacity('block')}
    >
      {/* Modal */}
      {isModalOpen && (
        <Modal
          message={modalDeleteMessage}
          confirmFn={() => deleteTask(id)}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <div className='flex cursor-pointer items-center justify-between'>
        {/* task */}
        <Task type='task' setIsModalOpen={setIsModalOpen} task={task} />
      </div>
      {isCardExpanded && (
        <div className='mt-3 flex flex-col gap-7'>
          {/* steps */}
          {steps && (
            <div className='flex flex-col gap-3'>
              <h4 className='font-medium'>Steps</h4>
              <div className='flex flex-col gap-1 pl-6'>
                {steps.map(step => (
                  <Task
                    key={step.id}
                    setIsModalOpen={setIsModalOpen}
                    type='step'
                    task={step}
                  />
                ))}
              </div>
            </div>
          )}
          {/* link */}
          {link ? (
            <LinkShow link={link} id={id} />
          ) : (
            <Input
              callbackFn={deleteTask}
              placeholder='Add a link'
              title='Task link'
              type='link'
            />
          )}
          {/* note */}

          {/* created date */}
        </div>
      )}
    </div>
  );
};

export default TaskItem;

//   {/* buttons */}
//   <div className='flex items-center justify-end gap-4'>
//   <div
//     className={`${starOpacity} transition duration-200 hover:text-red-600 dark:hover:text-red-300`}
//     onClick={() => setIsModalOpen(true)}
//   >
//     <BsTrash3 size={20} opacity={0.5} />
//   </div>
//   <div
//     className={`transition duration-200 ${
//       isImportant ? '' : starOpacity
//     }`}
//     onClick={() => toggleImportance(id)}
//   >
//     {isImportant ? (
//       <BsStarFill size={20} color='#FDCC0D' />
//     ) : (
//       <BsStar size={20} opacity={0.5} />
//     )}
//   </div>
// </div>
