import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaTrain, FaTint, FaWater, FaChartBar } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">
          🚇 DMRC Dashboard
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-200 font-semibold"
                  : "hover:bg-blue-100"
              }`
            }
          >
            <MdDashboard />
            Dashboard
          </NavLink>

          <NavLink
            to="/stations"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-200 font-semibold"
                  : "hover:bg-blue-100"
              }`
            }
          >
            <FaTrain />
            Stations
          </NavLink>

          <NavLink
            to="/borewells"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-200 font-semibold"
                  : "hover:bg-blue-100"
              }`
            }
          >
            <FaTint />
            Borewells
          </NavLink>

          <NavLink
            to="/rwh"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-200 font-semibold"
                  : "hover:bg-blue-100"
              }`
            }
          >
            <FaWater />
            RWH Structures
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-200 font-semibold"
                  : "hover:bg-blue-100"
              }`
            }
          >
            <FaChartBar />
            Analytics
          </NavLink>
        </div>
      </div>
    </nav>
  );
}