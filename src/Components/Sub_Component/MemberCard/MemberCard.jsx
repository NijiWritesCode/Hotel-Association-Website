import React from 'react';
import './MemberCard.css';

const MemberCard = ({ serialNumber, hotelName, director, address, phone }) => {
  return (
    <div className="member-card">
      <span className="serial-number">{serialNumber}</span>
      <h3>{hotelName}</h3>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Phone:</strong> <a href={`tel:${phone}`} className="phone-link">{phone}</a></p>
    </div>
  );
};

export default MemberCard;