import { useNavigate } from "react-router-dom";
import { FC, useState, useEffect } from "react";

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    handleNavigation("/Landing");
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUsername(parsedUser.username || "Guest");
      setEmail(parsedUser.email || "No Email");
    } else {
      navigate("/Landing");
    }
  }, [navigate]);

  return (
    <div className="side-bar">
      <div className="user-info-header">
        <div className="logo">🐵</div>
        <div className="info-wrapper">
          <span className="info-section">{username}</span>
          <span className="email">{email}</span>
        </div>
        <div className="expend-icon">⬆️</div>
      </div>
      <div className="sidebar-list">
        <div className="sidebar-item" onClick={() => handleNavigation("/")}>
          <span className="sidebar-icon">🏠</span>
          <span className="sidebar-text">Home</span>
        </div>
        <div
          className="sidebar-item"
          onClick={() => handleNavigation("/wallets")}
        >
          <span className="sidebar-icon">📁</span>
          <span className="sidebar-text">Wallets</span>
        </div>
        <div
          className="sidebar-item"
          onClick={() => handleNavigation("/Transactions")}
        >
          <span className="sidebar-icon">⚙️</span>
          <span className="sidebar-text">Transactions</span>
        </div>
        <div
          className="sidebar-item"
          onClick={() => handleNavigation("/Settings")}
        >
          <span className="sidebar-icon">⚙️</span>
          <span className="sidebar-text">Settings</span>
        </div>
      </div>
      <span className="logout">
        <span className="sidebar-icon">🚪</span>
        <span className="sidebar-text" onClick={handleLogout}>
          Logout
        </span>
      </span>
    </div>
  );
};

export default Sidebar;
