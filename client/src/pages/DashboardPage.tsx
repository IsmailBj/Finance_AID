import { FC } from "react";
import ExpensesChart from "../components/ui/dashboardPanel/ExpensesChard";

const Dashboard: FC = () => {
  return (
    <div className="dashboard">
      <h1>DashBoard</h1>;
      <ExpensesChart />
    </div>
  );
};

export default Dashboard;
