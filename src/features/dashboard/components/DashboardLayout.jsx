import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <h2>Dashboard Layout</h2>
        <nav>
          <NavLink 
            to="/dashboard" 
            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
          >
            Home
          </NavLink>{" "}
          |{" "}
          <NavLink 
            to="/dashboard/profile"
            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
          >
            Profile
          </NavLink>
        </nav>
      </header>

      <main style={{ padding: "1rem" }}>
        {/* This will render child routes */}
        <Outlet />
      </main>
    </div>
  );
}
