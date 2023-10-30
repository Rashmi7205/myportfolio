import React from 'react'
import {projects} from '../constants/';
import ProjectCard from './ProjectCard';
function Projects() {
  return (
    <div id="Projects" className='py-4 w-full h-auto md:h-[521px] bg-[#343D68]'>
        <div className='w-full text-center text-white py-5'>
            <h1 className='text-3xl underline'>Projects</h1>
            <h3>A select number of projects</h3>
        </div>
        <div className='w-full flex items-center justify-around gap-5 flex-wrap'>
          {
            projects.map(project=><ProjectCard data={project}/>)
          }
        </div>
    </div>
  )
}

export default Projects