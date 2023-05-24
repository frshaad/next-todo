import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

type TaskState = {
  tasks: Task[]
  addTask: (title: string) => void
  deleteTask: (taskId: string) => void
  toggleTaskDone: (taskId: string) => void
  clearCompeletedTasks: () => void
  checkTasksDone: () => void
  toggleImportance: (taskId: string) => void
  toggleExpandCard: (taskId: string) => void
  addLink: (taskId: string, link: string) => void
  removeLink: (taskId: string) => void
  addStep: (taskId: string, payload: string) => void
  toggleStepDone: (stepId: string) => void
  removeStep: (stepId: string) => void
  addNote: (taskId: string, payload: string) => void
}

const useTasks = create<TaskState>((set) => ({
  tasks: [
    {
      id: uuidv4(),
      title: 'Task num 1',
      isTaskDone: false,
      isImportant: false,
      steps: [
        { id: uuidv4(), title: 'step 1.1', isStepDone: false },
        { id: uuidv4(), title: 'step 1.2', isStepDone: true },
        { id: uuidv4(), title: 'step 1.3', isStepDone: false }
      ],
      isCardExpanded: true,
      link: 'https://open.spotify.com/search/morning/playlists',
      note: ''
    },
    {
      id: uuidv4(),
      title: 'Task num 2',
      isTaskDone: true,
      isImportant: false,
      isCardExpanded: false,
      link: 'https://www.google.com/',
      steps: [],
      note: ''
    },
    {
      id: uuidv4(),
      title: 'Task num 3',
      isTaskDone: false,
      isImportant: true,
      steps: [
        { id: uuidv4(), title: 'step 2.1', isStepDone: true },
        { id: uuidv4(), title: 'step 2.2', isStepDone: false }
      ],
      isCardExpanded: false,
      note: 'Hello Farshad!!!',
      link: ''
    },
    {
      id: uuidv4(),
      title: 'Task num 4',
      isTaskDone: true,
      isCardExpanded: false,
      steps: [],
      note: '',
      link: ''
    }
  ],

  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: uuidv4(),
          title,
          isTaskDone: false,
          isCardExpanded: false,
          steps: [],
          note: '',
          link: ''
        }
      ]
    })),

  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId)
    })),

  toggleTaskDone: (taskId) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isTaskDone: !task.isTaskDone } : task
      )
    }))
  },

  clearCompeletedTasks: () =>
    set((state) => ({
      tasks: state.tasks.filter((task) => !task.isTaskDone)
    })),

  checkTasksDone: () =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.isTaskDone ? task : { ...task, isTaskDone: true }
      )
    })),

  toggleImportance: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isImportant: !task.isImportant } : task
      )
    })),

  toggleExpandCard: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, isCardExpanded: !task.isCardExpanded }
          : { ...task, isCardExpanded: false }
      )
    })),

  addLink: (taskId, newLink) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              link: newLink
            }
          : task
      )
    })),

  removeLink: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, link: '' } : task
      )
    })),

  addStep: (taskId, payload) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              steps: [
                ...task.steps,
                { id: uuidv4(), isStepDone: false, title: payload }
              ]
            }
          : task
      )
    })),

  toggleStepDone: (stepId) => set((state) => ({})),
  removeStep: (stepId) => set((state) => ({})),

  addNote: (taskId, payload) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              note: payload
            }
          : task
      )
    }))
}))

export default useTasks
