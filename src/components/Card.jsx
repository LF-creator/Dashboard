import React from 'react';
import '../styles/Card.css';

const Card = ({ label, value }) => (
  <div className="card">
    <h3>{label}</h3>
    <p>{value}</p>
  </div>
);

export default Card;