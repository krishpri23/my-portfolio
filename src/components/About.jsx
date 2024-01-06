import React from "react";

import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="w-full flex flex-col md:flex md:flex-row mx-auto text-black-600 hover:border-2 hover:border-black-500 rounded-lg px-5 py-3">
      <div className="w-full ">
        <img
          src="/kp.png"
          alt="women with a laptop"
          className="w-3/4 mx-auto p-10"
        />
      </div>
      <div className="w-full max-h-full flex flex-col  items-center gap-3 my-5   text-2xl p-10">
        <h1 className="text-4xl font-bold text-center">
          {" "}
          Krishnapriya Somalinga{" "}
        </h1>
        <h2 className="text-3xl text-black-500 font-normal">
          {" "}
          Frontend Developer{" "}
        </h2>
        {/* Download CV & Contact Info */}
        <div className="flex justify-center items-center  gap-4 text-3xl">
          <Link
            to="/"
            className="rounded-3xl px-5 py-3 border border-black-600 text-sm font-bold hover:bg-slate-800 border-slate-800 hover:text-slate-100  hover:opacity-90 hover:scale-110 duration-400 "
          >
            Download CV
          </Link>
          <Link
            to="/"
            className="rounded-3xl px-5 py-3 border  bg-black-600 text-black-100 text-sm font-bold hover:bg-slate-800 border-black hover:text-slate-100  hover:opacity-90 hover:scale-110 duration-400 "
          >
            Contact Info
          </Link>
        </div>
        {/* social links */}
        <div className="flex flex-row gap-3 mt-5">
          <Link to="/" className="hover:scale-125  ">
            <AiOutlineLinkedin style={{ fontSize: "200%" }} />
          </Link>

          <Link to="/" className="hover:scale-125">
            {" "}
            <AiOutlineGithub style={{ fontSize: "200%" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
