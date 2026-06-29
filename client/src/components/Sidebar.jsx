import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaTrain } from "react-icons/fa";
import { FaTint } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow p-5">
      <h1 className="text-xl font-bold mb-8">
        DMRC Dashboard
      </h1>

      <div className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
            isActive
              ? "bg-blue-200 p-3 rounded-lg font-medium"
              : "hover:bg-blue-100 p-3 rounded-lg transition"
            }flex items-center gap-3 p-3 rounded-lg transition `
          }
        >
          <MdDashboard className="text-xl" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/stations"
          className={({ isActive }) =>
            `${
            isActive
              ? "bg-blue-200 p-3 rounded-lg font-medium"
              : "hover:bg-blue-100 p-3 rounded-lg transition"
            }flex items-center gap-3 p-3 rounded-lg transition `
          }
        >
        <FaTrain className="text-xl" />
        <span>Stations</span>
        </NavLink>

        <NavLink
          to="/borewells"
          className={({ isActive }) =>
            `${
            isActive
              ? "bg-blue-200 p-3 rounded-lg font-medium"
              : "hover:bg-blue-100 p-3 rounded-lg transition"
            }flex items-center gap-3 p-3 rounded-lg transition `
          }
        >
        <FaTint className="text-xl" />
        <span>Borewells</span>
        </NavLink>

        <NavLink
          to="/rwh"
          className={({ isActive }) =>
            `${
            isActive
              ? "bg-blue-200 p-3 rounded-lg font-medium"
              : "hover:bg-blue-100 p-3 rounded-lg transition"
            }flex items-center gap-3 p-3 rounded-lg transition `
          }
        >
        <FaWater  className="text-xl" />
          <span>RWH Structures</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${
            isActive
              ? "bg-blue-200 p-3 rounded-lg font-medium"
              : "hover:bg-blue-100 p-3 rounded-lg transition"
            }flex items-center gap-3 p-3 rounded-lg transition `
          }
        >
        <FaChartBar className="text-xl" />
          <span>Analytics</span>
        </NavLink>
      </div>
    </div>
  );
}