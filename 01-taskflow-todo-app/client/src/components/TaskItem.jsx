export default function TaskItem({ task, onToggleStatus, onDeleteTask }) {
  const formattedDate = new Date(task.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="task-checkbox"
        checked={task.completed}
        onChange={() => onToggleStatus(task._id, !task.completed)}
        aria-label="Mark task complete"
      />

      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        {task.description && <p className="task-desc">{task.description}</p>}

        <div className="task-meta">
          <span className={`priority-badge priority-${task.priority}`}>
            {task.priority}
          </span>
          <span style={{ color: 'var(--text-muted)' }}>Created {formattedDate}</span>
        </div>
      </div>

      <button
        onClick={() => onDeleteTask(task._id)}
        className="btn btn-danger"
        title="Delete Task"
        aria-label="Delete Task"
      >
        🗑️
      </button>
    </div>
  );
}

