import { useNavigate } from "react-router-dom";
import { FC, useState, useEffect } from "react";
import Avatar from "../common/Avatar";
import { useAvatar } from "../../hooks/useAvatar";

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [minimized, setMinimized] = useState<boolean>(false);
  const { avatar } = useAvatar();
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    handleNavigation("/landing");
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
    <div className={`side-bar ${minimized ? "minimized" : ""}`}>
      <div className="user-info-header">
        <Avatar size={40} src={avatar} />
        <div className="info-wrapper">
          <span className="info-section">{username}</span>
          <span className="email">{email}</span>
        </div>
        <div
          className="expend-icon"
          onClick={() => setMinimized((prev) => !prev)}
        >
          ⬆️
        </div>
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
          <span className="sidebar-icon">💳</span>
          <span className="sidebar-text">Wallets</span>
        </div>
        <div
          className="sidebar-item"
          onClick={() => handleNavigation("/transactions")}
        >
          <span className="sidebar-icon">🧾</span>
          <span className="sidebar-text">Transactions</span>
        </div>
        <div
          className="sidebar-item"
          onClick={() => handleNavigation("/settings")}
        >
          <span className="sidebar-icon">⚙️</span>
          <span className="sidebar-text">Settings</span>
        </div>
      </div>
      <span className="logout" onClick={handleLogout}>
        <span className="sidebar-icon">🚪</span>
        <span className="sidebar-text">Logout</span>
      </span>
    </div>
  );
};

export default Sidebar;
