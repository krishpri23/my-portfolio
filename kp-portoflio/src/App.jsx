import Header from "./components/Header";
import About from "./components/about";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <main className="bg-slate-100 text-indigo-600">
      <Router>
        <Header />
        <About />
      </Router>
    </main>
  );
}
