export default function BalanceCard({ summary }) {
  const { totalIncome = 0, totalExpense = 0, balance = 0 } = summary;

  return (
    <div className="balance-card">
      <div className="balance-title">Current Net Balance</div>
      <div className="balance-amount">
        {balance < 0 ? '-' : ''}${Math.abs(balance).toFixed(2)}
      </div>

      <div className="income-expense-grid">
        <div className="inc-exp-item income">
          <h4>Total Income</h4>
          <p>+${totalIncome.toFixed(2)}</p>
        </div>
        <div className="inc-exp-item expense">
          <h4>Total Expense</h4>
          <p>-${totalExpense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
