import { useEffect, useState } from 'react'

import AddTaskInput from '@/components/AddTaskInput'
import CompletedTasksList from '@/components/CompletedTasksList'
import Navbar from '@/components/Navbar'
import OngoingTasksList from '@/components/OngoingTasksList'
import useTasks from '@/hooks/useTasks'

export default function Home() {
  const { tasks, closeExpandedCards } = useTasks()
  const [tasksStore, setTasksStore] = useState<Task[] | undefined>()

  useEffect(() => {
    closeExpandedCards()
  }, [closeExpandedCards])

  useEffect(() => {
    setTasksStore(tasks)
  }, [tasks])

  const isAnyCompletedTask =
    tasksStore?.filter((task) => task.isTaskDone).length !== 0

  return (
    <>
      <div className="relative mx-auto my-10 flex w-11/12 max-w-xl flex-col gap-14">
        <Navbar />
        <AddTaskInput />
        <OngoingTasksList tasks={tasksStore} />
        {isAnyCompletedTask && <CompletedTasksList tasks={tasksStore} />}
      </div>
    </>
  )
}
