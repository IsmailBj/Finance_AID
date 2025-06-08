import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
