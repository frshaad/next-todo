import { IconType } from 'react-icons'
import { BsStar, BsStarFill, BsTrash3 } from 'react-icons/bs'
import { BiExpandVertical } from 'react-icons/bi'

import useTasks from '@/hooks/useTasks'

type TaskProps = {
  task: Task
  setIsModalOpen: (arg: boolean) => void
}

type ModifierIconProps = {
  onClick: () => void
  Icon: IconType
}

const Task = ({ task, setIsModalOpen }: TaskProps) => {
  const { toggleTaskDone, toggleImportance, toggleExpandCard } = useTasks()
  const { id, isTaskDone, title, isImportant, isCardExpanded } = task

  const ModifierIcon = ({ onClick, Icon }: ModifierIconProps) => (
    <button
      className="rounded-full p-2 transition hover:bg-black/10 hover:text-red-600 dark:hover:text-red-300"
      onClick={onClick}
    >
      <Icon size={18} opacity={0.5} />
    </button>
  )

  return (
    <div
      className={`flex w-full items-center justify-between ${
        isCardExpanded
          ? 'border-b border-gray-100 pb-4 dark:border-gray-600'
          : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isTaskDone}
          className="checkbox"
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

      <div className="flex items-center justify-end gap-1">
        <ModifierIcon
          Icon={BiExpandVertical}
          onClick={() => toggleExpandCard(id)}
        />
        <ModifierIcon Icon={BsTrash3} onClick={() => setIsModalOpen(true)} />
        <button
          className="px-2 transition"
          onClick={() => toggleImportance(id)}
        >
          {isImportant ? (
            <BsStarFill size={20} color="#FDCC0D" />
          ) : (
            <BsStar size={20} opacity={0.5} />
          )}
        </button>
      </div>
    </div>
  )
}

export default Task
