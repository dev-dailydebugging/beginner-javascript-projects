import { useState } from 'react';

export default function TransactionForm({ onAddTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food & Dining');

  const categories = {
    income: ['Salary', 'Freelance', 'Investments', 'Gift', 'Other'],
    expense: ['Food & Dining', 'Housing & Rent', 'Utilities', 'Transportation', 'Entertainment', 'Shopping', 'Other']
  };

  const handleTypeSwitch = (selectedType) => {
    setType(selectedType);
    setCategory(categories[selectedType][0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;

    await onAddTransaction({
      title,
      amount: parseFloat(amount),
      type,
      category
    });

    setTitle('');
    setAmount('');
  };

  return (
    <div className="card">
      <h3>Add New Transaction</h3>

      <div className="type-selector">
        <button
          type="button"
          className={`type-btn income ${type === 'income' ? 'active' : ''}`}
          onClick={() => handleTypeSwitch('income')}
        >
          📈 Income
        </button>
        <button
          type="button"
          className={`type-btn expense ${type === 'expense' ? 'active' : ''}`}
          onClick={() => handleTypeSwitch('expense')}
        >
          📉 Expense
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="e.g. Grocery Shopping, Client Invoice"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Amount ($)</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories[type].map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn-submit">
          + Add {type === 'income' ? 'Income' : 'Expense'}
        </button>
      </form>
    </div>
  );
}
