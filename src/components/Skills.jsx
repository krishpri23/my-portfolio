import React, { useContext } from "react";
import SkillComponent from "./SkillComponent";
import { skills } from "../const/skills";
import { ScrollContext } from "../App";

export default function Skills() {
  const skillsArray = skills;
  const { skillsRef } = useContext(ScrollContext);
  return (
    <section
      className=" flex flex-col gap-10 mx-auto w-full  bg-slate-100  mt-10 hover:border-2 hover:border-black-500 rounded-lg px-5 py-3"
      id="skills"
      ref={skillsRef}
    >
      <h1 className="font-bold text-4xl text-center"> Techstack</h1>
      {/* <div className="flex justify-center items-center  gap-5 flex-wrap lg:px-20 lg:py-10 mt-5  "> */}
      <div className="grid grid-rows-2 gap-5 grid-flow-col">
        {skillsArray.map((skill, index) => (
          <SkillComponent key={index} imageSrc={skill.src} skill={skill.name} />
        ))}
      </div>
    </section>
  );
}
