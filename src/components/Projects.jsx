import React from "react";
import { Link } from "react-router-dom";

export default function Projects({ projectsRef }) {
  return (
    <section className="bg-slate-100 w-full mx-auto my-10 " ref={projectsRef}>
      <h1 className="font-bold text-4xl text-center mb-10"> My Projects </h1>
      {/* project 1 */}
      <div
        id="projects"
        className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center  gap-5 mb-20 hover:border-2 hover:border-black-500 rounded-lg px-5 py-3"
      >
        {" "}
        {/* Screenshot of project */}
        <div className="w-full">
          <img
            src="/food-ordering.png"
            alt="food app"
            className="w-full md:w-3/4 mx-auto"
          />
        </div>
        {/* description of the project */}
        <div className="w-full flex flex-col gap-5 px-5 py-3 text-xl ">
          <h2 className="font-bold"> Food Ordering App </h2>
          {/* Techstack to display */}
          <div className="flex flex-row gap-5">
            Web app to order foods online
          </div>

          <p>
            {" "}
            Using Swiggy's Live API, this app has been curated to suit users
            need to order food online. State is handled using Redux Toolkit
          </p>
          <p>
            {" "}
            <strong>Skills gained :</strong> Handling Live API's, State
            management using <strong>Redux</strong>, Testing using{" "}
            <strong>Jest</strong>
          </p>

          <div className="flex gap-10 justify-start items-center mt-5">
            <Link className="techstack  hover:bg-black-800 hover:text-black-100 ">
              {" "}
              Live Site{" "}
            </Link>
            <Link className="techstack   hover:bg-black-800 hover:text-black-100 ">
              {" "}
              View Code{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center  gap-5 mb-20 hover:border-2 hover:border-black-500 rounded-lg px-5 py-3">
        {" "}
        {/* Screenshot of project */}
        <div className="w-full">
          <img
            src="/expense-tracker.png"
            alt="food app"
            className="w-fullmd:w-3/4 mx-auto"
          />
        </div>
        {/* description of the project */}
        <div className="w-full flex flex-col gap-5 px-5 py-3 text-xl ">
          <h2 className="font-bold"> Expense Tracker </h2>
          {/* Techstack to display */}
          <div className="flex flex-row gap-5">
            Tracker to keep track of transactions
          </div>

          <p>
            A single page application to keep track of budgets for different
            categories of items by creating account in the application.
          </p>

          <p>
            {" "}
            <strong>Skills gained :</strong> To use <strong>Loaders </strong> &{" "}
            <strong> actions </strong> efficiently , Utilizing{" "}
            <strong> TailwindCSS</strong> , managing data using{" "}
            <strong> Local Storage </strong>
          </p>
          <div className="flex gap-10 justify-start items-center mt-5">
            <Link className="techstack  hover:bg-black-800 hover:text-black-100 ">
              {" "}
              Live Site{" "}
            </Link>
            <Link className="techstack   hover:bg-black-800 hover:text-black-100 ">
              {" "}
              View Code{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
