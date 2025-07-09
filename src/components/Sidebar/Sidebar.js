import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen, theme }) => {
  const [openSections, setOpenSections] = useState({
    dashboard: false,
    host: false,
    backups: false,
  });
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleSectionToggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className={`sidebar${sidebarOpen ? "" : " collapsed"} ${theme}-theme`}>
      <div className="sidebar-toggle" onClick={handleSidebarToggle}>
        {/* Hamburger icon */}
        <span className="hamburger">&#9776;</span>
      </div>
      {sidebarOpen && (
        <>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="sidebar-menu-wrapper">
            <h4 className="host" onClick={() => handleSectionToggle("dashboard")}>Dashboard
              <span className={`chevron-icon${openSections.dashboard ? " open" : ""}`}>{openSections.dashboard ? "▼" : "▶"}</span>
            </h4>
            {openSections.dashboard && (
              <ul className="menu">
                <li className="active" onClick={() => navigate("/")}>Home</li>
              </ul>
            )}
            <h4 className="host" onClick={() => handleSectionToggle("host")}>Host
              <span className={`chevron-icon${openSections.host ? " open" : ""}`}>{openSections.host ? "▼" : "▶"}</span>
            </h4>
            {openSections.host && (
              <ul className="menu">
                <li>Hosts</li>
                <li>Data Store</li>
                <li>Tape Library Status</li>
              </ul>
            )}
            <h4 className="host" onClick={() => handleSectionToggle("backups")}>Backups
              <span className={`chevron-icon${openSections.backups ? " open" : ""}`}>{openSections.backups ? "▼" : "▶"}</span>
            </h4>
            {openSections.backups && (
              <ul className="menu">
                <li>Backups</li>
                <li>Scheduled Jobs</li>
                <li>View more</li>
              </ul>
            )}
          </div>
          <div className="license">
            <p><strong>License Validity</strong></p>
            <p>Days Left: <strong>280</strong></p>
            <p>Expiry Date: <strong>09-04-2026</strong></p>
            <p className="dev">Developed by Usama Ali <a href="#">SIGBL</a> &copy; 2025</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
