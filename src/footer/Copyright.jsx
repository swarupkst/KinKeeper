import React from 'react'

const Copyright = () => {
  return (
    <div className="px-4 md:px-0">
      <div className='flex flex-col md:flex-row justify-between items-center text-[#FAFAFA] py-6 gap-4 md:gap-0 text-center md:text-left'>
        
        <p className="text-sm md:text-base">
          © 2026 KeenKeeper. All rights reserved.
        </p>

        <div className='flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm md:text-base'>
          <p className="cursor-pointer ">Privacy Policy</p>
          <p className="cursor-pointer ">Terms of Service</p>
          <p className="cursor-pointer ">Cookies</p>
        </div>

      </div>
    </div>
  )
}

export default Copyright