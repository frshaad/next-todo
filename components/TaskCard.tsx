import { useState } from 'react'

import useTasks from '@/hooks/useTasks'
import Modal from './Modal'
import Task from './task/Task'
import Step from './task/Step'
import LinkShow from './LinkShow'
import Input from './input/Input'

const TaskCard = (task: Task) => {
  const { id, isTaskDone, steps, isCardExpanded, link, note } = task
  const { deleteTask, addStep, addLink, addNote } = useTasks()
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
          {/* Steps */}
          <div className="flex flex-col gap-4">
            {steps && (
              <div className="flex flex-col gap-3">
                <h4 className="font-medium">Steps</h4>
                <div className="flex flex-col gap-1 pl-6">
                  {steps.map((step) => (
                    <Step key={step.id} step={step} />
                  ))}
                </div>
              </div>
            )}
            <div className="pl-6">
              <Input
                taskId={id}
                placeholder="Add a new step"
                fallbackFn={addStep}
              />
            </div>
          </div>

          {/* link */}
          {link.length !== 0 ? (
            <div className="flex flex-col gap-3">
              <h4 className="font-medium">Link</h4>
              <LinkShow link={link} id={id} />
            </div>
          ) : (
            <Input taskId={id} placeholder="Add a link" fallbackFn={addLink} />
          )}

          {/* note */}
          <div className="flex flex-col gap-2">
            <textarea
              className="rounded-md border p-3 text-lg font-normal outline-none dark:text-gray-50"
              name="task-note"
              id="task-note"
              rows={4}
              placeholder="Add a note..."
              value={note}
              onChange={(e) => addNote(id, e.target.value)}
            ></textarea>
            <button className="w-full rounded-md bg-gray-300 p-2 text-black transition hover:bg-gray-400">
              {note.length !== 0 ? 'Update note' : 'Add note'}
            </button>
          </div>

          {/* created date */}
        </div>
      )}
    </div>
  )
}

export default TaskCard
