import React from "react";
import ScrollToSection from "../utils/ScrollToSection";

export default function Header({ skills, projects, about, contact }) {
  return (
    <nav>
      <ul className="w-full flex  gap-10 justify-end items-center py-3 px-5 font-bold text-lg bg-slate-300 ">
        <span className="nav">Home </span>
        <div className="nav" onClick={() => ScrollToSection(skills)}>
          Skills{" "}
        </div>
        <span className="nav">About </span>
        <div className="nav" onClick={() => ScrollToSection(projects)}>
          Projects{" "}
        </div>
        <span className="nav" onClick={() => ScrollToSection(contact)}>
          Contact{" "}
        </span>
      </ul>
    </nav>
  );
}
