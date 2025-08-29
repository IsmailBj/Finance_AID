import { FC } from "react";
import Header from "../components/ui/Header";
import { Outlet, NavLink } from "react-router-dom";

const Settings: FC = () => {
  return (
    <div className="setting-page">
      <Header title="Setting" />
      <div className="setting-content">
        <aside className="sidebar">
          <ul className="settings-navbar">
            <li>
              <NavLink
                to="/settings"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Profile Settings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="resetpassword"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Password
              </NavLink>
            </li>
            <li>
              <NavLink
                to="notifications"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Notifications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="langsetting"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Language & Region
              </NavLink>
            </li>
          </ul>
        </aside>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Settings;
