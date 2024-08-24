import React from "react";
// import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect


const OpenRx = () => {
  return (
    <div id="proj" className="grid place-items-center w-screen bg-gray-100">
      {/* <Zoom duration={600} fraction = {0.1}> */}
      <div id="cols" className="max-w-[1240px] p-6 md:w-10/12 w-full items-center m-auto flex flex-col md:flex-row  ">
        <div id="text" className="md:hidden md:p-3 md:w-6/12 w-full">
          {/* <p className=" text-center md:text-left md:m-4 mb-4 text-md text-red-600 font-bold ">
          This website was coded from scratch using Next.js, React.js, TailWind CSS, 
                and Spline 3D, and serves as a record of my progress in frontend development, while also documenting my other projects
                and achievements.
          </p> */}
          <p className=" text-center	md:text-left md:m-4 mb-4 text-xl text-red-600 font-bold ">
          Bookmark.ai
          </p>
        </div>
        <div id = "vid" className="md:w-6/12 w-full  aspect-video">
          <iframe
            src="https://www.youtube.com/embed/1ymM8s_Q13c"
            frameborder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div id="text" className="md:p-3 md:w-6/12 w-full">
          <p className="animate-charcter text-center md:text-left md: text-rightmd:m-4 pt-4 md:pl-4 text-2xl text-red-600 font-bold italic underline">
            Winner of LanceDB&#39;s $5000 sponsor prize at AI x Product Hackathon SF
          </p>
          <p className="  hidden md:block md:m-4 m-2 text-xl text-red-600 font-bold">
          <span>Bookmark.ai</span> - <a href="https://devpost.com/software/bookmark-ai" rel="noreferrer" target="_blank"><span className="underline">On Devpost</span></a>
          </p>
          <p className="text-center	md:text-left md:m-4 m-0 mt-5 text-sm md:text-md text-black">
          AI x Product Hackathon SF was a professional level hackathon that attracted talent from around the world to innovate upon up and coming platforms in generative AI. My team&#39;s project revolutionized bookmarks using AI, turning links into a powerful AI assistant that can be updated with any knowledge with the click of a button. Devpost: https://devpost.com/software/bookmark-ai
          </p>
        </div>
      </div>
      {/* </Zoom> */}
    </div>
  );
};

export default OpenRx;
