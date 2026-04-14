import React, { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const COLORS = ["#7C3AED", "#22C55E", "#1F2937"]

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
    <div className="w-full max-w-10/12 mx-auto  sm:px-6 lg:px-8 my-10 sm:my-16">

      {/* Title */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
        Friendship Analytics
      </h2>

      {/* Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
          <p className="font-medium text-[#244D3F] text-sm sm:text-base">
            By Interaction Type
          </p>
        </div>

        {/* Chart */}
        {data.every(d => d.value === 0) ? (
          <p className="text-gray-400 text-center py-10">
            No interaction data yet
          </p>
        ) : (
          <div className="flex flex-col items-center w-full">

            {/* Responsive Chart */}
            <div className="w-full h-[250px] sm:h-[300px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="60%"
                    outerRadius="80%"
                    paddingAngle={4}
                    cornerRadius={8}
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 text-xs sm:text-sm text-gray-600">
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