import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          AdminPanel
        </div>

        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>

          <NavLink 
            to="/add-product" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Add Product
          </NavLink>

          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
