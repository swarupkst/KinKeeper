import Bodytop from './bodytop/Bodytop'
import Bodyfriend from './bodyfriend/Bodyfriend'

const Body = () => {

  return (
    <div className='bg-[#F8FAFC]'>
      <div className='w-full sm:w-11/12 mx-auto '>
        <Bodytop />
        <hr className='text-[#E9E9E9] mx-5 sm:mx-8 pt-10' />
        <Bodyfriend />
      </div>
    </div>
  )
}

export default Body;
