import { useState } from 'react'
import { BsStar, BsStarFill, BsTrash3 } from 'react-icons/bs'

import useTasks from '@/hooks/useTasks'

type Props = {
  task: Task
  setIsModalOpen: (arg: boolean) => void
  type: 'task' | 'step'
}

const Task = ({ type, task, setIsModalOpen }: Props) => {
  const { toggleTaskDone, toggleImportance } = useTasks()
  const [starOpacity, setStarOpacity] = useState<'hidden' | 'block'>('block')
  const { id, isTaskDone, title, isImportant, steps, isCardExpanded } = task

  const handleCheckTask = () => {
    if (type === 'task') {
      toggleTaskDone(id)
    } else if (type === 'step') {
      // toggleStepDone(id)
    }
  }

  return (
    <div
      className={`flex w-full items-center justify-between ${
        isCardExpanded ? 'border-b border-gray-100 pb-4' : ''
      }`}
    >
      <div className='flex items-center gap-3'>
        <input
          type='checkbox'
          checked={isTaskDone}
          className='checkbox'
          onClick={handleCheckTask}
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
        {type === 'task' && (
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
        )}
      </div>
    </div>
  )
}

export default Task
