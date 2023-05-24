import { useState } from 'react'

import useTasks from '@/hooks/useTasks'
import Modal from './modal/Modal'
import Task from './task/Task'
import Steps from './task/Steps'
import Link from './task/Link'
import Note from './task/Note'

export default function TaskCard(task: Task) {
  const { id, isTaskDone, steps, isCardExpanded, link, note } = task
  const { deleteTask } = useTasks()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const modalDeleteMessage = 'Do you really want to remove this task?'

  return (
    <div
      className={`flex flex-col rounded-md border p-4 shadow-sm transition hover:shadow-md dark:border-gray-600 ${
        isTaskDone ? 'opacity-60' : ''
      }`}
    >
      {isModalOpen && (
        <Modal
          message={modalDeleteMessage}
          confirmFn={() => deleteTask(id)}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <Task task={task} setIsModalOpen={setIsModalOpen} />

      {/* Expanded Section */}
      {isCardExpanded && (
        <div className="mt-3 flex flex-col gap-8">
          <Steps steps={steps} taskId={id} />
          <Link link={link} taskId={id} />
          <Note note={note} taskId={id} />
        </div>
      )}
    </div>
  )
}
