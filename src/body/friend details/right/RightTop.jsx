import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Loader from '../../../component/Loader';

const RightTop = () => {
  const { id } = useParams()
  const [friend, setFriend] = useState(null)

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id == id)
        setFriend(found)
      })
  }, [id])

  if (!friend) return <Loader />

  return (
    <div className=" text-center flex flex-col gap-8">

      
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">

  {/* Card 1 */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 py-8 text-center">
    <p className="text-3xl font-bold text-[#244D3F]">
      {friend.days_since_contact}
    </p>
    <p className="text-sm text-[#64748B] mt-2">
      Days Since Contact
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 py-8 text-center">
    <p className="text-3xl font-bold text-[#244D3F]">
      {friend.goal}
    </p>
    <p className="text-sm text-[#64748B] mt-2">
      Goal (Days)
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 py-8 px-1 text-center">
    <p className="text-3xl font-bold text-[#244D3F]">
      {friend.next_due_date}
    </p>
    <p className="text-sm text-[#64748B] mt-2">
      Next Due
    </p>
  </div>

</div>


    <div className='flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 py-8 px-6 gap-4'>
        <div className='flex justify-between  '>
            <p className='text-xl font-medium text-[#244D3F]'>Relationship Goal</p>
            <p className='font-medium px-4 py-2 bg-[#E9E9E9] rounded-sm'>Edit</p>
        </div>
        <p className='text-[#64748B] text-lg text-left'>Connect every <span className='text-black font-bold'>{friend.goal} days</span></p>
    </div>
    <div></div>
    </div>
  )
}

export default RightTop;
