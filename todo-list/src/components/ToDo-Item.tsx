import { useContext } from "react";
import { ToDoContext } from "../context/todoContext";
import type { task } from "../context/types";


type TaskProps = {
  task: task;
};

export const Task = ({ task }: TaskProps) => {
  const context = useContext(ToDoContext);

  return (
    <article className={`task-row${task.completed ? " is-completed" : ""}`}>
      <p className="task-title">
        <span>{task.title}</span>
        {task.completed && <span className="completed-label">Done!</span>}
      </p>

      <div className="task-actions">
        <button
          className="complete-task-button"
          onClick={() => context?.completeTask(task.id)}
        >
          Complete Task
        </button>

        <button
          className="delete-task-button"
          onClick={() => context?.deleteTask(task.id)}
        >
          Delete Task
        </button>
      </div>
    </article>
  );
};
