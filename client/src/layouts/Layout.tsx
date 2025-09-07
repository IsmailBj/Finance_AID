import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import { FC } from "react";
import { useDeviceType } from "../hooks/useDeviceType";

const Layout: FC = () => {
  const deviceType = useDeviceType();

  return (
    <div className={`app ${deviceType}`}>
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
