const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Universal request wrapper handling JSON formatting and error catching
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `HTTP error! status: ${response.status}`);
  }

  return data;
}

export const taskApi = {
  // Get all tasks (optional filter: { completed: true/false, priority: 'high' })
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const endpoint = query ? `/tasks?${query}` : '/tasks';
    return request(endpoint);
  },

  // Get single task by ID
  getById: (id) => request(`/tasks/${id}`),

  // Create a new task
  create: (taskData) =>
    request('/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData)
    }),

  // Update existing task
  update: (id, updates) =>
    request(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    }),

  // Delete a task
  delete: (id) =>
    request(`/tasks/${id}`, {
      method: 'DELETE'
    })
};

