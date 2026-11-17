import { useState, useEffect } from 'react';
import BalanceCard from './components/BalanceCard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { transactionApi } from './services/api';

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({ totalIncome: 0, totalExpense: 0, balance: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const res = await transactionApi.getAll();
      setTransactions(res.data);
      setSummary(res.summary);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (item) => {
    try {
      await transactionApi.create(item);
      loadData();
    } catch (err) {
      alert(`Error creating transaction: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await transactionApi.delete(id);
      loadData();
    } catch (err) {
      alert(`Error deleting transaction: ${err.message}`);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>💰 ExpensePulse</h1>
        <p>Full-Stack MERN Personal Finance & Budget Tracker</p>
      </div>

      <BalanceCard summary={summary} />
      <TransactionForm onAddTransaction={handleAdd} />
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={handleDelete}
        isLoading={isLoading}
      />
    </div>
  );
}

