import React from "react";
import {c,cpp,css,html,js,
  java,
  mongo,
  mysql,
  node,
  python,
  react,
  redux,tailwindcss,main,express} from "../assets/index";

function Skills() {

  const skillItems = [c,
    cpp,
    css,
    html,
    js,
    java,
    mongo,
    mysql,
    node,
    python,
    react,
    redux,tailwindcss,express];

  return (
    <div id="Skills" className="w-full bg-gradient-to-r from-white to-cyan-100 py-8 h-[1400px] md:h-auto">
      <div className="w-full flex items-center justify-center">
        <h1 className="font-bold text-3xl text-red-500 underline">Skills</h1>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 w-full flex flex-col gap-10">
          <div className="w-full text-center capitalize text-sm">
            <h1>I have the knolwledge of follwing technologies</h1>
          </div>
          <div className="w-full h-[400px] flex flex-wrap gap-12 itmes-center justify-center"> 
            {
          skillItems.map((item)=><img src={item} className="w-[100px] h-[100px] rounded-md bg-green-200 mask mask-square-2 p-3 shadow-md"/>)
          }
        </div>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center my-3">
            <img src={main} alt="main_img"
            className="w-[70%]"
            />
        </div>
      </div>
    </div>
  );
}

export default Skills;
