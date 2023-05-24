import { v4 as uuidv4 } from 'uuid'

const initialTasks: Task[] = [
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
]

export default initialTasks
