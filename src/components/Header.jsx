import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul className="w-full flex  gap-10 justify-end items-center py-5 px-5 font-bold text-lg bg-indigo-100">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-indigo-600 text-indigo-100 px-4 py-2 rounded-md" : ""
          }
        >
          {" "}
          Home{" "}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? " bg-indigo-600 text-indigo-100 px-4 py-2 rounded-md"
              : ""
          }
        >
          About{" "}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? " bg-indigo-600 text-indigo-100 px-4 py-2 rounded-md"
              : ""
          }
        >
          Projects{" "}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? " bg-indigo-600 text-indigo-100 px-4 py-2 rounded-md"
              : ""
          }
        >
          Contact{" "}
        </NavLink>
      </ul>
    </nav>
  );
}
