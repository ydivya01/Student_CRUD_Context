import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/sb-admin-2.css";
import "../src/assets/custom.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

import { Navigate } from "react-router-dom";
import StudentsData from "./Components/StudentsData";
import StudentsTable from "./Components/StudentsTable";
import TeachersData from "./Components/TeachersData";
import TeachersTable from "./Components/TeachersTable";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/studentsData",
        element: <StudentsData />
      },
      {
        path: "/teacherForm",
        element: <TeachersTable />
      },
      {
        path: "/studentForm",
        element: <StudentsTable />
      },
      {
        path: "/teachersData",
        element: <TeachersData />
      },
      {
        path: "/",
        element: <Navigate to="/dashboard" replace={true} />
      }
    ]
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
