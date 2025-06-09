import React from 'react';
import '../styles/Card.css';

const Card = ({ label, value, icon: Icon }) => {
  return (
    <div className="card">
      <div className="card-header">
        {Icon && <Icon className="card-icon" />}
        <p className="card-label">{label}</p>
      </div>
      <p className="card-value">{value}</p>
    </div>
  );
};

export default Card;