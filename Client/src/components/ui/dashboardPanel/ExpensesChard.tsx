import { FC } from "react";
import ApexChartPie from "../../charts/PieChard";
const ExpensesChart: FC = () => {
  return (
    <div className="expense-card">
      <h2 className="expense-title">Expenses by category</h2>
      <ApexChartPie />
      <div className="expense-list">
        <div className="expense-item">
          <span className="dot dot-house"></span>
          <span className="label">House</span>
          <span className="value">41,35%</span>
        </div>
        <div className="expense-item">
          <span className="dot dot-credit-card"></span>
          <span className="label">Credit card</span>
          <span className="value">21,51%</span>
        </div>
        <div className="expense-item">
          <span className="dot dot-transportation"></span>
          <span className="label">Transportation</span>
          <span className="value">13,47%</span>
        </div>
        <div className="expense-item">
          <span className="dot dot-groceries"></span>
          <span className="label">Groceries</span>
          <span className="value">9,97%</span>
        </div>
        <div className="expense-item">
          <span className="dot dot-shopping"></span>
          <span className="label">Shopping</span>
          <span className="value">3,35%</span>
        </div>
      </div>
    </div>
  );
};

export default ExpensesChart;
