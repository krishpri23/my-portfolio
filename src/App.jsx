import React, { createContext, useRef } from "react";
import Header from "./components/Header";
import About from "./components/about";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export const ScrollContext = createContext({});

export default function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <main className="bg-slate-100 text-black-600 px-10 ">
      <ScrollContext.Provider
        value={{ skillsRef, projectsRef, contactRef, aboutRef }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <About />
          <Skills />
          <Projects />
          {/* <Contact contactRef={contactRef} /> */}
        </BrowserRouter>
      </ScrollContext.Provider>
    </main>
  );
}
