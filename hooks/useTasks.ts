import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

type TaskState = {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (taskId: string) => void;
  toggleTaskDone: (taskId: string) => void;
  clearCompeletedTasks: () => void;
  checkTasksDone: () => void;
};

const useTasks = create<TaskState>(set => ({
  tasks: [
    { id: uuidv4(), title: 'Task num 1', isTaskDone: false },
    { id: uuidv4(), title: 'Task num 2', isTaskDone: true },
    { id: uuidv4(), title: 'Task num 3', isTaskDone: false },
    { id: uuidv4(), title: 'Task num 4', isTaskDone: true },
    { id: uuidv4(), title: 'Task num 5', isTaskDone: false },
    { id: uuidv4(), title: 'Task num 6', isTaskDone: true },
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
}));

export default useTasks;
