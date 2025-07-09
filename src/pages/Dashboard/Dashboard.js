import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import ResourceBarChart from "../../components/ResourceBarChart/ResourceBarChart";
import BackupLineChart from "../../components/BackupLineChart/BackupLineChart";
import BackupBarChart from "../../components/BackupBarChart/BackupBarChart";
import BackupPieChart from "../../components/BackupPieChart/BackupPieChart";

const Dashboard = ({ setSidebarOpen, theme, toggleTheme }) => {
  const navigate = useNavigate();
  return (
    <div className={`dashboard ${theme}-theme`}>
      <div className="dashboard-top-icons">
        <div className="dashboard-theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {theme === "dark" ? "🌙" : "☀️"}
        </div>
        <div className="dashboard-profile-icon" onClick={() => { setSidebarOpen(false); navigate("/profile"); }}>👤</div>
      </div>
      <h1>StoreX - A Backup App - Ver 1.0.0</h1>
      <h2>Dashboard</h2>
      <div className={`dashboard-content ${theme}-theme`}>
        <div className={`chart ${theme}-theme`}><ResourceBarChart /></div>
        <div className={`chart ${theme}-theme`}><BackupLineChart /></div>
        <div className={`chart ${theme}-theme`}><BackupBarChart /></div>
        <div className={`chart ${theme}-theme`}><BackupPieChart /></div>
      </div>
    </div>
  );
};

export default Dashboard;
