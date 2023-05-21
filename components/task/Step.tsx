import { IconType } from 'react-icons'
import { BsTrash3 } from 'react-icons/bs'

import useTasks from '@/hooks/useTasks'

type StepProps = {
  step: StepState
}

type ModifierIconProps = {
  onClick: () => void
  Icon: IconType
}

const Step = ({ step }: StepProps) => {
  const { toggleStepDone, removeStep } = useTasks()
  const { id, title, isStepDone } = step

  const ModifierIcon = ({ onClick, Icon }: ModifierIconProps) => (
    <button
      className='transition hover:text-red-600 dark:hover:text-red-300 hover:bg-black/10 p-2 rounded-full'
      onClick={onClick}
    >
      <Icon size={18} opacity={0.5} />
    </button>
  )

  return (
    <div className='flex w-full items-center justify-between '>
      <div className='flex items-center gap-3'>
        <input
          type='checkbox'
          checked={isStepDone}
          className='checkbox'
          onClick={() => toggleStepDone(id)}
          readOnly
          title={isStepDone ? 'Uncheck the step' : 'Check the step'}
        />
        <div>
          <h3
            className={`select-none text-lg dark:text-white ${
              isStepDone ? 'line-through' : ''
            }`}
          >
            {title}
          </h3>
        </div>
      </div>

      <div className='flex items-center justify-end gap-1'>
        <ModifierIcon Icon={BsTrash3} onClick={() => removeStep(id)} />
      </div>
    </div>
  )
}

export default Step
