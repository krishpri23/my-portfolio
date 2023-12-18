import About from "./components/about";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <main className="bg-slate-100">
      <Router>
        <About />
      </Router>
    </main>
  );
}
