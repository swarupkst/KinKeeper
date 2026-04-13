import React from 'react'
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";



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
        
      <li><a><RiHome2Line />Home</a></li>
      <li> <a><IoTimeOutline />Timeline</a></li>
      <li><a><ImStatsDots />Stats</a></li>
    </ul>
    </div>
    <a className=" text-2xl font-extrabold">Keen<span className='font-semibold text-[#244D3F]'>Keeper</span></a>
  </div>
 
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-lg text-[#64748B] font-medium">
      <li><a><RiHome2Line />Home</a></li>
      <li> <a><IoTimeOutline />Timeline</a></li>
      <li><a><ImStatsDots />Stats</a></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar
