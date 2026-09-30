import { useContext } from "react";
import { ToDoContext } from "../context/todoContext";
import { Task } from "./ToDo-Item";

export const ToDoList = () => {
  const context = useContext(ToDoContext);

  if (!context) {
    return <div className="task-list-loading">Loading...</div>;
  }
  return (
    <section className="task-list" aria-label="Tasks">
      {context.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  );
};
