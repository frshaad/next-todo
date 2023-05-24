import { IconType } from 'react-icons'
import { BsTrash3 } from 'react-icons/bs'

import useTasks from '@/hooks/useTasks'

type StepProps = {
  step: Step
  taskId: string
}

type ModifierIconProps = {
  onClick: () => void
  Icon: IconType
}

export default function Step({ step, taskId }: StepProps) {
  const { toggleStepDone, removeStep } = useTasks()
  const { id: stepId, title: stepTitle, isStepDone } = step

  const ModifierIcon = ({ onClick, Icon }: ModifierIconProps) => (
    <button
      className="rounded-full p-2 transition hover:bg-black/10 hover:text-red-600 dark:hover:text-red-300"
      onClick={onClick}
    >
      <Icon size={18} opacity={0.5} />
    </button>
  )

  return (
    <div className="flex w-full items-center justify-between ">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isStepDone}
          className="checkbox"
          onClick={() => toggleStepDone(taskId, stepId)}
          readOnly
          title={isStepDone ? 'Uncheck the step' : 'Check the step'}
        />
        <div>
          <h3
            className={`select-none text-lg dark:text-white ${
              isStepDone ? 'line-through' : ''
            }`}
          >
            {stepTitle}
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-end gap-1">
        <ModifierIcon
          Icon={BsTrash3}
          onClick={() => removeStep(taskId, stepId)}
        />
      </div>
    </div>
  )
}
