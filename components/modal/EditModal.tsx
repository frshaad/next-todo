import useTasks from '@/hooks/useTasks'
import { useEffect, useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'

type ModalProps = {
  taskId: string
  setIsEditModalOpen: (bool: boolean) => void
}

export default function EditModal({ setIsEditModalOpen, taskId }: ModalProps) {
  const { editTask, tasks } = useTasks()
  const task = tasks.find((task) => task.id === taskId)

  useEffect(() => {
    const inputBox = document.getElementById('inputBox')
    setNewTitle(task ? task?.title : '')
    inputBox?.focus()
  }, [])

  const [newTitle, setNewTitle] = useState('')

  const confirmModal = () => {
    if (newTitle.length !== 0) {
      editTask(taskId, newTitle)
      setIsEditModalOpen(false)
    }
  }

  const clickOutsideCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const modalParent = document.getElementById('modalParent')
    if (e.target === modalParent) {
      setIsEditModalOpen(false)
    }
  }

  return (
    <div
      id="modalParent"
      className="fixed left-0 top-0 z-50 flex h-full w-full animate-fade items-center overflow-auto bg-black/60 animate-normal animate-duration-[150ms] animate-fill-forwards animate-once animate-ease-out"
      onClick={clickOutsideCloseModal}
    >
      <div
        id="editModal"
        className="mx-auto flex w-3/4 max-w-lg -translate-y-1/2 flex-col gap-6 rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-800 dark:text-gray-100"
      >
        <div>
          <h3 className="text-center text-lg font-medium">
            Edit and save the task:
          </h3>
        </div>
        <div className="flex justify-center gap-4 px-5">
          <input
            id="inputBox"
            type="text"
            className="w-full rounded-xl border px-5 py-2 outline-none transition dark:border-none dark:text-white"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && newTitle.length !== 0) {
                editTask(taskId, newTitle)
                setIsEditModalOpen(false)
              }
            }}
            placeholder="Add new task..."
          />
          <button
            className="flex items-center gap-2 rounded bg-slate-500 px-4 py-2 font-medium text-white transition hover:bg-slate-600"
            onClick={confirmModal}
          >
            <BsPencilSquare />
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
