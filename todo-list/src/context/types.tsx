export type task = {
  id: number;
  title: string;
  completed: boolean;
};

export type contextType = {
  tasks: task[];
  addTask: (title: string) => string;
  completeTask: (id: number) => string;
  deleteTask: (id: number) => void;
};
