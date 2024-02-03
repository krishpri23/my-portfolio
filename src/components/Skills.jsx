import React from "react";
import SkillComponent from "./SkillComponent";

export default function Skills({ skillsRef }) {
  const skills = [
    { name: "Typescript", src: "/typescript.png" },
    { name: "React", src: "/react.svg" },
    { name: "Firebase Auth", src: "/firebase.png" },
    { name: "Tailwind CSS", src: "/tailwind.png" },
    { name: "Jest Testing ", src: "/jest.png" },
    { name: "React-Hook-Form", src: "/rhf.png" },
    { name: "Vite", src: "/vite.jpeg" },
    { name: "Zod", src: "/zod.png" },
    {
      name: "Redux Toolkit",
      src: "/redux.jpeg",
    },
  ];
  return (
    <section
      className=" flex flex-col gap-10 mx-auto w-full  bg-slate-100  mt-10 hover:border-2 hover:border-black-500 rounded-lg px-5 py-3"
      id="skills"
      ref={skillsRef}
    >
      <h1 className="font-bold text-4xl text-center"> Techstack</h1>
      <div className="flex justify-center items-center  gap-5 flex-wrap lg:px-20 lg:py-10 mt-5  ">
        {skills.map((skill, index) => (
          <SkillComponent key={index} imageSrc={skill.src} skill={skill.name} />
        ))}
      </div>
    </section>
  );
}
