import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../App";
import "./Dashboard.css";
import ResourceBarChart from "../../components/ResourceBarChart/ResourceBarChart";
import BackupLineChart from "../../components/BackupLineChart/BackupLineChart";
import BackupBarChart from "../../components/BackupBarChart/BackupBarChart";
import BackupPieChart from "../../components/BackupPieChart/BackupPieChart";

const ProfileOrLoginModal = ({ onClose }) => {
  const { user, setUser } = useUser();
  const [modalView, setModalView] = useState("login"); // 'login' | 'signup' | 'forgot'
  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Signup form state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  // Forgot password state
  const [forgotEmail, setForgotEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const nameFromEmail = email.split('@')[0];
    setUser({ name: nameFromEmail, email });
    onClose();
  };
  const handleSignup = (e) => {
    e.preventDefault();
    setUser({ name: signupName, email: signupEmail });
    onClose();
  };
  const handleForgot = (e) => {
    e.preventDefault();
    alert("Password reset link sent to " + forgotEmail);
    setModalView("login");
  };

  return (
    <div className="profile-modal-overlay">
      <div className="profile-modal">
        <button className="profile-modal-back" onClick={user ? onClose : () => {
          if (modalView === "login") onClose();
          else setModalView("login");
        }}>← Back</button>
        {user ? (
          <>
            <h2>Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button className="signout-btn" onClick={() => { setUser(null); setModalView('login'); }}>Sign Out</button>
          </>
        ) : modalView === "login" ? (
          <>
            <h2>Please login first</h2>
            <form onSubmit={handleLogin} className="modal-login-form">
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
              <button type="submit">Login</button>
            </form>
            <div style={{ marginTop: 16 }}>
              <span className="profile-link" style={{ cursor: 'pointer', color: '#3c4a52' }} onClick={() => setModalView("signup")}>Don't have an account? Sign Up</span><br />
              <span className="profile-link" style={{ cursor: 'pointer', color: '#3c4a52' }} onClick={() => setModalView("forgot")}>Forgot Password?</span>
            </div>
          </>
        ) : modalView === "signup" ? (
          <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup} className="modal-login-form">
              <input type="text" placeholder="Name" value={signupName} onChange={e => setSignupName(e.target.value)} required />
              <input type="email" placeholder="Email" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required />
              <input type="password" placeholder="Password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} required />
              <button type="submit">Sign Up</button>
            </form>
          </>
        ) : (
          <>
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgot} className="modal-login-form">
              <input type="email" placeholder="Email" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} required />
              <button type="submit">Send Reset Link</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const Dashboard = ({ setSidebarOpen, theme, toggleTheme }) => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className={`dashboard ${theme}-theme`}>
      <div className="dashboard-top-icons">
        <div className="dashboard-theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {theme === "dark" ? "🌙" : "☀️"}
        </div>
        <div className="dashboard-profile-icon" onClick={() => setShowProfile(true)}>👤</div>
      </div>
      {showProfile && <ProfileOrLoginModal onClose={() => setShowProfile(false)} />}
      <h1>StoreX - A Backup App - Ver 1.0.0</h1>
      <h2>Dashboard</h2>
      <div className={`dashboard-content ${showProfile ? "blurred" : ""} ${theme}-theme`}>
        <div ><ResourceBarChart /></div>
        <div ><BackupLineChart /></div>
        <div ><BackupBarChart /></div>
        <div ><BackupPieChart /></div>
      </div>
    </div>
  );
};

export default Dashboard;
