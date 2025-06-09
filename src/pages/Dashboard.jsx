import React, { useEffect, useState } from 'react';
import { fetchDashboard } from '../services/api';
import Card from '../components/Card';
import GenderSection from '../components/GenderSection';
import AgeGroupSection from '../components/AgeGroupSection';
import SkeletonCard from '../components/SkeletonCard';

import '../styles/Dashboard.css';

import {
  FaUser,
  FaClock,
  FaEye,
  FaCar,
  FaUsers,
  FaChartPie,
} from 'react-icons/fa';


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
    <div className="dashboard-container">
  <div className="dashboard">
    {/* Metric Cards */}
    <h1 className="dashboard-title">Dashboard</h1>
    <section className="card-grid">
      <Card label="Unique Contacts" value={data.uniqueContacts} icon={FaUser} />
      <Card label="Frequency" value={data.frequency} icon={FaClock} />
      <Card label="Avg. Observation Time" value={data.observationTimeAvg + 's'} icon={FaClock} />
      <Card label="Total Observation Time" value={data.observationTimeTotal} icon={FaClock} />
      <Card label="RAC" value={data.rac} icon={FaEye} />
      <Card label="Vehicles" value={data.vehicles} icon={FaCar} />
      <Card label="Aggregated Audience" value={data.aggregatedAudience} icon={FaUsers} />
      <Card label="SOV" value={data.sov + '%'} icon={FaChartPie} />
    </section>

    {/* Stacked Sections */}
    <section className="data-sections">
      <AgeGroupSection ageGroups={data.ageGroups} />
      <GenderSection gender={data.gender} />
    </section>
  </div>
</div>
  );
};

export default Dashboard;