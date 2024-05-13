import React from "react";
import Socials from "./socials";
import Anim from "./Anim";
import Anim2 from "./Anim2";
import { FaArrowCircleDown } from "react-icons/fa";
import Project from "./Project";
import { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom"; // Importing Zoom effect
import { TypeAnimation } from "react-type-animation";
import BG from "./BG";

const Hero = () => {
  // const [mounted, setMounted] = useState(false);
  // const handleMount = () => {
  //   setMounted(true);
  // };
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const [image, setImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = "IMG_8285 2-modified (1).png";
    imageLoader.onload = () => {
      setImage(imageLoader);
      setImageLoaded(true);
    };
  }, []);

  // const [visible, setColor] = useState("blue");
  // useEffect(()=> setColor( mounted?"green":"blue" ) )
  return (
    <div className="flex flex-row items-end  justify-center md:h-screen bigh w-full">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-full bg-auto md:bg-cover bg-fixed bg-center custom-img z -z-50"></div> */}
      {/* <div className="bg_thatblack text-white flex flex-col items-center justify-center absolute -z-10 top-0 left-0 right-0 bottom-0 md:h-screen bigh w-full ">
        <div style={{ opacity: mounted?0:1 }} className="absoloute top-0 left-0 w-full h-screen flex flex-col items-center justify-center">
          <p className="linear-wipe m-2 max-[350px]:text-3xl tewxt-4xl lg:text-6xl text-center z-10 text-white">
            Sunny-Jay.com
          </p>
          LOADING...
        </div>
      </div> */}
      {/* <div className="hidden md:absolute md:block top-0 left-0 right-0 bottom-0 bigh md:h-screen w-full ">
        <Anim/>
      </div> */}
      {/* <div  className="absolute top-0 left-0 right-0 bottom-0 bigh md:h-screen w-full ">
        <BG onLoad={handleMount}/>
      </div> */}
      <BG />
      <div className="fade-in-m md:mt-0 absolute top-0 left-0 right-0 bottom-0 grid place-items-center md:h-screen bigh  w-full ">
        <div className="items-center m-auto flex flex-col md:flex-row w-9/12  ">
          <div
            // style={{ opacity: mounted ? 1 : 0 }}
            className="transition ease-linear duration-1000 flex-col items-center justify-center w-9/12 md:w-4/12 "
          >
            {/* <img className=" z-10" src="IMG_8285 2-modified (1).png" /> */}
            {imageLoaded ? (
              <img src={image.src} alt="Your Image" />
            ) : (
              <div
                className="animate-pulse"
                style={{
                  width: "100%", // Relative to the parent container's width
                  paddingTop: "100%", // Maintain a 1:1 aspect ratio (width:height)
                  backgroundColor: "#EEDFD2",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
            )}

            {/* <div className = "mt-2 p-1 lg:bg-black lg:rounded-full lg:bg-opacity-50 lg:m-4 lg:border-black"> */}
            <div className="mt-2 mb-1 lg:bg-black lg:rounded-full lg:bg-opacity-50 lg:m-4 lg:border-black flex flex-row items-center justify-center">
              <Socials />
              {/* <p className="text-white">{String(isLoaded)}</p> */}
            </div>
          </div>

          <div
            // style={{ opacity: mounted ? 1 : 0 }}
            className="transition ease-linear duration-1000 w-full bg-black bg-opacity-80 rounded-lg md:w-8/12 mt-1 md:ml-8 m-2"
          >
            <p className="text_red m-2 max-[370px]:text-3xl text-4xl lg:text-6xl text-center z-10 ">
              Sunny Jayaram
              {/* <div className="">
              <TypeAnimation
                sequence={[
                  "Sunny-Jay.com", // Types 'One'
                  1000, // Waits 1s
                  "Personal Site", // Deletes 'One' and types 'Two'
                  1000, // Waits 2s
                  "Project Portfilio", // Types 'Three' without deleting 'Two'
                  1000,
                ]}
                wrapper="div"
                cursor={false}
                repeat={Infinity}
              />
              </div> */}
            </p>
            <div className="md:m-4 ml-2 mr-2  mt-4 mb-4">

              <p className="max-[380px]:text-sm text-xs pt-1 md:text-xl text-center text-white italic">
                {/* Full-stack engineer | 7x Hackathon Winner incl. Cal and LA Hacks | Musician  */}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Full-stack engineer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "7x Hackathon Winner",
                    1000,
                    "Cal and LA Hacks Winner",
                    1000,
                    "Musician",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </p>

            </div>
            <div className="md:m-4 ml-2 mr-2  mt-5 mb-4">
              <p className="max-[380px]:text-sm text-lg md:text-xl text-center text-white	">
                This website was coded from scratch using Next.js, React.js,
                TailWind CSS, and Spline 3D, and serves as a record of my
                progress in frontend development, while also documenting my
                other projects and achievements. See more on my{" "}
                <span className="underline">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/resume.pdf"
                  >
                    resume↗
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <FaArrowCircleDown
        // style={{ opacity: mounted ? 1 : 0 }}
        className="transition ease-linear duration-1000 pb-16 lg:block hidden animate-[bounce_2s_ease-in-out_infinite]  text-white/70 select-none z-[2]"
        size={140}
        opacity={0.5}
      />
    </div>
  );
};

export default Hero;
