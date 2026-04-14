import React, {use} from 'react'
import { Link } from 'react-router'


      const friendPromise = fetch('/data.json')
.then (res=> res.json())
const Bodyfriend = () => {

const friend = use(friendPromise)


    console.log (friend)

  return (

    <div className='px-4 md:px-8 '>
      <h2 className='font-semibold text-xl'>Your Friends </h2>
  
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pb-20'>
        
    {
      friend.map(friends => {
        return <Link to={`/friend/${friends.id}`}> <div key={friends.id} className='flex flex-col gap-2 justify-center items-center bg-white p-6 text-center rounded-xl shadow-sm'>
            <img className='rounded-full' src={friends.picture}></img>
            <h4 className='text-2xl font-semibold'>{friends.name}</h4>
            <p>{friends.days_since_contact}d ago</p>
            <div className="flex gap-2 mt-2">
  {friends.tags.map((tag, index) => (
    <p 
      key={index} 
      className="bg-[#CBFADB] py-1 px-2 rounded-full font-medium text-sm"
    >
      {tag}
    </p>
  ))}
</div>
            <p 
  className={`px-3 py-1 rounded-full text-white font-medium
    ${friends.status === "Almost due" ? "bg-[#EFAD44]" : ""}
    ${friends.status === "Overdue" ? "bg-[#EF4444]" : ""}
    ${friends.status === "On-track" ? "bg-[#244D3F]" : ""}
  `}
>
  {friends.status}
</p>
   

        </div>
        </Link> 

      })
      }

      </div>
    </div>
  )
}

export default Bodyfriend
