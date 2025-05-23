import { Outlet } from "react-router-dom";
// import Header from "../components/ui/Header";
import Sidebar from "../components/ui/Sidebar";

const Layout = () => {
    return (
        <div className="app">
            {/* <Header/> */}
            <Sidebar/>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout