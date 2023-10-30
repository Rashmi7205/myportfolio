import React from 'react';
import logo from '../assets/logo.png';
import {FaLinkedin,FaWhatsapp} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {SiLeetcode,SiHackerrank,SiGeeksforgeeks,SiCodingninjas,SiGithub} from 'react-icons/si';

function Footer() {
  
  return (
    <footer className="footer p-10 bg-footer-texture text-neutral-content h-[350px] flex items-center justify-around md:flex-row flex-col">
  <aside>
    <p>
      <img src={logo} alt="logo" 
      className='w-[150px]'
      />
      <br/>
    Rashmi Ranjan Behera 
  </p>
  </aside> 
  <nav>
    <header className="footer-title">My social media links:</header> 
    <div className='grid grid-flow-col gap-4 text-2xl'>
      <a href='https://www.linkedin.com/in/rashmiranjan-behera/' ><FaLinkedin/></a>
      <a href='https://wa.me/+917205529539/?text=Hello from me!'><FaWhatsapp/></a>
      <a href='https://leetcode.com/rashmiranjanbehera8260/' ><SiLeetcode/></a> 
      <a href='https://www.codingninjas.com/studio/profile/RashmiRanjan' ><SiCodingninjas/></a>
      <a href='https://auth.geeksforgeeks.org/user/rashmiranjanbehera8260/' ><SiGeeksforgeeks/></a>
      <a href='https://www.hackerrank.com/profile/rashmiranjanbeh3' ><SiHackerrank/></a>
      <a href='https://github.com/Rashmi7205/Rashmi7205' ><SiGithub/></a>
    </div>
   
  </nav>
  <div className='text-white'>
      <p>More projects I’ve worked on <br/>
      <span className='flex py-3'>
      <SiGithub className='text-3xl'/>@Rashmi720 on github
      </span>
      </p>
    </div>
</footer>
  )
}

export default Footer