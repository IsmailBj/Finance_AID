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
            <NavLink to="/settings">
              <li className="active">Profile Settings</li>
            </NavLink>
            <NavLink to="resetpassword">
              <li>Password</li>
            </NavLink>
            <NavLink to="notifications">
              <li>Notifications</li>
            </NavLink>
            <NavLink to="langsetting">
              <li>Language & Region</li>
            </NavLink>
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
