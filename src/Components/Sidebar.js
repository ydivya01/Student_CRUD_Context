import { Link } from "react-router-dom";
import React from "react";

export default function Sidebar() {
  function toggleSidebar() {
    document.querySelector("body").classList.toggle("sidebar-toggled");
    document.getElementById("accordionSidebar").classList.toggle("toggled");
  }

  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex nav-link align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
           
          </div>
          <div className="sidebar-brand-text mx-3">School Management</div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Data List</div>

        <li className="nav-item">
          <Link
            className="nav-link collapsed collapseTwoHeading"
            data-toggle="collapse"
            to="/studentsData"
          >
            <i className="fa-solid fa-user-large"></i>
            <span> Students</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed collapseUtilities"
            href="#"
            data-toggle="collapse"
            to="/teachersData"
          >
            <i
              className="fa-solid fa-chalkboard-user"
              style={{ fontSize: "16px" }}
            ></i>
            <span>Teachers</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={() => toggleSidebar()}
          ></button>
        </div>
      </ul>
    </>
  );
}
