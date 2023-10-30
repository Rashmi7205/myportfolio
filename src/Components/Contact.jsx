import React, { useState } from 'react';
import contact from '../assets/contact.png';
import {AiOutlineSend} from 'react-icons/ai';

function Contact() {
  const [emailBody,setEmailBody] = useState("How Are You?");
  const [name,setName] = useState("");
  const subject ="Hello! from "
  const emailAddress = 'rashmiranjanbehera8260@gmail.com';

  return (
    <div 
    id="ContactMe"
    className='w-full  md:h-[500px]  flex md:flex-row flex-col items-center justify-around bg-[#F7F6FB]'>
      <div className='w-full md:w-1/2 p-10'>
          <img src={contact} alt="manStandingwith Chat" 
          className='w-[70%]'
          />
      </div>
      <div  className='w-full md:w-1/2 flex flex-col gap-9 px-10'>
          <h1>Please Give a Feedback</h1>
          <input type="text"
          placeholder='Enter your name'
          className='text-sm font-semibold h-[40px] px-5 rounded-md'
          onChange={(e)=>setName(e.target.value)}
          />
          <textarea 
          placeholder='Write Your Feedback !'
          className='resize-none text-sm px-4 py-3 rounded-md'
          onChange={(e)=>setEmailBody(e.target.value)}
          >

          </textarea>
          <button  className='btn btn-primary'>
            <a href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject+name)}&body=${encodeURIComponent(emailBody)}`}
            className='flex gap-3'
            >

              send message  <AiOutlineSend/>
            </a>
          </button>
      </div>
    </div>
  )
}

export default Contact