import Image from "next/image";
import Hero from "../components/Hero";
import Hero_Test from "./test";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import Assemble_Proj from "../components/Assemble_Proj";
import Project from "../components/Project";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("all");

  const arrjsx = [
    <Project
      key={0}
      name="Bay Area Creative Youth Awards: Interstellar Main Theme - Hans Zimmer -Performed by Sunny Jayaram"
      desc="A piano cover of the main theme from the movie interstellar, with inspiration from Dorian Marko's viral Cornfield Chase cover and other renditions of the score. "
      link="https://www.youtube.com/embed/yN2Wdw3ne8g"
      color="white"
    />,
    <Assemble_Proj key={1}/>,
    <Project
      key={2}
      name="Understanding e^ix = cos(x) + i*sin(x) in the context of infinite sums."
      desc="Mathematical Animations programmed using Python for the graphical visualization of Maclaurin polynomials, inspired by Grant Sanderson's 3Blue1Brown productions and animated using his python library Manim."
      link="https://www.youtube.com/embed/XrhA0JylwF8"
      color="gray"
    />,
    <Project
    key={3}
      name="Fly me to the moon one man band - Piano, Vocals, Bass, Drums, and harp?"
      desc="A culmination of a majority of my musical talent and one of the first songs I ever learned on the piano."
      link="https://www.youtube.com/embed/wVnaSAV7QZU"
      color="white"
    />,
    <Project
    key={4}
      name="Ms. Niazi's AP Test Data Visualized Using Python"
      desc={`Maximum effort is a staple of my work ethic; you get out what you put in. For example, my stats teacher gave everyone in the class a CSV and told us to "visualize this data." When I showed her my rendition, she ended up sending this and my Euler's formula video the entirety of the Math Department and all the Comp. Sci teachers at my school. Even the vice principal was impressed. Needless to say,  spending 7 straight hours of my Saturday on this was absolutely worth it.`}
      link="https://www.youtube.com/embed/e2O3DP_URO8"
      color="gray"
    />,
    <Project
    key={5}
      name="Fly me to the moon piano improv on a steinway in a SF hotel lobby"
      desc={`Just some improv on an amazing Steinway.`}
      link="https://www.youtube.com/embed/gTXDrLrzH6k"
      color="white"
    />,
  ];

  return (
    <div className="">
      <Hero />

      <div className="w-full h-auto border-t-2 flex items-center justify-center text-white bg_thatblack ">
        <div className="text-5xl  p-4 ">My Projects:</div>
      </div>
      <div className="w-full h-auto flex items-center justify-center text-white bg_thatblack">
        <div
          onClick={() => setTab("all")}
          className={
            tab == "all"
              ? "text-2xl w-6/12 text-center p-4 border-b-8 testglow border-b-red-300 ease-in duration-100"
              : "text-2xl w-6/12 text-center p-4 ease-in duration-100 "
          }
        >
          All
        </div>
        <div
          onClick={() => setTab("music")}
          className={
            tab == "music"
              ? "text-2xl w-6/12 text-center p-4 border-b-8 testglow border-b-red-300  ease-in duration-100"
              : "text-2xl w-6/12 text-center p-4 ease-in duration-100 "
          }
        >
          Music
        </div>
        <div
          onClick={() => setTab("tech")}
          className={
            tab == "tech"
              ? "text-2xl w-6/12 text-center p-4 border-b-8 testglow border-b-red-300  ease-in duration-100"
              : "text-2xl w-6/12 text-center p-4 ease-in duration-100 "
          }
        >
          Tech
        </div>
      </div>
      {tab == "all" ? arrjsx.map((p, i) => p) : <div></div>}
      {tab == "music" ? [arrjsx[0], arrjsx[3], arrjsx[5]] : <div></div>}
      {tab == "tech" ? [arrjsx[1], arrjsx[2], arrjsx[4]] : <div></div>}
    </div>
  );
}
