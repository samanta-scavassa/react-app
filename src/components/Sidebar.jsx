import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar" >
      <ul className="sidebar-list">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          About
        </NavLink>
      </ul>
    </div>
  );
}
