import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

type TaskState = {
  tasks: Task[]
  addTask: (title: string) => void
  deleteTask: (taskId: string) => void
  toggleTaskDone: (taskId: string) => void
}

const useStore = create<TaskState>(set => ({
  tasks: [
    { id: uuidv4(), title: 'Task num 1', isTaskDone: false },
    { id: uuidv4(), title: 'Task num 1', isTaskDone: true },
  ],

  addTask: title =>
    set(state => ({
      tasks: [...state.tasks, { id: uuidv4(), title, isTaskDone: false }],
    })),

  deleteTask: taskId =>
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== taskId),
    })),

  toggleTaskDone: taskId => {
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, isTaskDone: !task.isTaskDone } : task
      ),
    }))
  },
}))

export default useStore
