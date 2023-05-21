import { useState } from 'react';

import useTasks from '@/hooks/useTasks';
import Modal from './Modal';
import Task from './task/Task';
import Step from './task/Step';
import LinkShow from './LinkShow';

import Input from './input/input';

const TaskCard = (task: Task) => {
  const { deleteTask, addStep, addLink } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id, isTaskDone, steps, isCardExpanded, link } = task;

  const modalDeleteMessage = 'Do you really want to remove this task?';

  return (
    <div
      className={`flex flex-col rounded-md border p-4 shadow-sm transition hover:shadow-md dark:border-gray-600 ${
        isTaskDone ? 'opacity-60' : ''
      }`}
    >
      {isModalOpen && (
        <Modal
          message={modalDeleteMessage}
          confirmFn={() => deleteTask(id)}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <Task task={task} setIsModalOpen={setIsModalOpen} />

      {/* Expanded Section */}
      {isCardExpanded && (
        <div className='mt-3 flex flex-col gap-10'>
          {/* Steps */}
          <div className='flex flex-col gap-4'>
            {steps && (
              <div className='flex flex-col gap-3'>
                <h4 className='font-medium'>Steps</h4>
                <div className='flex flex-col gap-1 pl-6'>
                  {steps.map(step => (
                    <Step key={step.id} step={step} />
                  ))}
                </div>
              </div>
            )}
            <div className='pl-6'>
              <Input
                taskId={id}
                placeholder='Add a new step'
                fallbackFn={addStep}
              />
            </div>
          </div>
          {/* link */}
          {link ? (
            <LinkShow link={link} id={id} />
          ) : (
            <Input taskId={id} placeholder='Add a link' fallbackFn={addLink} />
          )}
          {/* note */}

          {/* created date */}
        </div>
      )}
    </div>
  );
};

export default TaskCard;
