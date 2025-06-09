import React, { useEffect, useState } from 'react';
import { fetchDashboard } from '../services/api';
import Card from '../components/Card';

import AgeGroupSection from '../components/AgeGroupSection';
import SkeletonCard from '../components/SkeletonCard';
import GenderDistributionSection from '../components/GenderDistributionSection';
import '../styles/Dashboard.css';


const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard().then(setData).catch(console.error);
  }, []);

if (!data) {
  return (
    <div className="dashboard">
      {Array.from({ length: 8 }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
      <div style={{ marginTop: '2rem' }}>
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}

  return (
    <div className="dashboard">
      {/* Main Stats */}
      <Card label="Unique Contacts" value={data.uniqueContacts} />
      <Card label="Frequency" value={data.frequency} />
      <Card label="Avg. Observation Time" value={data.observationTimeAvg + ' min'} />
      <Card label="Total Observation Time" value={data.observationTimeTotal} />
      <Card label="RAC" value={data.rac} />
      <Card label="Vehicles" value={data.vehicles} />
      <Card label="Aggregated Audience" value={data.aggregatedAudience} />
      <Card label="SOV" value={data.sov + '%'} />

      {/* Grouped Sections */}
      <AgeGroupSection ageGroups={data.ageGroups} />
      <GenderDistributionSection gender={data.gender} ageGroups={data.ageGroups} />
    </div>
  );
};

export default Dashboard;