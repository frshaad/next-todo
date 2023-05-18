import { MdClearAll } from 'react-icons/md'

import useStore from '@/store'
import TaskItem from './TaskItem'

const CompletedTasksList = () => {
  const { tasks, clearCompeletedTasks } = useStore()

  return (
    <section className='flex flex-col gap-2'>
      <div className='mb-1 flex items-center justify-between px-2'>
        <h2 className='text-lg font-medium'>Completed Tasks</h2>
        <div className='flex items-center'>
          <button
            onClick={() => clearCompeletedTasks()}
            title='Clear Completed Tasks'
          >
            <MdClearAll size={24} />
          </button>
        </div>
      </div>
      {tasks.map(task => {
        if (task.isTaskDone) {
          return <TaskItem key={task.id} {...task} />
        }
      })}
    </section>
  )
}
export default CompletedTasksList
