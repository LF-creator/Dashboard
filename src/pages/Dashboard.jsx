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
        <Card label="Users Today" value={data.usersToday} />
        <Card label="Active Sessions" value={data.activeSessions} />
        <Card label="Conversion Rate" value={data.conversionRate} />
      </div>
    </div>
  );
};

export default Dashboard;