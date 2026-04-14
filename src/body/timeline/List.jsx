import React from "react"
import Call from '../../assets/call.png'
import Text from '../../assets/text.png'
import Video from '../../assets/video.png'

const List = ({ data }) => {

  const getIcon = (type) => {
    if (type === "call") return <img src={Call} className="w-5 h-5" alt="video" />
    if (type === "text") return <img src={Text} className="w-5 h-5" alt="video" />
    if (type === "video") return <img src={Video} className="w-5 h-5" alt="video" />
  }


  if (!data || data.length === 0) {
    return <p className="mt-5 text-gray-500">No timeline data</p>
  }

  return (
    <div className="mt-6 space-y-4">
      {data.map(item => (
        <div key={item.id} className="flex justify-between bg-white p-4 rounded border border-gray-200">

          <div className="flex items-center gap-3">
            {getIcon(item.type)}

            <div>
              <h3 className="font-semibold">{item.title}</h3>

              <p className="text-sm text-gray-400">
                {new Date(item.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>


        </div>
      ))}
    </div>
  )
}

export default List