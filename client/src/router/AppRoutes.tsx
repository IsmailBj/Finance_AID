// src/routes/AppRoutes.tsx
import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import Budgets from "../pages/BudgetPage";
import Transactions from "../pages/TransactionsPage";
import Settings from "../pages/SettingsPage";
import LandingPage from "../pages/LandingPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes: FC = () => {
  return (
    <Routes>
      {/* 🔐 Protected routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="Budgets" element={<Budgets />} />
        <Route path="Transactions" element={<Transactions />} />
        <Route path="Settings" element={<Settings />} />
      </Route>

      {/* 🌐 Public route */}
      <Route path="/Landing" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;
