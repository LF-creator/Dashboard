import React from 'react';
import '../styles/Card.css';

const Card = ({ label, value, icon: Icon, change }) => {
  return (
    <div className="card">
      <div className="card-icon-container">
        <div className="icon-bubble">
          <Icon className="card-icon" />
        </div>
      </div>
      <div className="card-text">
        <div className="card-label">{label}</div>
        <div className="card-value-container">
          <div className="card-value">{value}</div>
          {change && <div className="card-change">{change}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;