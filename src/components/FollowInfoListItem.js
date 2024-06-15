import React from 'react'

function FollowInfoListItem({title,value}) {
  return (
    <li>
        <p className='value'>{value}</p>
        <p>{title}</p>
    </li>
  )
}

export default FollowInfoListItem