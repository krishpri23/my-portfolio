import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/about";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <main className="bg-slate-100 text-black-600 px-10 ">
      <Router>
        <Header />
        <About />
        <Skills />
        <Projects />
      </Router>
    </main>
  );
}
