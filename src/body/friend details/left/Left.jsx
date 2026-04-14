import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RiNotificationSnoozeLine } from "react-icons/ri"
import { FiArchive } from "react-icons/fi"
import { RiDeleteBin5Line } from "react-icons/ri"

const Left = ({ setFriendName }) => {
  const { id } = useParams()
  const [friend, setFriend] = useState(null)

  useEffect(() => {
  fetch('/data.json')
    .then(res => res.json())
    .then(data => {
      const found = data.find(f => f.id == id)
      setFriend(found)

      // ✅ name send to parent
      setFriendName(found.name)
    })
}, [id])

  if (!friend) return <p>Loading...</p>

  return (
    <div className="text-center">

      <div className='flex flex-col gap-3'>

        {/* Friend Card */}
        <div className='flex flex-col gap-2 justify-center items-center bg-white p-5 text-center rounded-xl shadow-sm'>

          <img
            className='rounded-full w-20'
            src={friend.picture}
            alt={friend.name}
          />

          <h4 className='text-2xl font-semibold'>{friend.name}</h4>

          <p
            className={`px-3 py-1 rounded-full text-white font-medium
              ${friend.status === "Almost due" ? "bg-[#EFAD44]" : ""}
              ${friend.status === "Overdue" ? "bg-[#EF4444]" : ""}
              ${friend.status === "On-track" ? "bg-[#244D3F]" : ""}
            `}
          >
            {friend.status}
          </p>

          {/* Tags */}
          <div className="flex gap-2 mt-2 flex-wrap justify-center">
            {friend.tags?.map((tag, index) => (
              <p
                key={index}
                className="bg-[#CBFADB] py-1 px-2 rounded-full font-medium text-sm"
              >
                {tag}
              </p>
            ))}
          </div>

          <p className='text-lg font-medium italic text-[#64748B]'>
            "{friend.bio}"
          </p>

          <p className='text-[#64748B]'>
            Preferred: {friend.email}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">

          <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-sm shadow-sm cursor-pointer hover:shadow-md hover:bg-gray-50 transition">
            <RiNotificationSnoozeLine className="text-lg" />
            <p className="text-sm font-medium">Snooze 2 Weeks</p>
          </div>

          <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-sm shadow-sm cursor-pointer hover:shadow-md hover:bg-gray-50 transition">
            <FiArchive className="text-lg" />
            <p className="text-sm font-medium">Archive</p>
          </div>

          <div className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-sm shadow-sm cursor-pointer hover:shadow-md hover:bg-red-50 transition">
            <RiDeleteBin5Line className="text-lg text-red-500" />
            <p className="text-sm font-medium text-red-500">Delete</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Left