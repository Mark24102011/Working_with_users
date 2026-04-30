import { NavLink, useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../utils/auth";

export default function Navbar() {
  const user = getUser();
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="logo">MyShop</div>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        {!user ? (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
              Login
            </NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? "active btn" : "btn"}>
              Register
            </NavLink>
          </>
        ) : (
          <>
            <span className="user">👋 {user}</span>
            <button
              className="btn danger"
              onClick={() => {
                logoutUser();
                navigate("/");
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}