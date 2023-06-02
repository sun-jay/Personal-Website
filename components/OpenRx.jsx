import React from "react";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect


const OpenRx = () => {
  return (
    <div id="proj" className="grid place-items-center w-screen bg-gray-100">
      <Zoom duration={600} fraction = {0.1}>
      <div id="cols" className="max-w-[1240px] p-6 md:w-10/12 w-full items-center m-auto flex flex-col md:flex-row  ">
        <div id="text" className="md:hidden md:p-3 md:w-6/12 w-full">
          {/* <p className=" text-center md:text-left md:m-4 mb-4 text-md text-red-600 font-bold ">
          This website was coded from scratch using Next.js, React.js, TailWind CSS, 
                and Spline 3D, and serves as a record of my progress in frontend development, while also documenting my other projects
                and achievements.
          </p> */}
          <p className=" text-center	md:text-left md:m-4 mb-4 text-xl text-red-600 font-bold ">
          OpenRx
          </p>
        </div>
        <div id = "vid" className="md:w-6/12 w-full  aspect-video">
          <iframe
            src="https://www.youtube.com/embed/_BUq-WnVlhU"
            frameborder=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div id="text" className="md:p-3 md:w-6/12 w-full">
          <p className="animate-charcter text-center md:text-left md: text-rightmd:m-4 pt-4 md:pl-4 text-2xl text-red-600 font-bold italic underline">
            Winner Of Best New Technology Hack at CruzHacks 2023:
          </p>
          <p className="  hidden md:block md:m-4 m-2 text-xl text-red-600 font-bold">
          <span>OpenRx</span> - <a href="https://devpost.com/software/openrx-v8whuo" rel="noreferrer" target="_blank"><span className="underline">On Devpost</span></a>
          </p>
          <p className="text-center	md:text-left md:m-4 m-0 mt-5 text-sm md:text-md text-black">
          CruzHacks is the largest hackathon in Santa Cruz. In 2023, CruzHacks gathered more than 300 students from over 25 universities. Our team&apos;s project, OpenRx, aimed to benefit elderly and disabled people by making prescription management as simple as snapping a picture, and receiving notification reminders. OpenRx utilizes advanced technologies, including Next.js for handling routing and optimization, React.js for the frontend UI, TailwindCSS for styling, Firebase for authentication and data security, Microsoft Azure Cloud Vision Services OCR for reading prescription information, OpenAI for prescription recognition and parsing, and Twilio for real-time and scheduled reminders. These technologies were carefully selected to create a seamless experience for users and to achieve the project&apos;s goal of making prescription management easier and more accessible, winning our team &quot;Best New Technology Hack&quot; at CruzHacks 2023.
          </p>
        </div>
      </div>
      </Zoom>
    </div>
  );
};

export default OpenRx;
