import React, { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Tooltip } from "recharts"

const COLORS = ["#7C3AED", "#22C55E", "#1F2937"] // purple, green, dark

const Stats = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")

  const loadData = () => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || []

    const filtered = filter
      ? stored.filter(item => item.type === filter)
      : stored

    const counts = {
      call: 0,
      text: 0,
      video: 0,
    }

    filtered.forEach(item => {
      if (item.type === "call") counts.call++
      if (item.type === "text") counts.text++
      if (item.type === "video") counts.video++
    })

    setData([
      { name: "Text", value: counts.text },
      { name: "Call", value: counts.call },
      { name: "Video", value: counts.video },
    ])
  }

  useEffect(() => {
    loadData()
    const interval = setInterval(loadData, 10000)
    return () => clearInterval(interval)
  }, [filter])

  return (
    <div className="w-10/12 mx-auto my-20">

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Friendship Analytics
      </h2>

      {/* Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="font-medium text-[#244D3F]">
            By Interaction Type
          </p>

        
        </div>

        {/* Chart */}
        {data.every(d => d.value === 0) ? (
          <p className="text-gray-400 text-center py-10">
            No interaction data yet
          </p>
        ) : (
          <div className="flex flex-col items-center">

            <PieChart width={250} height={250}>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}   // ✅ makes it donut
                outerRadius={100}
                paddingAngle={4}
                cornerRadius={8}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>

            {/* Custom Legend (bottom center like image) */}
            <div className="flex gap-6 mt-4 text-sm text-gray-600">
              {data.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  ></span>
                  {item.name}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default Stats