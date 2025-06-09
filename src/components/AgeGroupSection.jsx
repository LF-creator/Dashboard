import React from "react";
import "../styles/AgeGroupBox.css";

const AgeGroupBox = ({ ageGroups }) => {
  const max = Math.max(...Object.values(ageGroups));

  return (
    <div className="age-box">
      <h3>Age Group Distribution</h3>
      <div className="age-bars">
        {Object.entries(ageGroups).map(([age, count]) => {
          const percentage = (count / max) * 100;
          return (
            <div className="age-bar" key={age}>
              <span className="age-label">{age}</span>
              <div className="progress-bar">
                <div className="fill" style={{ width: `${percentage}%` }}></div>
              </div>
              <span className="age-count">{count}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgeGroupBox;