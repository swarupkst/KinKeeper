import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Keenkeeper = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 py-10'>
        <h1 className='text-6xl font-bold text-white'>Keen<span className='font-semibold text-white'>Keeper</span></h1>
        <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <div>
            <p className='text-2xl font-medium text-white'>Social Links</p>
            <div className='flex gap-3 pt-4'>
                <p className='bg-white p-2 rounded-full'><AiFillInstagram /></p>
                <p className='bg-white p-2 rounded-full'><FaFacebookSquare /></p>
                <p className='bg-white p-2 rounded-full'><BsTwitterX /></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Keenkeeper
