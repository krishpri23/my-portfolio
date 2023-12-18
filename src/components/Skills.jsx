import React from "react";

export default function Skills() {
  return (
    <section className=" flex flex-col gap-10 mx-auto w-full px-10 py-5  bg-slate-100  mt-10 hover:border-2 hover:border-indigo-500 rounded-lg px-5 py-3">
      <h1 className="font-bold text-4xl text-center"> Techstack</h1>
      <div className="flex justify-center items-center  gap-5 flex-wrap lg:px-20 lg:py-10 mt-5">
        <div className="techstack">
          <h1> HTML </h1>
        </div>
        <div className="techstack">
          <h1> CSS </h1>
        </div>
        <div className="techstack">
          <h1> Javascript </h1>
        </div>
        <div className="techstack">
          <h1> Typescript </h1>
        </div>
        <div className="techstack">
          <h1> ReactJS </h1>
        </div>
        <div className="techstack">
          <h1> NextJS </h1>
        </div>
        <div className="techstack">
          <h1> TailwindCSS </h1>
        </div>
        <div className="techstack">
          <h1> Vite </h1>
        </div>
      </div>
    </section>
  );
}
