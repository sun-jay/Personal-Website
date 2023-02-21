import React from "react";

const Tabs = ({tab, setTab}) => {
  return (
    <div>
      <div className="w-full h-auto border-t-2 flex items-center justify-center text-white bg_thatblack ">
        <div className="text-5xl  p-4 ">My Projects:</div>
      </div>
      <div className="w-full h-auto flex items-center justify-center text-white bg_thatblack">
        <div
          onClick={() => setTab("all")}
          className={
            tab == "all"
              ? "text-2xl w-6/12 text-center p-4 border-b-8 testglow border-b-red-300 ease-in duration-100 cursor-pointer"
              : "text-2xl w-6/12 text-center p-4 ease-in duration-100 cursor-pointer"
          }
        >
          All
        </div>
        <div
          onClick={() => setTab("tech")}
          className={
            tab == "tech"
              ? "text-2xl w-6/12 text-center p-4 border-b-8 testglow border-b-red-300  ease-in duration-100 cursor-pointer"
              : "text-2xl w-6/12 text-center p-4 ease-in duration-100  cursor-pointer"
          }
        >
          Tech
        </div>
        <div
          onClick={() => setTab("music")}
          className={
            tab == "music"
              ? "text-2xl w-6/12 text-center p-4 border-b-8 testglow border-b-red-300  ease-in duration-100 cursor-pointer"
              : "text-2xl w-6/12 text-center p-4 ease-in duration-100 cursor-pointer"
          }
        >
          Music
        </div>
      </div>
    </div>
  );
};

export default Tabs;
