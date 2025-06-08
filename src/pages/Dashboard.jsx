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
    <div className="dashboard-container">
      <h1>{data.title}</h1>
      <div className="grid">
        <Card label="Unique Contacts" value={data.uniqueContacts} />
        <Card label="Frequency" value={data.frequency} />
        <Card label="Average Observation Time" value={data.observationTimeAvg + ' min'} />
        <Card label="Total Observation Time" value={data.observationTimeTotal} />
        <Card label="RAC" value={data.rac} />
        <Card label="Vehicles" value={data.vehicles} />
        <Card label="Aggregated Audience" value={data.aggregatedAudience} />
        <Card label="SOV" value={data.sov + '%'} />
      </div>
    </div>
  );
};

export default Dashboard;