import React from "react";
import Logos from "./Logos";
import {LiaExternalLinkSquareAltSolid} from 'react-icons/lia';
import {FaGithubSquare} from 'react-icons/fa';

function ProjectCard({ data }) {
  return (
    <div className="w-4/5 md:w-[300px] h-[350px]">
      <div className="card card-compact w-full  h-full bg-base-100 shadow-xl glass rounded-md">
        <figure>
          <img src={data?.img} alt="image" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-[14px] md:text-lg">{data?.name}</h2>
          <p className="text-[10px] md:text-sm">{data?.title}</p>
          <div className="card-actions flex flex-row justify-between">
            <Logos items={data?.techStacks}/>
            <div className="flex">
            <button className="btn btn-primary text-white">
              <a href={data?.link} target="_blank"  className="flex text-md tracking-wider">Visit<LiaExternalLinkSquareAltSolid/></a>
            </button>
              <a href={data?.github} target="_blank"  className="
              flex text-[38px] tracking-wider"><FaGithubSquare/></a>
            </div>
           
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
