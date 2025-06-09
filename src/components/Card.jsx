import React from 'react';
import '../styles/Card.css';

const Card = ({ label, value }) => (
  <div className="card">
  <div className="card-label">{label}</div>
  <div className="card-value">{value}</div>
  </div>
);

export default Card;