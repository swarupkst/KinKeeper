import React from 'react'
import RightTop from './RightTop'
import RightBottom from './RightBottom'

const Right = ({name}) => {
  return (
    <div>
      <RightTop />
      <RightBottom name={name} />
    </div>
  )
}

export default Right
