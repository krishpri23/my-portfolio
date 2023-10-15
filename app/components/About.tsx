import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
// import MyImage from "../../public/kp.jpg";

export default function About() {
  return (
    <section className=" flex flex-col gap-10 mx-auto w-3/4 px-10 py-5  border-2 border-red-200 lg:flex-row justify-between items-center">
      <div className=" border-2 border-green-600 max-w-xs">
        <img
          src="/kp.jpg"
          alt="my image"
          className="rounded-[15px] w-15  px-5 py-3  "
        />
      </div>

      {/* Name section */}
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl font-bold text-center">
          {" "}
          Krishnapriya Somalinga{" "}
        </h1>
        <h2 className="text-2xl text-gray-500 font-bold">
          {" "}
          Frontend Developer{" "}
        </h2>
        {/* Download CV & Contact Info */}
        <div className="flex justify-center items-center  gap-4">
          <Link
            href="/"
            className="rounded-3xl px-5 py-2 border border-slate-600 text-[10px] font-bold hover:bg-slate-800 hover:text-white hover:border-none duration-400 "
          >
            Download CV
          </Link>
          <Link
            href="/"
            className="rounded-3xl px-5 py-2 bg-slate-700 text-[10px] text-white font-bold hover:bg-slate-800  hover:border-none duration-400"
          >
            Contact Info
          </Link>
        </div>
        {/* social links */}
        <div className="flex flex-row gap-3 ">
          <Link href="/">
            <AiOutlineLinkedin style={{ fontSize: "200%" }} />
          </Link>

          <Link href="/">
            {" "}
            <AiOutlineGithub style={{ fontSize: "200%" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
