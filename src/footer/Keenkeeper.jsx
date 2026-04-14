import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import FooterImg from "../assets/logo-xl.png"
const Keenkeeper = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 py-10 pt-20'>
        <img src={FooterImg} alt="logo" />
        <p className='text-white text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <div>
            <p className='text-2xl font-medium text-white'>Social Links</p>
            <div className='flex gap-3 pt-4'>
                <p className='bg-white p-2 rounded-full cursor-pointer'><AiFillInstagram /></p>
                <p className='bg-white p-2 rounded-full cursor-pointer'><FaFacebookSquare /></p>
                <p className='bg-white p-2 rounded-full cursor-pointer'><BsTwitterX /></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Keenkeeper
