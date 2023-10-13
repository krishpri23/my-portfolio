import React from "react";
import Link from "";

export default function About() {
  return (
    <section className="w-full px-10 py-5 bg-red-100">
      {/* Name section */}
      <div className="flex flex-col justify-start items-center">
        <h1> Krishnapriya Somalinga </h1>
        <h2> Frontend Developer </h2>
        {/* Download CV & Contact Info */}
        <div>
          <Link className="border-3 border-blue-800 rounded-xl px-5 py-3  ">
            Download CV
          </Link>
          <button>Contact Info</button>
        </div>
      </div>
    </section>
  );
}
