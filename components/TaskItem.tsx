import useStore from '@/store'

const TaskItem = ({ id, isTaskDone, title }: Task) => {
  const { deleteTask, toggleTaskDone } = useStore()

  return (
    <div
      key={id}
      onClick={() => toggleTaskDone(id)}
      className='cursor-pointer p-4 rounded-md border shadow-sm hover:shadow-md hover:scale-[1.01] transition'
    >
      <p>
        {title}...{isTaskDone ? 'Done' : 'Not Yet!'}
      </p>
      <button onClick={() => deleteTask(id)}>DELETE</button>
    </div>
  )
}

export default TaskItem
