import React from 'react'
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import LogoImg from '../../src/assets/logo.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm lg:px-20">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#64748B] font-medium">
        
      <li>
        <RiHome2Line />
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            isActive
              ? "bg-green-900 text-white px-2 py-1 rounded-md"
              : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <IoTimeOutline />
        <NavLink 
          to="/timeline"
          className={({ isActive }) =>
            isActive
              ? "bg-green-900 text-white px-2 py-1 rounded-md"
              : ""
          }
        >
          Timeline
        </NavLink>
      </li>

      <li>
        <ImStatsDots />
        <NavLink 
          to="/stats"
          className={({ isActive }) =>
            isActive
              ? "bg-green-900 text-white px-2 py-1 rounded-md"
              : ""
          }
        >
          Stats
        </NavLink>
      </li>
      
    </ul>
    </div>
    <img src={LogoImg} alt="logo" />
    
  </div>
 
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-lg text-[#64748B] font-medium">
      
      <li>
        <NavLink 
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-green-900 text-white px-2 py-1 rounded-md"
              : ""
          }
        >
          <RiHome2Line /> Home
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/timeline"
          className={({ isActive }) =>
            isActive
              ? "bg-green-900 text-white px-2 py-1 rounded-md"
              : ""
          }
        >
          <IoTimeOutline /> Timeline
        </NavLink>
      </li>

      <li>
        <NavLink 
          to="/stats"
          className={({ isActive }) =>
            isActive
              ? "bg-green-900 text-white px-2 py-1 rounded-md"
              : ""
          }
        >
          <ImStatsDots /> Stats
        </NavLink>
      </li>

    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar