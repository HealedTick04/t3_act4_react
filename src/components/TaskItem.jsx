
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>

      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        aria-label={`Eliminar ${task.text}`}
        title="Eliminar tarea"
      >
        ×
      </button>
    </li>
  );
}

export default TaskItem;
