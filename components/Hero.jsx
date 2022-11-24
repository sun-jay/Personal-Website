import React from "react";

const hero = () => {
  return (


    <div className="grid place-items-center h-screen w-screen">

      <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-screen bg-fixed bg-center bg-cover custom-img"></div>

      <div className="md:mt-0 mt-4 absolute top-0 left-0 right-0 bottom-0 grid place-items-center h-screen w-screen">
        <div className="items-center m-auto flex flex-col md:flex-row w-9/12  ">
          <div className="justify-center w-9/12 md:w-4/12 ">
            <img className="z-10" src="IMG_8285 2-modified (1).png" />
          </div>

          <div class="w-full md:w-8/12 m-8 ">
            <p className="md:text-5xl text-4xl text-center text-white">Sunny-Jay.com</p>
            <div className="m-4">
              <p className="text-2xl text-center text-white	">
                Hi, I&aposm Sunny Jayaram. I&aposm a student at California High School
                going into Comp Sci. I enjoy playing the piano, coding, lifting,
                gaming, competing at hackathons, basketball, music production,
                and many other hobbies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
