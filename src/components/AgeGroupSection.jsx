import React from "react";
import "../styles/AgeGroupBox.css";

const AgeGroupBox = ({ ageGroups }) => {
  const max = Math.pow(...Object.values(ageGroups));

  return (
    <div className="age-box">
      <h3 className="ageHeader">AGE GROUPS</h3>
      <div className="age-bars">
        {Object.entries(ageGroups).map(([age, count]) => {
          const percentage = (count / max) * 250;
          return (
            <div className="age-bar" key={age}>
              <div className="age-header">
                <span className="age-label">{age}</span>
                <span className="age-count">{count}%</span>
              </div>
              <div className="progress-bar">
                <div className="fill" style={{ width: `${percentage}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgeGroupBox;