import React, { useEffect, useState } from 'react'
import List from './List'

const Timeline = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || []
    setData(stored)
  }, [])

  const filteredData = filter
    ? data.filter(item => item.type === filter)
    : data

  return (
    <div className='bg-[#f8FAFC]'>
    <div className='w-10/12 mx-auto py-20'>
      <h2 className='pb-6 text-5xl font-bold'>Timeline</h2>

      <select
        className="pr-30 pl-2 py-2 border rounded-md"
        onChange={(e) => setFilter(e.target.value)}
        defaultValue=""
      >
        <option value="" >All</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      <List data={filteredData} />
    </div>
    </div>
  )
}

export default Timeline