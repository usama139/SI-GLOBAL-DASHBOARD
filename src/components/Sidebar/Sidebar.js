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

  const handleSectionChevronClick = (section) => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      setOpenSections((prev) => ({ ...prev, [section]: true }));
    } else {
      setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    }
  };

  return (
    <div className={`sidebar${sidebarOpen ? "" : " collapsed"} ${theme}-theme`}>
      <div className="sidebar-toggle" onClick={handleSidebarToggle}>
        <span className="hamburger">&#9776;</span>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar-section-chevrons">
        <div className="sidebar-section-chevron" onClick={() => handleSectionChevronClick("dashboard")}>{
          sidebarOpen ? (
            <span className="host-row"><span className="host">Dashboard</span><span className={`chevron-icon${openSections.dashboard ? " open" : ""}`}>{openSections.dashboard ? "▼" : "▶"}</span></span>
          ) : (
            <span className={`chevron-icon${openSections.dashboard ? " open" : ""}`}>{openSections.dashboard ? "▼" : "▶"}</span>
          )
        }</div>
        {sidebarOpen && openSections.dashboard && (
          <ul className="menu">
            <li className="active" onClick={() => navigate("/")}>Home</li>
          </ul>
        )}
        <div className="sidebar-section-chevron" onClick={() => handleSectionChevronClick("host")}>{
          sidebarOpen ? (
            <span className="host-row"><span className="host">Host</span><span className={`chevron-icon1${openSections.host ? " open" : ""}`}>{openSections.host ? "▼" : "▶"}</span></span>
          ) : (
            <span className={`chevron-icon1${openSections.host ? " open" : ""}`}>{openSections.host ? "▼" : "▶"}</span>
          )
        }</div>
        {sidebarOpen && openSections.host && (
          <ul className="menu">
            <li>Hosts</li>
            <li>Data Store</li>
            <li>Tape Library Status</li>
          </ul>
        )}
        <div className="sidebar-section-chevron" onClick={() => handleSectionChevronClick("backups")}>{
          sidebarOpen ? (
            <span className="host-row"><span className="host">Backups</span><span className={`chevron-icon2${openSections.backups ? " open" : ""}`}>{openSections.backups ? "▼" : "▶"}</span></span>
          ) : (
            <span className={`chevron-icon2${openSections.backups ? " open" : ""}`}>{openSections.backups ? "▼" : "▶"}</span>
          )
        }</div>
        {sidebarOpen && openSections.backups && (
          <ul className="menu">
            <li>Backups</li>
            <li>Scheduled Jobs</li>
            <li>View more</li>
          </ul>
        )}
      </div>
      {sidebarOpen && (
        <div className="license">
          <p><strong>License Validity</strong></p>
          <p>Days Left: <strong>280</strong></p>
          <p>Expiry Date: <strong>09-04-2026</strong></p>
          <p className="dev">Developed by Usama Ali <a href="#">SIGBL</a> &copy; 2025</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
