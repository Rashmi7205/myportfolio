import React from "react";
import logo from '../assets/logo.png';

function NavBar() {
  const menuItems = ["Skills", "Projects", "ContactMe"];
  return (
    <div className="navbar bg-base-100 lg:flex lg:items-center lg:justify-between text-sm px-5 text-red-500 font-semibold">
      <div className="navbar-start sm:block lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems.map((menuItem) => (
              <li key={menuItem}>
                <a href={`#${menuItem}`}>{menuItem}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center flex flex-col text-[12px]">
         <img src={logo} alt="Rashmi :is here For you" 
         className="w-[120px] h-auto"
         />
         <span className="text-slate-500">is Here For You</span>
      </div>  
      <div className="navbar-end lg:block hidden">
      <ul
            tabIndex={0}
            className="flex w-full items-center justify-around"
          >
            {menuItems.map((menuItem) => (
              <li key={menuItem}>
                <a href={`#${menuItem}`}>{menuItem}</a>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

export default NavBar;
