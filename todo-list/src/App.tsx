import "./App.css";
import { AddToDo } from "./components/AddToDo";
import { ToDoList } from "./components/ToDo-List";

function App() {
  return (
    <main className="todo-page">
      <header className="page-heading">
        <p className="eyebrow">A little more organized</p>
        <h1>My Tasks</h1>
      </header>
      <AddToDo />
      <ToDoList />
    </main>
  );
}

export default App;
