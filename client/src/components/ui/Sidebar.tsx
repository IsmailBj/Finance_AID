import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div className="side-bar">
      <div className="user-info-header">
        <div className="logo">🐵</div>
        <div className="info-wrapper">
          <span className="info-section">Personal</span>
          <span className="email">how@email.com</span>
        </div>
        <div className="expend-icon">⬆️</div>
      </div>
      <div className="sidebar-list">
        <div className="sidebar-item" onClick={() => handleNavigation("/")}>
          <span className="sidebar-icon">🏠</span>
          <span className="sidebar-text">Dashboard</span>
        </div>
        <div
          className="sidebar-item"
          onClick={() => handleNavigation("/Budgets")}
        >
          <span className="sidebar-icon">📁</span>
          <span className="sidebar-text">Budgets</span>
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
    </div>
  );
};

export default Sidebar;
