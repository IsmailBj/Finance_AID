import { Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import Budgets from "../pages/BudgetPage";
import Transactions from "../pages/TransactionsPage";
import Settings from "../pages/SettingsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/Budgets" element={<Budgets />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/Settings" element={<Settings />} />
      </Route>
      <Route path="/land" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;
