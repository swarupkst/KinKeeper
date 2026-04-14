
import Left from './left/Left'
import Right from './right/Right'

const FriendDetails = () => {
   return (
<div className='bg-[#F8FAFC]'>
      
<div className="grid grid-cols-3 grid-rows-1 gap-6 w-10/12 mx-auto py-20 ">
    <div >
      <Left />
    </div>
    <div className="col-span-2">
      <Right />
    </div>
</div>
    
    </div>
   )
}

export default FriendDetails