import { Route, Routes } from "react-router-dom";
import { FC } from "react";
import Layout from "../layouts/Layout";
import HomePage from "../pages/HomePage";
import Wallets from "../pages/Wallets";
import Transactions from "../pages/TransactionsPage";
import Settings from "../pages/SettingsPage";
import LandingPage from "../pages/LandingPage";
import ProtectedRoute from "./ProtectedRoute";
import UserSettings from "../components/ui/settings/UserSettings";
import ForgetPassword from "../components/ui/settings/ChangePassword";
import NotificationCenter from "../components/ui/settings/NotificationCenter";
import LanguageRegion from "../components/ui/settings/LanguageRegion";
import NotFoundPage from "../pages/NotFound";

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
        <Route path="wallets" element={<Wallets />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="settings" element={<Settings />}>
          <Route index element={<UserSettings />} />
          <Route path="resetpassword" element={<ForgetPassword />} />
          <Route path="notifications" element={<NotificationCenter />} />
          <Route path="langsetting" element={<LanguageRegion />} />
        </Route>
      </Route>

      {/* 🌐 Public route */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
