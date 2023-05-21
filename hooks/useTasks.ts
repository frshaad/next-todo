import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type TaskState = {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (taskId: string) => void;
  toggleTaskDone: (taskId: string) => void;
  clearCompeletedTasks: () => void;
  checkTasksDone: () => void;
  toggleImportance: (taskId: string) => void;
  toggleExpandCard: (taskId: string) => void;
  removeLink: (taskId: string) => void;
};

const useTasks = create<TaskState>(set => ({
  tasks: [
    {
      id: uuidv4(),
      title: 'Task num 1',
      isTaskDone: false,
      isImportant: false,
      steps: [
        { id: uuidv4(), title: 'step 1.1', isTaskDone: false },
        { id: uuidv4(), title: 'step 1.2', isTaskDone: true },
        { id: uuidv4(), title: 'step 1.3', isTaskDone: false },
      ],
      isCardExpanded: true,
      link: 'https://open.spotify.com/search/morning/playlists//',
   
    },
    {
      id: uuidv4(),
      title: 'Task num 2',
      isTaskDone: true,
      isImportant: false,
      isCardExpanded: false,
      link: 'https://www.google.com/',
    },
    {
      id: uuidv4(),
      title: 'Task num 3',
      isTaskDone: false,
      isImportant: true,
      steps: [
        { id: uuidv4(), title: 'step 2.1', isTaskDone: true },
        { id: uuidv4(), title: 'step 2.2', isTaskDone: false },
      ],
      isCardExpanded: false,
    },
    {
      id: uuidv4(),
      title: 'Task num 4',
      isTaskDone: true,
      isCardExpanded: false,
    },
  ],

  addTask: title =>
    set(state => ({
      tasks: [
        ...state.tasks,
        { id: uuidv4(), title, isTaskDone: false, isCardExpanded: false },
      ],
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
    }));
  },

  clearCompeletedTasks: () =>
    set(state => ({
      tasks: state.tasks.filter(task => !task.isTaskDone),
    })),

  checkTasksDone: () =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.isTaskDone ? task : { ...task, isTaskDone: true }
      ),
    })),

  toggleImportance: taskId =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, isImportant: !task.isImportant } : task
      ),
    })),

  toggleExpandCard: taskId =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId
          ? { ...task, isCardExpanded: !task.isCardExpanded }
          : { ...task, isCardExpanded: false }
      ),
    })),

  removeLink: taskId =>
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === taskId ? { ...task, link: '' } : task
      ),
    })),
}));

export default useTasks;
