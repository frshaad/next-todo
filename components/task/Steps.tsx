import useTasks from '@/hooks/useTasks'
import Step from './Step'
import Input from './Input'

type Props = {
  steps: Step[]
  taskId: string
}

export default function Steps({ steps, taskId }: Props) {
  const { addStep } = useTasks()

  return (
    <div className="flex flex-col gap-4">
      {steps && (
        <div className="flex flex-col gap-3">
          <h4 className="font-medium">Steps</h4>
          <div className="flex flex-col gap-1 pl-6">
            {steps.map((step) => (
              <Step key={step.id} step={step} taskId={taskId} />
            ))}
          </div>
        </div>
      )}
      <div className="pl-6">
        <Input
          taskId={taskId}
          placeholder="Add a new step"
          fallbackFn={addStep}
        />
      </div>
    </div>
  )
}
