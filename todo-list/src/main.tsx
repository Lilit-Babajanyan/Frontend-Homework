import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ToDoContextProvider } from "./context/todoContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </StrictMode>,
);
