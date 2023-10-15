import React from "react";

export default function Techstack() {
  return (
    <section className=" flex flex-col gap-10 mx-auto w-3/4 px-10 py-5  bg-pink-200  mt-10">
      <h1 className="font-bold text-2xl text-left"> Techstack</h1>
      <div className="flex justify-center items-center  gap-5 flex-wrap lg:px-20 lg:py-10 mt-5">
        <div className="border-2 border-solid border-gray-600 px-5 py-2 rounded-3xl bg-red-100">
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
