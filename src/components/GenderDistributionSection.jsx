import React from 'react';
import GenderSection from './GenderSection';
import Charts from './Charts';


const GenderDistributionSection = ({ gender, ageGroups }) => {
  return (
    <div className="gender-distribution-section">
      <h3>Contacts by Gender</h3>
      <div className="gender-content">
        <GenderSection gender={gender} />
        <Charts gender={gender} ageGroups={ageGroups} />
      </div>
    </div>
  );
};

export default GenderDistributionSection;