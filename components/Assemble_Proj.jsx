import React from "react";

const Assemble_Proj = () => {
  return (
    <div id="proj" className="grid place-items-center w-screen bg-gray-100">
      <div id="cols" className="max-w-[1240px] p-6 md:w-10/12 w-full items-center m-auto flex flex-col md:flex-row  ">
        <div id="text" className="md:hidden md:p-3 md:w-6/12 w-full">
          <p className=" text-center	md:text-left md:m-4 mb-4 text-xl text-red-600 font-bold ">
          Sound Waves and Music: a Visual Explanation 
          </p>
        </div>
        <div id = "vid" className="md:w-6/12 w-full  aspect-video">
          <iframe
            src="https://www.youtube.com/embed/WgI4230d0FA"
            frameborder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div id="text" className="md:p-3 md:w-6/12 w-full">
          <p className="animate-charcter text-center md:text-left md: text-rightmd:m-4 pt-4 md:pl-4 text-2xl text-red-600 font-bold italic underline">
          Assemble Hackathon SF &ldquo;The Most Polished Project&ldquo; Award Winner:
          </p>
          <p className="  hidden md:block md:m-4 m-2 text-xl text-red-600 font-bold">
          Sound Waves and Music: a Visual Explanation 
          </p>
          <p className="text-center	md:text-left md:m-4 m-0 mt-5 text-sm md:text-md text-black">
            Mathematical Animations programmed using Python for the graphical
            visualization of sound waves and various signals and explanatory
            voiceover. Won &ldquo;The Most Polished Project&ldquo; at Assemble by hack club in
            SF, a global Hackathon that allocated 40k in travel stipends to bring
            in over 150+ kids from around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assemble_Proj;
