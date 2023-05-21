import { useState } from 'react';

import useTasks from '@/hooks/useTasks';
import Modal from './Modal';
import Task from './task/Task';
import LinkShow from './task/LinkShow';
import Input from './Input';

const TaskItem = (task: Task) => {
  const { deleteTask, toggleExpandCard, addStep } = useTasks();
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
        <div className='mt-3 flex flex-col gap-10'>
          {/* steps */}
          <div className='flex flex-col gap-4'>
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
            <div className='pl-6'>
              <Input
                placeholder='Add a step'
                title='Task steps'
                type='step'
                callbackFnStep={addStep}
                taskId={id}
              />
            </div>
          </div>
          {/* link */}
          {link ? (
            <LinkShow link={link} id={id} />
          ) : (
            <Input
              type='link'
              callbackFn={deleteTask}
              placeholder='Add a link'
              title='Task link'
              taskId={id}
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
