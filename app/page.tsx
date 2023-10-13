import Image from "next/image";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <About />
    </main>
  );
}
