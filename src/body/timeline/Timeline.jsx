import React from 'react'
import List from './List'

const Timeline = () => {
  return (
    <div className='w-10/12 mx-auto py-20'>
      <h2 className='pb-6 text-5xl font-bold'>Timeline</h2>
<select  className="pr-30 pl-2 py-2 border rounded-md" defaultValue="">
  <option value="" disabled hidden > Filter timeline </option>
  <option value="meetup">Meetup</option>
  <option value="text">Text</option>
  <option value="video">Video</option>
</select>

<List />
    </div>
  )
}

export default Timeline
