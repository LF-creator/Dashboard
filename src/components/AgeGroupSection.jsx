import React from "react";
import "../styles/AgeGroupBox.css";

const AgeGroupBox = ({ ageGroups }) => {
  const max = Math.max(...Object.values(ageGroups));
  const maxVisualWidth = 60; // biggest bar fills 60% visually

  return (
    <div className="age-box">
      <h3 className="ageHeader">AGE GROUPS</h3>
      <div className="age-bars">
        {Object.entries(ageGroups).map(([age, count], index) => {
          const visualWidth = (count / max) * maxVisualWidth;

          return (
            <div className="age-bar" key={age}>
              <div className="age-header">
                <span className="age-label">{age}</span>
                <span className="age-count">{count}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="fill animate-fill"
                  style={{
                    width: `${visualWidth}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgeGroupBox;