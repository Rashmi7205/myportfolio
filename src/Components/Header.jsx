import React from "react";
import profile from '../assets/profile-pic.png';
import frame from '../assets/frame.png';

function Header() {
  return (
    <div className="w-full h-900px] md:h-[90vh] px-5 lg:flex lg:flex-row sm:flex-col bg-gradient-to-r from-cyan-100 to-white items-center ">
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-around 
      px-10 md:py-20 py-10">
        <h1 className="text-[35px] text-[#343D68] ">
          Hi👋, I’m a <br/><span className="font-bold">Student ,Web developer </span>
        </h1>
        <p className="text-[18px] my-5">I’m Rashmi , a developer dedicated to making the world a better place one line of code at a time. </p>
        <button className="w-[120px] h-[40px] rounded-md shadow-md bg-red-500 font-semibold text-white  text-sm">
          <a href="https://drive.google.com/drive/folders/1HLTt0qtR0HECmheeubDgTsS2eZchOu06">Resume</a>
        </button>
        </div>
      <div className="w-full lg:w-1/2 relative">
        <img src={frame} alt="frame" 
        className="w-[250px] h-[250px] md:w-[400px] md:h-[450px] absolute"
        />
        <img src={profile} alt="profile"
        className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] mx-10 my-10 rounded-md"
        />
      </div>
    </div>
  );
}

export default Header;
