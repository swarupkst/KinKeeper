import React, { useState } from "react"
import Left from "./left/Left"
import Right from "./right/Right"

const FriendDetails = () => {
  const [friendName, setFriendName] = useState("")

  return (
    <div className="bg-[#F8FAFC] min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Left */}
        <div className="lg:col-span-1">
          <Left setFriendName={setFriendName} />
        </div>

        {/* Right */}
        <div className="lg:col-span-2">
          <Right name={friendName} />
        </div>

      </div>

    </div>
  )
}

export default FriendDetails