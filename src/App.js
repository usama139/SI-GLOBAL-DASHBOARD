import React, { useContext, useState, createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

// User context for authentication state
const UserContext = createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, email }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Theme context for dark/light mode
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Profile Page
const Profile = () => {
  const { user, setUser } = useUser();
  const { theme } = useTheme();
  const navigate = useNavigate();
  if (!user) return <Navigate to="/login" />;
  return (
    <div className={`profile-page ${theme}-theme`}>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={() => { setUser(null); navigate("/login"); }}>Sign Out</button>
    </div>
  );
};

// Login Page
const Login = () => {
  const { user, setUser } = useUser();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (user) return <Navigate to="/" />;
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: "John Doe", email });
    navigate("/");
  };
  return (
    <div className={`login-page ${theme}-theme`}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <div style={{ marginTop: 16 }}>
        <span className="profile-link" onClick={() => navigate("/signup")}>Don&apos;t have an account? Sign Up</span><br />
        <span className="profile-link" onClick={() => navigate("/forgot-password")}>Forgot Password?</span>
      </div>
    </div>
  );
};

// Signup Page
const Signup = () => {
  const { user, setUser } = useUser();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (user) return <Navigate to="/" />;
  const handleSignup = (e) => {
    e.preventDefault();
    setUser({ name, email });
    navigate("/");
  };
  return (
    <div className={`signup-page ${theme}-theme`}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      <div style={{ marginTop: 16 }}>
        <span className="profile-link" onClick={() => navigate("/login")}>Already have an account? Login</span>
      </div>
    </div>
  );
};

// Forgot Password Page
const ForgotPassword = () => {
  const { user } = useUser();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  if (user) return <Navigate to="/" />;
  const handleForgot = (e) => {
    e.preventDefault();
    alert("Password reset link sent to " + email);
    navigate("/login");
  };
  return (
    <div className={`forgot-page ${theme}-theme`}>
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgot}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Link</button>
      </form>
      <div style={{ marginTop: 16 }}>
        <span className="profile-link" onClick={() => navigate("/login")}>Back to Login</span>
      </div>
    </div>
  );
};

function AppInner() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 700);
  const location = useLocation();

  // Collapse sidebar on route change or resize if mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 700) setSidebarOpen(false);
  }, [location]);

  return (
    <ThemeProvider>
      <UserProvider>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <div className={`app ${theme}-theme`}>
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} theme={theme} />
              <div className={`main-content ${theme}-theme`}>
                <Routes>
                  <Route path="/" element={<Dashboard setSidebarOpen={setSidebarOpen} theme={theme} toggleTheme={toggleTheme} />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      </UserProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

export default App;
