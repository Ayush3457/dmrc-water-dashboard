import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import {
  FaTrain,
  FaTint,
  FaWater,
  FaChartBar,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const today = new Date().toLocaleDateString("en-IN");

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-200 font-semibold text-blue-900"
        : "hover:bg-blue-100"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-blue-700">
            🚇 DMRC Dashboard
          </h1>
          <p className="text-xs md:text-sm text-gray-500">
            Water Asset Management
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={navLinkClass}>
            <MdDashboard />
            Dashboard
          </NavLink>

          <NavLink to="/stations" className={navLinkClass}>
            <FaTrain />
            Stations
          </NavLink>

          <NavLink to="/borewells" className={navLinkClass}>
            <FaTint />
            Borewells
          </NavLink>

          <NavLink to="/rwh" className={navLinkClass}>
            <FaWater />
            RWH
          </NavLink>

          <NavLink to="/analytics" className={navLinkClass}>
            <FaChartBar />
            Analytics
          </NavLink>
        </div>

        {/* Date */}
        <div className="hidden lg:block text-gray-600 text-sm">
          {today}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-4 gap-2">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              <MdDashboard />
              Dashboard
            </NavLink>

            <NavLink
              to="/stations"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              <FaTrain />
              Stations
            </NavLink>

            <NavLink
              to="/borewells"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              <FaTint />
              Borewells
            </NavLink>

            <NavLink
              to="/rwh"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              <FaWater />
              RWH Structures
            </NavLink>

            <NavLink
              to="/analytics"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              <FaChartBar />
              Analytics
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}