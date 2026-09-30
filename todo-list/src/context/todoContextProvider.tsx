import React, { useState } from "react";
import type { task } from "./types";
import { ToDoContext } from "./todoContext";

type ProviderProps = {
  children: React.ReactNode;
};
export const ToDoContextProvider = ({ children }: ProviderProps) => {
  const [tasks, setTasks] = useState<task[]>([]);

  const addTask = (title: string) => {
    const exists = tasks.some((task) => task.title === title);

    if (exists) {
      return "This task already exists";
    }
    const newTask: task = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    return "Added!";
  };

  const completeTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: true,
          };
        }

        return task;
      }),
    );
    return "Done!";
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <ToDoContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
      {children}
    </ToDoContext.Provider>
  );
};
