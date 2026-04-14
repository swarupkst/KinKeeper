import Bodytop from './bodytop/Bodytop'
import Bodyfriend from './bodyfriend/Bodyfriend'
import React, { Suspense } from "react";
import Loader from '../../component/Loader';


const Body = () => {

  return (
    <div className='bg-[#F8FAFC]'>
      <div className='w-full sm:w-10/12 mx-auto '>
        <Bodytop />
        <hr className='text-[#E9E9E9] mx-5 sm:mx-8 pt-10' />
            <Suspense fallback={<Loader />}>
      <Bodyfriend />
    </Suspense>
      </div>
    </div>
  )
}

export default Body;
