import React from 'react'
import './EvCard.css'

const EvCard = ({image, event_name}) => {
  return (
    <div className="evCard">
        <img src={image} alt="image" width={300} height={250}/>
        <p>
            {event_name}
        </p>
    </div>
  )
}

export default EvCard