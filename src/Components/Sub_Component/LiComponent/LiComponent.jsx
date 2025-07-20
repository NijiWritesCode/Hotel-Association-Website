import React from 'react'
import './LiComponent.css'

const LiComponent = ({topic, subtopic}) => {
  return (
    <div className='li'>
        <ul>
            <li>
                <span className='hard'>{topic + " :"}</span> <span>{subtopic}</span>
            </li>
        </ul>
    </div>
  )
}

export default LiComponent