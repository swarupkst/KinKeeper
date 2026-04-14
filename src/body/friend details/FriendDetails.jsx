import React, { useState } from "react"
import Left from "./left/Left"
import Right from "./right/Right"


const FriendDetails = () => {
  const [friendName, setFriendName] = useState("")

  return (
    // <div className="grid grid-cols-3 gap-10 w-10/12">
    //   <Left setFriendName={setFriendName} />

    //   <RightBottom name={friendName} />

    // </div>

    <div className='bg-[#F8FAFC]'>
      
<div className="grid grid-cols-3 grid-rows-1 gap-6 w-10/12 mx-auto py-20 ">
    <div >
      <Left setFriendName={setFriendName} />
    </div>
    <div className="col-span-2">
      <Right name={friendName} />
    </div>
</div>
    
    </div>
  )
}

export default FriendDetails