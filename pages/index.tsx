import useStore from '@/store'
import TaskInput from '@/components/TaskInput'
import TaskItem from '@/components/TaskItem'

export default function Home() {
  const { tasks } = useStore()

  return (
    <div className='relative w-11/12 max-w-md mx-auto mt-10 flex flex-col gap-10'>
      <h1 className='text-center text-2xl text-slate-900 font-semibold'>
        Tasks
      </h1>
      <TaskInput />
      <section className='flex flex-col gap-4'>
        {tasks.map(task => (
          <TaskItem key={task.id} {...task} />
        ))}
      </section>
    </div>
  )
}
