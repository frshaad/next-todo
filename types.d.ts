type Task = {
  id: string
  title: string
  isTaskDone: boolean
  isCardExpanded?: boolean
  note: string
  link: string
  isImportant?: boolean
  steps: Step[]
  createdDate?: Date
}

type Step = {
  id: string
  title: string
  isStepDone: boolean
}

// Zustand useTasks types:
type TasksStore = {
  tasks: Task[]
  addTask: (title: string) => void
  deleteTask: (taskId: string) => void
  editTask: (taskId: string, title: string) => void
  toggleTaskDone: (taskId: string) => void
  clearCompeletedTasks: () => void
  checkTasksDone: () => void
  toggleImportance: (taskId: string) => void
  toggleExpandCard: (taskId: string) => void
  closeExpandedCards: () => void
  addLink: (taskId: string, link: string) => void
  removeLink: (taskId: string) => void
  addStep: (taskId: string, payload: string) => void
  toggleStepDone: (taskId: string, stepId: string) => void
  removeStep: (stepId: string, stepId: string) => void
  addNote: (taskId: string, payload: string) => void
}
