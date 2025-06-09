import React from 'react';
import '../styles/Card.css';

const Card = ({ label, value, icon: Icon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="icon-bubble">
          <Icon className="card-icon" />
        </div>
        <p className="card-label">{label}</p>
      </div>
      <p className="card-value">{value}</p>
    </div>
  );
};
export default Card;