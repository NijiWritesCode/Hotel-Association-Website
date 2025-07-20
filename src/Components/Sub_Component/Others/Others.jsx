import React from 'react'
import './Others.css'

const Others = ({title, detail}) => {
  return (
    <div className="others">
        <h1>
            {title}
        </h1>
        <p>
            {detail}
        </p>
    </div>
  )
}

export default Others