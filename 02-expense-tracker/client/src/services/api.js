const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Request failed');
  return data;
}

export const transactionApi = {
  getAll: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(query ? `/transactions?${query}` : '/transactions');
  },
  create: (item) =>
    request('/transactions', { method: 'POST', body: JSON.stringify(item) }),
  delete: (id) =>
    request(`/transactions/${id}`, { method: 'DELETE' })
};

