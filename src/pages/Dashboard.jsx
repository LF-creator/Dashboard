import React, { useEffect, useState } from 'react';
import { fetchDashboard } from '../services/api';
import Card from '../components/Card';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDashboard().then(setData).catch(console.error);
  }, []);

  if (!data) return <p>Loading...</p>;

return (
  <div className="dashboard">
    {/* Main Stats */}
    <Card label="Unique Contacts" value={data.uniqueContacts} />
    <Card label="Frequency" value={data.frequency} />
    <Card label="Average Observation Time" value={data.observationTimeAvg + ' min'} />
    <Card label="Total Observation Time" value={data.observationTimeTotal} />
    <Card label="RAC" value={data.rac} />
    <Card label="Vehicles" value={data.vehicles} />
    <Card label="Aggregated Audience" value={data.aggregatedAudience} />
    <Card label="SOV" value={data.sov + '%'} />

    {/* Gender Section */}
    <div className="card-group">
      <h3>Gender Distribution</h3>
      <Card label="Female" value={data.gender?.female} />
      <Card label="Male" value={data.gender?.male} />
    </div>

    {/* Age Groups Section */}
    <div className="card-group">
      <h3>Age Groups</h3>
      {Object.entries(data.ageGroups || {}).map(([age, count]) => (
        <Card key={age} label={`Age ${age}`} value={count} />
      ))}
    </div>
  </div>
);
};

export default Dashboard;