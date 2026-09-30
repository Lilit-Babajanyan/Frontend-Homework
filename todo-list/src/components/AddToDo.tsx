import { useContext, useState } from "react";
import { ToDoContext } from "../context/todoContext";

export const AddToDo = () => {
  const context = useContext(ToDoContext);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="task-composer" aria-label="Add a task">
      <input
        className="task-input"
        placeholder="Enter the task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button
        onClick={() => {
          if (context && title.trim() !== "") {
            const message = context.addTask(title);
            setMessage(message);

            if (message === "") {
              setTitle("");
            }
          }
        }}
        className="add-task-button"
      >
        Add Task
      </button>

      <p className="form-message" role="status">
        {message}
      </p>
    </section>
  );
};
