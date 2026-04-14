import React, { useEffect, useState } from "react"
import { MdOutlineTextsms } from "react-icons/md"
import { FiPhoneCall, FiRotateCcw } from "react-icons/fi"
import { LuVideo } from "react-icons/lu"


const RightBottom = ({ name }) => {
    const [toast, setToast] = useState("")
    const [timeline, setTimeline] = useState([])


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("timeline")) || []

        const filtered = stored.filter(item => item.name === name)

        setTimeline(filtered)
    }, [name])

    const handleAction = (type) => {
        const newEntry = {
            id: Date.now(),
            name, // 👈 add this
            type: type.toLowerCase(),
            title: `${type} with ${name}`,
            date: new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        }

        const oldData = JSON.parse(localStorage.getItem("timeline")) || []
        const updated = [newEntry, ...oldData]

        localStorage.setItem("timeline", JSON.stringify(updated))


        setTimeline(updated)


        setToast(`${type} added!`)
        setTimeout(() => setToast(""), 2000)
    }


    const getIcon = (type) => {
        if (type === "call") return <FiPhoneCall className="text-xl text-gray-600 mt-1" />
        if (type === "text") return <MdOutlineTextsms className="text-xl text-gray-600 mt-1" />
        if (type === "video") return <LuVideo className="text-xl text-gray-600 mt-1" />
    }

    return (
        <div className="space-y-6">


            {toast && (
                <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow">
                    {toast}
                </div>
            )}


            <div className="bg-white rounded-xl  shadow-sm p-6">
                <h2 className="text-md font-semibold mb-4">Quick Check-In</h2>

                <div className="grid grid-cols-3 gap-4">

                    <div onClick={() => handleAction("Call")}
                        className="flex flex-col items-center bg-gray-100 py-6 rounded cursor-pointer hover:bg-gray-200">
                        <FiPhoneCall className="text-2xl mb-2" />
                        <p>Call</p>
                    </div>

                    <div onClick={() => handleAction("Text")}
                        className="flex flex-col items-center bg-gray-100 py-6 rounded cursor-pointer hover:bg-gray-200">
                        <MdOutlineTextsms className="text-2xl mb-2" />
                        <p>Text</p>
                    </div>

                    <div onClick={() => handleAction("Video")}
                        className="flex flex-col items-center bg-gray-100 py-6 rounded cursor-pointer hover:bg-gray-200">
                        <LuVideo className="text-2xl mb-2" />
                        <p>Video</p>
                    </div>

                </div>
            </div>

            <div className="bg-white rounded-xl  shadow-sm p-6">

                <div className="flex justify-between mb-5">
                    <h2 className="text-lg font-semibold">Recent Interactions</h2>
                    <button className="flex items-center gap-2 text-sm px-3 py-1 border rounded">
                        <FiRotateCcw />
                        Full History
                    </button>
                </div>

                <div className="divide-y">

                    {timeline.length === 0 && (
                        <p className="text-gray-500 py-4">No interactions yet</p>
                    )}

                    {timeline.slice(0, 4).map(item => (
                        <div key={item.id} className="flex justify-between py-4">

                            <div className="flex items-start gap-3">
                                {getIcon(item.type)}

                                <div>
                                    <p className="font-medium text-gray-800">{item.type}</p>
                                    <p className="text-sm text-gray-500">{item.title}</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400">{item.date}</p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default RightBottom