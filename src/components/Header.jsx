import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul className="w-full flex  gap-10 justify-end items-center py-3 px-5 font-bold text-lg bg-slate-300 ">
        <Link to="/" className="nav">
          Home{" "}
        </Link>
        <Link to="/" className="nav">
          About{" "}
        </Link>
        <Link to="/" className="nav">
          Projects{" "}
        </Link>
        <Link to="/" className="nav">
          Contact{" "}
        </Link>
      </ul>
    </nav>
  );
}
