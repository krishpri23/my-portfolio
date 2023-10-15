import Image from "next/image";
import About from "./components/About";
import Techstack from "./components/Techstack";

export default function Home() {
  return (
    <main className=" flex w-full flex-col items-center justify-between px-30 py-10 ">
      <About />
      <Techstack />
    </main>
  );
}
