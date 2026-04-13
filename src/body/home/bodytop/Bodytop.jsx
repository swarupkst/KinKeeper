import React from 'react'

const Bodytop = () => {
  return (
    <div className='flex flex-col text-center gap-6 pt-12 md:pt-20 px-4 md:px-8'>
      
      <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl leading-tight'>
        Friends to keep close in your life
      </h2>

      <p className='text-[#64748B] max-w-2xl mx-auto text-sm sm:text-base'>
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
        relationships that matter most.
      </p>

      <button className='bg-[#244D3F] text-base sm:text-lg md:text-2xl text-white px-6 py-2 md:py-3 rounded-xl md:rounded-2xl w-fit mx-auto cursor-pointer'>
        + Add a Friend
      </button>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pb-10'>
        
        <div className='bg-white p-6 text-center rounded-xl shadow-sm'>
          <p className='font-semibold text-2xl md:text-4xl'>10</p>
          <p className='text-sm md:text-xl'>Total Friends</p>
        </div>

        <div className='bg-white p-6 text-center rounded-xl shadow-sm'>
          <p className='font-semibold text-2xl md:text-4xl'>3</p>
          <p className='text-sm md:text-xl'>On Track</p>
        </div>

        <div className='bg-white p-6 text-center rounded-xl shadow-sm'>
          <p className='font-semibold text-2xl md:text-4xl'>6</p>
          <p className='text-sm md:text-xl'>Need Attention</p>
        </div>

        <div className='bg-white p-6 text-center rounded-xl shadow-sm'>
          <p className='font-semibold text-2xl md:text-4xl'>12</p>
          <p className='text-sm md:text-xl'>Interactions This Month</p>
        </div>

      </div>
    </div>
  )
}

export default Bodytop