import React from 'react'
import Copyright from './Copyright'
import Keenkeeper from './Keenkeeper'

const Footer = () => {
  return (
    <div className='bg-[#244D3F]'>
    <div className='sm:w-10/12 mx-auto '>
    <Keenkeeper />
    <hr className='text-[#1A8862]'/>
      <Copyright />
    </div>
    </div>
  )
}

export default Footer
