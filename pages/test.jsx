import React from "react";
import Socials from "../components/socials";
import Anim from "../components/Anim";
import { FaArrowCircleDown } from "react-icons/fa";
import Assemble_Proj from "../components/Assemble_Proj";

const hero = () => {
  return (
    <div className="overscroll-x-none flex flex-row items-end  justify-center h-screen w-full">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-full bg-auto md:bg-cover bg-fixed bg-center custom-img z -z-50"></div> */}

      <div className="bg-black absolute top-0 left-0 right-0 bottom-0 h-screen w-full "></div>
      <div className=" absolute top-0 left-0 right-0 bottom-0 ">
        <Anim />
      </div>

      <div className="fade-in items-center m-auto flex flex-col md:flex-row w-9/12  ">
          <div className="flex-col items-center w-9/12 md:w-4/12 ">
            <img className=" z-10" src="IMG_8285 2-modified (1).png" />
            {/* <div className = "mt-2 p-1 lg:bg-black lg:rounded-full lg:bg-opacity-50 lg:m-4 lg:border-black"> */}
            <div className="mt-2 p-1 lg:bg-black lg:rounded-full lg:bg-opacity-50 lg:m-4 lg:border-black">
              <Socials />
            </div>
          </div>

          <div class="w-full bg-black bg-opacity-50 rounded-lg md:w-8/12 mt-1 m-2">
            <p className="linear-wipe m-2 max-[350px]:text-3xl text-4xl lg:text-6xl text-center z-10 text-white">
              Sunny-Jay.com
            </p>
            <div className="md:m-4  mt-5 mb-4">
              <p className="max-[350px]:text-sm text-xl text-center text-white	">
                Hi, I&#39;m Sunny Jayaram. I&#39;m a student at California High
                School going into Comp Sci. I enjoy playing the piano, coding,
                lifting, gaming, competing at hackathons, basketball, music
                production, and many other hobbies.
              </p>
            </div>
          </div>
        </div>

      {/* <FaArrowCircleDown
        className="pb-16 md:block hidden animate-[bounce_2s_ease-in-out_infinite]  text-white/70 cursor-pointer select-none z-[2] transition-transform hover:scale-125"
        size={140}
        opacity={0.5}
      /> */}
    </div>
  );
};

export default hero;
