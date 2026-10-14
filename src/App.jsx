
import { useState } from "react";
import Header from "./components/Header";
import TaskItem from "./components/TaskItem";
import "./App.css";

const initialTasks = [
  { id: 1, text: "No tengo boca y debo gritar", completed: false },
  { id: 2, text: "Sabías que los libros arden a 451°F", completed: true },
  { id: 3, text: "Despierta, te han encontrado...", completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  function addTask(event) {
    event.preventDefault();

    const text = newTask.trim();
    if (!text) return;

    const task = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, task]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <div className="app-container">
      <Header />

      <main className="task-card">
        <div className="card-heading">
          <div>
            <p className="eyebrow">LISTA DE TAREAS</p>
            <h1>Tareas</h1>
          </div>

          <span className="task-counter">
            {completedCount}/{tasks.length}
          </span>
        </div>

        <p className="task-summary">
          {tasks.length === 0
            ? "Habeces, hay que hacer el trabajo pesado, sabes"
            : completedCount === tasks.length
              ? "¿Tan dificil era terminar este desastre? "
              : `Te quedan ${tasks.length - completedCount} tarea(s) pendiente(s).`}
        </p>

        <form className="task-form" onSubmit={addTask}>
          <input
            type="text"
            placeholder="¿Listo para el trabajo?"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            aria-label="Nueva tarea"
          />
          <button type="submit">Agregar</button>
        </form>

        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>

        <footer className="task-footer">
          <span>{tasks.length} tarea(s) en total</span>
          <button
            className="clear-button"
            onClick={() => setTasks([])}
            disabled={tasks.length === 0}
          >
            Limpiar lista
          </button>
        </footer>
      </main>

      <p className="page-credit">
        Hecho con React + Vite
      </p>
    </div>
  );
}

export default App;
