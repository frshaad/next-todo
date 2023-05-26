import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'

type InputProps = {
  taskId: string
  placeholder: string
  fallbackFn: (taskId: string, payload: string) => void
}

export default function Input({ taskId, fallbackFn, placeholder }: InputProps) {
  const [value, setValue] = useState('')

  const handleAddData = () => {
    if (value.length !== 0) {
      fallbackFn(taskId, value)
      setValue('')
    }
  }

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full rounded-xl border px-5 py-2 pr-16 outline-none transition dark:border-none dark:text-white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && value.length !== 0) {
            handleAddData()
          }
        }}
        placeholder={placeholder}
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full p-1 font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={handleAddData}
        title={placeholder}
      >
        <BsPlus size={28} />
      </button>
    </div>
  )
}
