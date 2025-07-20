import './LeaderCard.css'

const LeaderCard = ({image, position, name}) => {
  return (
    <div className="leaderCard">
        <img src={image} alt={`A Pic Of ${name}`} width={300} height={350}/>
        <div className="text">
            <h2>
                {position}
            </h2>
            <p>
                {name}
            </p>
        </div>
    </div>
  )
}

export default LeaderCard