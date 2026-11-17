import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { taskApi } from './services/api';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch tasks when filter changes
  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');
      const params = {};
      if (filter === 'completed') params.completed = 'true';
      if (filter === 'pending') params.completed = 'false';

      const response = await taskApi.getAll(params);
      setTasks(response.data);
    } catch (err) {
      setErrorMessage(`Cannot connect to server: ${err.message}. Make sure backend is running on port 5000.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const response = await taskApi.create(taskData);
      // Prepend newly created task to state
      setTasks((prev) => [response.data, ...prev]);
    } catch (err) {
      setErrorMessage(`Failed to create task: ${err.message}`);
      throw err;
    }
  };

  const handleToggleStatus = async (id, newStatus) => {
    try {
      // Optimistic update
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, completed: newStatus } : t))
      );

      await taskApi.update(id, { completed: newStatus });
    } catch (err) {
      setErrorMessage(`Failed to update task: ${err.message}`);
      // Revert on error
      fetchTasks();
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      // Optimistic delete
      setTasks((prev) => prev.filter((t) => t._id !== id));
      await taskApi.delete(id);
    } catch (err) {
      setErrorMessage(`Failed to delete task: ${err.message}`);
      fetchTasks();
    }
  };

  // Compute summary stats
  const totalCount = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = totalCount - completedCount;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>⚡ TaskFlow</h1>
        <p>Full-Stack MERN Productivity & Task Management System</p>
      </header>

      {errorMessage && (
        <div className="error-banner">
          <span>⚠️ {errorMessage}</span>
          <button
            onClick={() => setErrorMessage('')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Stats Bar */}
      <div className="stats-card">
        <div className="stat-item">
          <div className="stat-value">{totalCount}</div>
          <div className="stat-label">Total Tasks</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ color: 'var(--warning)' }}>
            {pendingCount}
          </div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ color: 'var(--success)' }}>
            {completedCount}
          </div>
          <div className="stat-label">Completed</div>
        </div>
      </div>

      {/* Task Creation Form */}
      <TaskForm onTaskCreated={handleCreateTask} />

      {/* Task Filter & List */}
      <TaskList
        tasks={tasks}
        filter={filter}
        onFilterChange={setFilter}
        onToggleStatus={handleToggleStatus}
        onDeleteTask={handleDeleteTask}
        isLoading={isLoading}
      />
    </div>
  );
}

