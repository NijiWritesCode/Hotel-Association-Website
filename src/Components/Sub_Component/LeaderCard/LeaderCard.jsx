import './LeaderCard.css';

const Leadership = ({ image, position, name }) => {
  return (
    <div className="leader-card">
      {image && (
        <div className="image-container">
          <img src={image} alt={`${name}'s profile`} className="leader-image" />
        </div>
      )}
      <h3>{name}</h3>
      <p>{position}</p>
    </div>
  );
};

export default Leadership;