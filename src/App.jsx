import React, { useRef } from "react";
import Header from "./components/Header";
import About from "./components/about";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";

export default function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <main className="bg-slate-100 text-black-600 px-10 ">
      <BrowserRouter>
        <Header
          skills={skillsRef}
          projects={projectsRef}
          contact={contactRef}
        />
        <About />
        <Skills skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
        {/* <Contact contactRef={contactRef} /> */}
      </BrowserRouter>
    </main>
  );
}
