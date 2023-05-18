import useStore from '@/store'
import TaskItem from './TaskItem'
import { MdDoneAll } from 'react-icons/md'

const UndoneTasksList = () => {
  const { tasks, checkTasksDone } = useStore()
  const undoneTasksCount = tasks.filter(task => !task.isTaskDone).length

  return (
    <section className='flex flex-col gap-2'>
      {undoneTasksCount === 0 && (
        <h2 className='mt-8 animate-fade-down text-center text-lg font-medium capitalize animate-normal animate-duration-200 animate-fill-both animate-once animate-ease-out'>
          😎 There is nohting to do!
        </h2>
      )}
      {undoneTasksCount !== 0 && (
        <article className='flex flex-col gap-2'>
          <div className='mb-1 flex items-center justify-between px-2'>
            <h2 className='text-lg font-medium'>Ongoing Tasks</h2>
            <button
              title='Clear Completed Tasks'
              onClick={() => checkTasksDone()}
            >
              <MdDoneAll size={24} />
            </button>
          </div>
          <div className='flex flex-col gap-2'>
            {tasks.map(task => {
              if (!task.isTaskDone) {
                return <TaskItem key={task.id} {...task} />
              }
            })}
          </div>
        </article>
      )}
    </section>
  )
}

export default UndoneTasksList