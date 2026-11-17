import TaskItem from './TaskItem';

export default function TaskList({
  tasks,
  filter,
  onFilterChange,
  onToggleStatus,
  onDeleteTask,
  isLoading
}) {
  if (isLoading) {
    return <div className="empty-state">⏳ Loading tasks from server...</div>;
  }

  return (
    <div>
      <div className="filter-bar">
        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Showing {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
        </span>

        <div className="filter-group">
          {['all', 'pending', 'completed'].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => onFilterChange(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>
            🎉 No tasks found!
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            {filter === 'completed'
              ? 'You have not completed any tasks yet.'
              : filter === 'pending'
              ? 'Great job! No pending tasks remaining.'
              : 'Add your first task above to get started!'}
          </p>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggleStatus={onToggleStatus}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

