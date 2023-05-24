import useTasks from '@/hooks/useTasks'

type Props = {
  taskId: string
  note: string
}
export default function Note({ note, taskId }: Props) {
  const { addNote } = useTasks()

  return (
    <div className="flex flex-col gap-2">
      <textarea
        className="rounded-lg p-3 text-lg font-normal outline-none dark:text-gray-50"
        name="task-note"
        id="task-note"
        rows={3}
        placeholder="Add a note..."
        value={note}
        onChange={(e) => addNote(taskId, e.target.value)}
      ></textarea>
    </div>
  )
}
