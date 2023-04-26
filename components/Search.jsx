import React from "react";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect

const Project = ({ link, name, desc, color }) => {
  return (
    <div
      className={
        color === "gray"
          ? "grid place-items-center w-screen bg-gray-100"
          : "grid place-items-center w-screen bg-white"
      }
    >
      <Zoom duration={600} fraction={0.1}>
        <div
          id="cols"
          className="max-w-[1240px] p-6 md:w-10/12 w-full items-center m-auto flex flex-col md:flex-row  "
        >
          <div id="text" className="md:hidden md:p-3 md:w-6/12 w-full">
            <p
              className={
                name ===
                "Bay Area Creative Youth Awards: Interstellar Main Theme - Hans Zimmer -Performed by Sunny Jayaram"
                  ? "text-center	md:text-left md:m-4 mb-4 text-xl animate-charcter font-bold"
                  : "text-center	md:text-left md:m-4 mb-4 text-xl text-red-600 font-bold"
              }
            >
              <span className="underline">{name + "↗"}</span>
            </p>
          </div>
          <div id="vid" className="md:w-6/12 w-full  aspect-video">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://srvusd-search.vercel.app/"
            >
              <img src="Screen Shot 2023-04-25 at 11.37.40 AM.png" alt=""></img>
            </a>
          </div>
          <div id="text" className="md:p-3 md:w-6/12 w-full">
            <p
              className={
                name ===
                "Bay Area Creative Youth Awards: Interstellar Main Theme - Hans Zimmer -Performed by Sunny Jayaram"
                  ? "hidden md:block md:m-4 m-2 text-xl animate-charcter font-bold"
                  : "hidden md:block md:m-4 m-2 text-xl text-red-600 font-bold"
              }
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://srvusd-search.vercel.app/"
              >
                <span className="underline">{name + "↗"}</span>
              </a>
            </p>
            <p className="text-center	md:text-left md:m-4 m-0 mt-5 text-sm md:text-md text-black	">
              {desc}
            </p>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Project;
