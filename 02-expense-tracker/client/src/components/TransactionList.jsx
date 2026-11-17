export default function TransactionList({ transactions, onDeleteTransaction, isLoading }) {
  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>Loading records...</div>;
  }

  if (transactions.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '36px', color: '#64748b', background: '#fff', borderRadius: '12px' }}>
        No transactions recorded yet. Add your first income or expense above!
      </div>
    );
  }

  return (
    <div className="card">
      <h3>Recent History ({transactions.length})</h3>
      <div className="transaction-list">
        {transactions.map((t) => (
          <div key={t._id} className={`transaction-item ${t.type}`}>
            <div>
              <div className="trans-title">{t.title}</div>
              <div className="trans-category">{t.category} • {new Date(t.date).toLocaleDateString()}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className={`trans-amount ${t.type}`}>
                {t.type === 'income' ? '+' : '-'}${t.amount.toFixed(2)}
              </span>
              <button
                className="delete-btn"
                onClick={() => onDeleteTransaction(t._id)}
                title="Delete"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
