import React from "react";

import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="px-10 py-2 bg-slate-300 flex gap-10 justify-between items-center">
      <h2 className="font-bold text-center text-2xl ">
        {" "}
        priya.amarnath23@gmail.com{" "}
      </h2>
      <div className="flex flex-row gap-3 justify-center items-center">
        <a
          href="https://www.linkedin.com/in/krishnapriya-amarnath-488124172"
          target="_blank"
          className=" px-5 py-2 "
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin style={{ fontSize: "300%" }} />
        </a>

        <a
          href="https://github.com/krishpri23"
          target="_blank"
          className="px-5 py-2 pr-10"
          rel="noopener noreferrer"
        >
          {" "}
          <AiOutlineGithub style={{ fontSize: "300%" }} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
