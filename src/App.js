import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashboard";
import "./assets/custom.css";
import Provider from "./Components/Context/Provider";
import StudentsTable from "./Components/StudentsTable";

export default function App() {
  return (
    <>
      <Provider>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Nav />
              <div className="container-fluid">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Provider>
    </>
  );
}
