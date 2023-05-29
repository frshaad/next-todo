import useTasks from '@/hooks/useTasks'

import Input from './Input'
import LinkShow from './LinkShow'

type Props = {
  taskId: string
  link: string
}
export default function Link({ taskId, link }: Props) {
  const { addLink } = useTasks()

  if (link.length !== 0) {
    return (
      <div className="flex flex-col gap-3">
        <h4 className="font-medium">Link</h4>
        <LinkShow link={link} id={taskId} />
      </div>
    )
  }

  return <Input taskId={taskId} placeholder="Add a link" fallbackFn={addLink} />
}
