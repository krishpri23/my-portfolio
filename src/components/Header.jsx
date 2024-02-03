import React, { useContext } from "react";
import ScrollToSection from "../utils/ScrollToSection";
import { ScrollContext } from "../App";

export default function Header({ skills, projects, about, contact }) {
  const { skillsRef, projectsRef, aboutRef, contactRef } =
    useContext(ScrollContext);
  console.log("context ", skillsRef);
  return (
    <nav>
      <ul className="w-full flex  gap-10 justify-end items-center py-3 px-5 font-bold text-lg bg-slate-300 ">
        <span className="nav">Home </span>
        <div className="nav" onClick={() => ScrollToSection(skillsRef)}>
          Skills{" "}
        </div>
        <span className="nav">About </span>
        <div className="nav" onClick={() => ScrollToSection(projectsRef)}>
          Projects{" "}
        </div>
        <span className="nav" onClick={() => ScrollToSection(contactRef)}>
          Contact{" "}
        </span>
      </ul>
    </nav>
  );
}
