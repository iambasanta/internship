import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              My profile
            </Link>
          </li>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
