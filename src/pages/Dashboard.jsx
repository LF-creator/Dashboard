import React, { useEffect, useState } from 'react';
import { fetchDashboard } from '../services/api';
import Card from '../components/Card';
import GenderSection from '../components/GenderSection';
import AgeGroupSection from '../components/AgeGroupSection';
import Charts from '../components/Charts';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard().then(setData).catch(console.error);
  }, []);

  if (!data) return <p>Loading dashboard data...</p>;

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
      <GenderSection gender={data.gender} />
      <AgeGroupSection ageGroups={data.ageGroups} />
      <Charts gender={data.gender} ageGroups={data.ageGroups} />
    </div>
  );
};

export default Dashboard;