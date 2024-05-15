import React from "react";

export default function SkillComponent({ imageSrc, skill }) {
  return (
    // <div className="flex flex-col gap-5 justify-center items-center">
    <div className="grid gap-3 justify-items-center items-center">
      <img
        src={imageSrc}
        alt={`${skill} logo`}
        className="w-14 h-14 rounded-xl object-cover"
      />
      <h1 className="font-bold text-black text-sm border-2 border-slate-800 px-5 py-1 rounded-3xl  hover:bg-slate-300 hover:text-slate-800">
        {skill}
      </h1>
    </div>
  );
}
