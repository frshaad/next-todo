import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'

import useTasks from '@/hooks/useTasks'

export default function AddTaskInput() {
  const { addTask } = useTasks()
  const [value, setValue] = useState('')

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full rounded-xl border px-5 py-2 pr-16 outline-none transition dark:border-none dark:text-white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask(value)
            setValue('')
          }
        }}
        placeholder="Add a new task..."
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={() => addTask(value)}
        title="Add a new task"
      >
        <BsPlus size={28} />
      </button>
    </div>
  )
}
